import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import { ModelDownloadButtons } from "@/components/projects/chipotle-valuation/ModelDownloadButtons";
import { WorkbookViewer } from "@/components/projects/chipotle-valuation/WorkbookViewer";
import type {
  ChipotleModel,
  ViewerSheet,
} from "@/components/projects/chipotle-valuation/types";

const PDF_PATH =
  "/projects/chiptole-valuation/chipotle-valuation-report.pdf";

export const metadata: Metadata = {
  title: "Chipotle Valuation | Danyals",
  description:
    "A financial analysis and valuation project examining Chipotle through DuPont analysis, ratio analysis, and valuation methods.",
  alternates: {
    canonical: "/projects/chipotle-valuation",
  },
  openGraph: {
    title: "Chipotle Valuation | Danyals",
    description:
      "A financial analysis and valuation project examining Chipotle through DuPont analysis, ratio analysis, and valuation methods.",
    url: "/projects/chipotle-valuation",
    type: "article",
  },
};

const modelSections = [
  {
    number: "01",
    title: "DuPont Analysis",
    description:
      "Breaks return on equity into profitability, efficiency, and financial leverage components.",
  },
  {
    number: "02",
    title: "Ratio Analysis",
    description:
      "Reviews liquidity, profitability, operating efficiency, leverage, and market-related measures across the model’s periods.",
  },
  {
    number: "03",
    title: "Valuation",
    description:
      "Presents the workbook’s valuation assumptions, calculations, and estimated outputs.",
  },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isChipotleModel(value: unknown): value is ChipotleModel {
  return (
    isRecord(value) &&
    Array.isArray(value.sheets) &&
    Array.isArray(value.summaryOutputs) &&
    isRecord(value.stats)
  );
}

async function loadModelData(): Promise<ChipotleModel | null> {
  try {
    const modelPath = path.join(
      process.cwd(),
      "src",
      "data",
      "chipotle-model.json",
    );
    const rawModel = await fs.readFile(modelPath, "utf8");
    const parsedModel: unknown = JSON.parse(rawModel);
    return isChipotleModel(parsedModel) ? parsedModel : null;
  } catch {
    return null;
  }
}

function createViewerSheets(model: ChipotleModel): ViewerSheet[] {
  return model.sheets.map((sheet) => ({
    name: sheet.name,
    range: sheet.range,
    rowCount: sheet.rowCount,
    columnCount: sheet.columnCount,
    columnWidths: sheet.columnWidths,
    merges: sheet.merges,
    rows: sheet.rows.map((row) => ({
      rowNumber: row.rowNumber,
      role: row.role,
      cells: row.cells.map((cell) =>
        cell
          ? {
              display: cell.display,
              numericValue: cell.numericValue,
              valueUnavailable: cell.valueUnavailable,
              style: cell.style,
            }
          : null,
      ),
    })),
  }));
}

export default async function ChipotleValuationPage() {
  const model = await loadModelData();
  const viewerSheets = model ? createViewerSheets(model) : [];

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex h-[4.5rem] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.22em] text-zinc-950"
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center border border-zinc-800 text-[0.65rem] tracking-[-0.08em]"
            >
              DS
            </span>
            DANYALS
          </Link>
          <Link
            href="/#projects"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Back to Projects
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[82rem] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Equity Research &amp; Valuation
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-20">
            <div>
              <h1 className="max-w-4xl text-balance text-[2.8rem] font-medium leading-[1.02] tracking-[-0.052em] text-zinc-950 sm:text-6xl lg:text-[4.5rem]">
                Chipotle Valuation
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                A financial analysis project applying financial statement
                analysis, profitability decomposition, ratio analysis, and
                valuation methods to Chipotle Mexican Grill.
              </p>
            </div>
            <p className="border-l border-zinc-300 pl-5 text-xs leading-6 text-zinc-500">
              This academic project is presented for educational and portfolio
              purposes only and does not constitute investment advice.
            </p>
          </div>
          <div className="mt-10">
            <ModelDownloadButtons />
          </div>
        </section>

        <section
          aria-labelledby="model-sections-heading"
          className="bg-zinc-900 text-white"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Project scope
                </p>
                <h2
                  id="model-sections-heading"
                  className="mt-4 text-3xl font-medium tracking-[-0.04em]"
                >
                  Model sections
                </h2>
              </div>
              <div className="grid border-l border-t border-zinc-700 md:grid-cols-3">
                {modelSections.map((section) => (
                  <article
                    key={section.title}
                    className="flex min-h-56 flex-col border-b border-r border-zinc-700 p-5"
                  >
                    <span className="font-mono text-xs text-zinc-500">
                      {section.number}
                    </span>
                    <div className="mt-auto pt-10">
                      <h3 className="font-semibold text-zinc-100">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        {section.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[82rem] space-y-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          {model ? (
            <WorkbookViewer
              sheets={viewerSheets}
              summaryOutputs={model.summaryOutputs}
            />
          ) : (
            <section
              id="workbook-viewer"
              aria-labelledby="missing-model-heading"
              className="scroll-mt-24 border border-amber-300 bg-amber-50 p-6"
            >
              <h2
                id="missing-model-heading"
                className="text-xl font-semibold text-zinc-950"
              >
                Model data has not been generated
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700">
                Run{" "}
                <code className="bg-amber-100 px-1.5 py-0.5 font-mono text-xs">
                  npm run extract:chipotle
                </code>{" "}
                to generate the website data from the source workbook.
              </p>
            </section>
          )}

          <section
            id="valuation-report"
            aria-labelledby="valuation-report-heading"
            className="scroll-mt-24"
          >
            <div className="flex flex-col gap-5 border-t border-zinc-300 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Supporting document
                </p>
                <h2
                  id="valuation-report-heading"
                  className="mt-4 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl"
                >
                  Valuation report
                </h2>
              </div>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
              >
                Open PDF in new tab
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-8 overflow-hidden border border-zinc-300 bg-zinc-200">
              <iframe
                src={PDF_PATH}
                title="Chipotle valuation report"
                className="h-[34rem] w-full bg-white md:h-[52rem]"
              >
                <p>
                  Your browser cannot display the PDF.{" "}
                  <a href={PDF_PATH}>Open the valuation report</a> or{" "}
                  <a href={PDF_PATH} download>
                    download the PDF
                  </a>
                  .
                </p>
              </iframe>
            </div>
            <p className="mt-4 text-xs leading-5 text-zinc-500">
              If the embedded document is unavailable in your browser,{" "}
              <a
                href={PDF_PATH}
                className="underline decoration-zinc-400 underline-offset-4 hover:text-zinc-900"
              >
                open the report directly
              </a>{" "}
              or{" "}
              <a
                href={PDF_PATH}
                download
                className="underline decoration-zinc-400 underline-offset-4 hover:text-zinc-900"
              >
                download a copy
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-4 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-bold tracking-[0.2em] text-zinc-200">DANYALS</p>
          <p>Chipotle Valuation · Academic project</p>
        </div>
      </footer>
    </div>
  );
}
