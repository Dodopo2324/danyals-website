import type {
  CellRole,
  SheetMerge,
  ViewerCell,
  ViewerRow,
  ViewerSheet,
} from "./types";

function rowClassName(role: CellRole) {
  switch (role) {
    case "header":
      return "bg-zinc-800 text-white";
    case "section":
      return "bg-zinc-200/80 text-zinc-950";
    case "output":
      return "bg-[#eeede9] text-zinc-950";
    case "emphasis":
      return "bg-zinc-100 text-zinc-950";
    case "note":
      return "bg-[#f7f6f2] text-zinc-700";
    case "spacer":
      return "h-5 bg-[#fbfaf7]";
    default:
      return "text-zinc-700";
  }
}

function cellClassName(cell: ViewerCell | null, role: CellRole) {
  const isNumeric =
    cell?.numericValue !== null &&
    cell?.numericValue !== undefined &&
    cell.style.kind !== "date";
  const isNegative =
    (cell?.numericValue !== null &&
      cell?.numericValue !== undefined &&
      cell.numericValue < 0) ||
    Boolean(cell?.display.trim().match(/^[-(]/));

  return [
    "border-b border-r border-zinc-200 px-3 py-2.5 text-sm leading-5",
    role === "header"
      ? "border-zinc-600 font-semibold"
      : "bg-inherit font-normal",
    role === "section" || role === "output" || cell?.style.bold
      ? "font-semibold"
      : "",
    isNumeric ? "text-right font-mono tabular-nums whitespace-nowrap" : "",
    isNegative && role !== "header" ? "text-[#8a3a32]" : "",
    cell?.valueUnavailable ? "italic text-zinc-400" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function buildMergeMaps(merges: SheetMerge[]) {
  const starts = new Map<string, SheetMerge>();
  const covered = new Set<string>();

  for (const merge of merges) {
    starts.set(`${merge.startRow}:${merge.startColumn}`, merge);
    for (let row = merge.startRow; row <= merge.endRow; row += 1) {
      for (
        let column = merge.startColumn;
        column <= merge.endColumn;
        column += 1
      ) {
        if (row !== merge.startRow || column !== merge.startColumn) {
          covered.add(`${row}:${column}`);
        }
      }
    }
  }

  return { starts, covered };
}

function hasOnePopulatedCell(row: ViewerRow) {
  return row.cells.filter(
    (cell) => cell && (cell.display !== "" || cell.valueUnavailable),
  ).length === 1;
}

export function FinancialTable({ sheet }: { sheet: ViewerSheet }) {
  const { starts, covered } = buildMergeMaps(sheet.merges);

  return (
    <div className="max-h-[48rem] overflow-auto border border-zinc-300 bg-[#fbfaf7] shadow-[0_20px_55px_rgba(39,39,42,0.05)]">
      <table className="min-w-max border-separate border-spacing-0">
        <caption className="sr-only">
          {sheet.name}, workbook range {sheet.range}
        </caption>
        <colgroup>
          {Array.from({ length: sheet.columnCount }, (_, index) => (
            <col
              key={index}
              style={{
                width: `${Math.max(sheet.columnWidths[index] ?? 10, 7)}rem`,
              }}
            />
          ))}
        </colgroup>
        <tbody>
          {sheet.rows.map((row, rowIndex) => {
            const isNarrativeRow =
              (row.role === "note" || row.role === "section") &&
              hasOnePopulatedCell(row) &&
              !sheet.merges.some((merge) => merge.startRow === rowIndex);

            if (isNarrativeRow) {
              const narrativeCell = row.cells.find(
                (cell) => cell && cell.display !== "",
              );
              return (
                <tr key={row.rowNumber} className={rowClassName(row.role)}>
                  <th
                    scope="rowgroup"
                    colSpan={sheet.columnCount}
                    className="border-b border-zinc-300 px-4 py-3 text-left text-sm font-semibold leading-6"
                  >
                    {narrativeCell?.display.trim()}
                  </th>
                </tr>
              );
            }

            return (
              <tr
                key={row.rowNumber}
                className={`${rowClassName(row.role)} ${
                  row.role === "header" ? "sticky top-0 z-10" : ""
                }`}
              >
                {row.cells.map((cell, columnIndex) => {
                  const cellKey = `${rowIndex}:${columnIndex}`;
                  if (covered.has(cellKey)) return null;

                  const merge = starts.get(cellKey);
                  const display = cell?.valueUnavailable
                    ? "Value unavailable"
                    : (cell?.display.trim() ?? "");
                  const cellProps = {
                    className: cellClassName(cell, row.role),
                    colSpan: merge
                      ? merge.endColumn - merge.startColumn + 1
                      : undefined,
                    rowSpan: merge
                      ? merge.endRow - merge.startRow + 1
                      : undefined,
                  };

                  if (row.role === "header") {
                    return (
                      <th key={columnIndex} scope="col" {...cellProps}>
                        {display}
                      </th>
                    );
                  }

                  return (
                    <td key={columnIndex} {...cellProps}>
                      {display}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
