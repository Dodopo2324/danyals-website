import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import XLSX from "xlsx";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const workbookPath = path.join(
  projectRoot,
  "public",
  "projects",
  "chiptole-valuation",
  "chipotle-valuation-model.xltx",
);
const outputPath = path.join(
  projectRoot,
  "src",
  "data",
  "chipotle-model.json",
);
const requiredSheets = ["DuPont Analysis", "Ratio Analysis", "Valuation"];
const summaryLabels = [
  "Average of Valuations",
  "Average excluding P/B",
  "Current Share Price",
];

function fail(message, cause) {
  console.error(`\nChipotle model extraction failed: ${message}`);
  if (cause instanceof Error && cause.message) {
    console.error(`Details: ${cause.message}`);
  }
  process.exit(1);
}

function normalizeRgb(color) {
  if (!color || typeof color !== "object" || !("rgb" in color)) {
    return null;
  }

  const rgb = String(color.rgb).replace(/^FF/i, "").toUpperCase();
  return /^[0-9A-F]{6}$/.test(rgb) ? `#${rgb}` : null;
}

function classifyNumberFormat(numberFormat, displayValue) {
  const format = numberFormat.toLowerCase();

  if (format.includes("%")) return "percentage";
  if (/[$€£¥]|cad|usd/.test(format)) return "currency";
  if (/[0#][^;]*["']?x["']?/i.test(numberFormat)) return "multiple";
  if (/[ymdhs]/i.test(numberFormat) && /[/-]/.test(numberFormat)) return "date";
  if (
    displayValue !== "" &&
    /^[-+()]?[$€£¥]?\s*[\d,.]+%?$/.test(displayValue)
  ) {
    return displayValue.includes("%") ? "percentage" : "number";
  }

  return "general";
}

function hasExternalReference(formula) {
  return (
    /https?:\/\/|file:\/|\\\\|[A-Za-z]:\\/i.test(formula) ||
    /\[[^\]]+\][^!]*!/i.test(formula)
  );
}

function isPopulatedCell(cell) {
  return Boolean(
    cell &&
      (cell.f ||
        (cell.v !== undefined && cell.v !== null && String(cell.v) !== "")),
  );
}

function getCellStyle(cell) {
  const style =
    cell && typeof cell.s === "object" && cell.s !== null ? cell.s : {};
  const numberFormat =
    typeof cell?.z === "string"
      ? cell.z
      : typeof style.numFmt === "string"
        ? style.numFmt
        : "";
  const display = cell?.w === undefined ? "" : String(cell.w);

  return {
    numberFormat: numberFormat || null,
    kind: classifyNumberFormat(numberFormat, display),
    bold: Boolean(style.font?.bold),
    fill:
      normalizeRgb(style.fill?.fgColor) ??
      normalizeRgb(style.fgColor) ??
      null,
    align:
      typeof style.alignment?.horizontal === "string"
        ? style.alignment.horizontal
        : null,
  };
}

function classifyRow(cells, rowNumber) {
  const populated = cells.filter((cell) => cell && cell.display !== "");
  const text = populated.map((cell) => cell.display.trim());
  const first = text[0] ?? "";

  if (populated.length === 0) return "spacer";
  if (/^(purpose|conclusion|concluding statement|overall)/i.test(first)) {
    return "note";
  }
  if (
    text.some((value) => value === "Year") ||
    (text.includes("Value") && text.length > 1)
  ) {
    return "header";
  }
  if (
    rowNumber <= 3 ||
    (populated.length === 1 &&
      /(?:method|intrinsic value|analysis)$/i.test(first))
  ) {
    return "section";
  }
  if (summaryLabels.includes(first)) return "output";
  if (populated.some((cell) => cell.style.bold || cell.style.fill)) {
    return "emphasis";
  }

  return "body";
}

function extractSheet(workbook, sheetName) {
  const sheet = workbook.Sheets[sheetName];
  const originalRange = XLSX.utils.decode_range(sheet["!ref"] ?? "A1:A1");
  const merges = Array.isArray(sheet["!merges"]) ? sheet["!merges"] : [];
  let lastRow = originalRange.s.r;
  let lastColumn = originalRange.s.c;
  let formulaCount = 0;
  let formulasWithoutCachedValues = 0;
  let redactedExternalFormulas = 0;

  for (let row = originalRange.s.r; row <= originalRange.e.r; row += 1) {
    for (
      let column = originalRange.s.c;
      column <= originalRange.e.c;
      column += 1
    ) {
      const cell = sheet[XLSX.utils.encode_cell({ r: row, c: column })];
      if (isPopulatedCell(cell)) {
        lastRow = Math.max(lastRow, row);
        lastColumn = Math.max(lastColumn, column);
      }
    }
  }

  for (const merge of merges) {
    lastRow = Math.max(lastRow, merge.e.r);
    lastColumn = Math.max(lastColumn, merge.e.c);
  }

  const rows = [];

  for (let row = originalRange.s.r; row <= lastRow; row += 1) {
    const cells = [];

    for (
      let column = originalRange.s.c;
      column <= lastColumn;
      column += 1
    ) {
      const address = XLSX.utils.encode_cell({ r: row, c: column });
      const cell = sheet[address];

      if (!cell) {
        cells.push(null);
        continue;
      }

      const formula = typeof cell.f === "string" ? cell.f : null;
      const formulaUnavailable =
        Boolean(formula) &&
        (cell.v === undefined || cell.v === null || cell.t === "z");
      let safeFormula = formula;
      let formulaRedacted = false;

      if (formula) {
        formulaCount += 1;
        if (formulaUnavailable) formulasWithoutCachedValues += 1;
        if (hasExternalReference(formula)) {
          safeFormula = null;
          formulaRedacted = true;
          redactedExternalFormulas += 1;
        }
      }

      const displayedValue = formulaUnavailable
        ? ""
        : cell.w !== undefined
          ? String(cell.w)
          : cell.v !== undefined && cell.v !== null
            ? String(cell.v)
            : "";

      cells.push({
        address,
        display: displayedValue,
        numericValue: typeof cell.v === "number" ? cell.v : null,
        formula: safeFormula,
        formulaRedacted,
        valueUnavailable: formulaUnavailable,
        style: getCellStyle(cell),
      });
    }

    rows.push({
      rowNumber: row + 1,
      role: classifyRow(cells, row + 1),
      cells,
    });
  }

  const trimmedRange = XLSX.utils.encode_range({
    s: originalRange.s,
    e: { r: lastRow, c: lastColumn },
  });

  return {
    name: sheetName,
    range: trimmedRange,
    startRow: originalRange.s.r,
    startColumn: originalRange.s.c,
    rowCount: lastRow - originalRange.s.r + 1,
    columnCount: lastColumn - originalRange.s.c + 1,
    columnWidths: Array.from(
      { length: lastColumn - originalRange.s.c + 1 },
      (_, index) => {
        const width = sheet["!cols"]?.[originalRange.s.c + index]?.wch;
        return typeof width === "number"
          ? Math.max(7, Math.min(28, Math.round(width * 10) / 10))
          : null;
      },
    ),
    merges: merges
      .filter(
        (merge) =>
          merge.s.r <= lastRow &&
          merge.s.c <= lastColumn &&
          merge.e.r >= originalRange.s.r &&
          merge.e.c >= originalRange.s.c,
      )
      .map((merge) => ({
        range: XLSX.utils.encode_range(merge),
        startRow: merge.s.r - originalRange.s.r,
        startColumn: merge.s.c - originalRange.s.c,
        endRow: merge.e.r - originalRange.s.r,
        endColumn: merge.e.c - originalRange.s.c,
      })),
    rows,
    stats: {
      formulaCount,
      formulasWithoutCachedValues,
      redactedExternalFormulas,
    },
  };
}

function findSummaryOutputs(sheet) {
  const outputs = [];

  for (const label of summaryLabels) {
    for (const row of sheet.rows) {
      const labelIndex = row.cells.findIndex(
        (cell) => cell?.display.trim() === label,
      );
      if (labelIndex === -1) continue;

      const valueCell = row.cells
        .slice(labelIndex + 1)
        .find(
          (cell) =>
            cell &&
            cell.display !== "" &&
            !["=", "x"].includes(cell.display.trim()),
        );

      if (valueCell && !valueCell.valueUnavailable) {
        outputs.push({
          label,
          value: valueCell.display,
          sourceCell: valueCell.address,
        });
      }
      break;
    }
  }

  return outputs.slice(0, 4);
}

if (!fs.existsSync(workbookPath)) {
  fail(
    `Workbook not found at ${path.relative(projectRoot, workbookPath)}. ` +
      "Preserve the expected public/projects/chiptole-valuation path.",
  );
}

let workbook;

try {
  workbook = XLSX.readFile(workbookPath, {
    cellDates: false,
    cellFormula: true,
    cellHTML: false,
    cellNF: true,
    cellStyles: true,
  });
} catch (error) {
  fail("The workbook could not be parsed.", error);
}

const availableSheets = workbook.SheetNames;
const missingSheets = requiredSheets.filter(
  (sheetName) => !availableSheets.includes(sheetName),
);

if (missingSheets.length > 0) {
  fail(
    `Missing required sheet${missingSheets.length === 1 ? "" : "s"}: ` +
      `${missingSheets.join(", ")}. Available sheets: ${availableSheets.join(", ")}`,
  );
}

const workbookSheetMetadata = workbook.Workbook?.Sheets ?? [];
const hiddenRequiredSheets = requiredSheets.filter((sheetName) => {
  const metadata = workbookSheetMetadata.find(
    (sheet) => sheet.name === sheetName,
  );
  return Boolean(metadata?.Hidden);
});

if (hiddenRequiredSheets.length > 0) {
  fail(
    `Required sheet${hiddenRequiredSheets.length === 1 ? "" : "s"} ` +
      `${hiddenRequiredSheets.join(", ")} ${hiddenRequiredSheets.length === 1 ? "is" : "are"} hidden and will not be exported.`,
  );
}

const sheets = requiredSheets.map((sheetName) =>
  extractSheet(workbook, sheetName),
);
const valuationSheet = sheets.find((sheet) => sheet.name === "Valuation");
const generatedData = {
  formatVersion: 1,
  sourceFile: path.basename(workbookPath),
  sheetOrder: requiredSheets,
  sheets,
  summaryOutputs: valuationSheet ? findSummaryOutputs(valuationSheet) : [],
  stats: {
    formulaCount: sheets.reduce(
      (total, sheet) => total + sheet.stats.formulaCount,
      0,
    ),
    formulasWithoutCachedValues: sheets.reduce(
      (total, sheet) => total + sheet.stats.formulasWithoutCachedValues,
      0,
    ),
    redactedExternalFormulas: sheets.reduce(
      (total, sheet) => total + sheet.stats.redactedExternalFormulas,
      0,
    ),
  },
};

try {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(generatedData, null, 2)}\n`);
} catch (error) {
  fail("The generated JSON file could not be written.", error);
}

console.log("Chipotle model extraction complete.");
for (const sheet of sheets) {
  console.log(
    `- ${sheet.name}: ${sheet.range} ` +
      `(${sheet.rowCount} rows × ${sheet.columnCount} columns)`,
  );
}
console.log(
  `- Formulas without cached values: ${generatedData.stats.formulasWithoutCachedValues}`,
);
console.log(
  `- External formulas omitted: ${generatedData.stats.redactedExternalFormulas}`,
);
console.log(
  `- Output: ${path.relative(projectRoot, outputPath).replaceAll("\\", "/")}`,
);
