import type { Metadata } from "next";
import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";
import { ModelDownloadButtons } from "@/components/projects/chipotle-valuation/ModelDownloadButtons";
import { WorkbookViewer } from "@/components/projects/chipotle-valuation/WorkbookViewer";
import type {
  ChipotleModel,
  ViewerSheet,
} from "@/components/projects/chipotle-valuation/types";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ProjectNavigation } from "@/components/site/ProjectNavigation";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const PDF_PATH =
  "/projects/chiptole-valuation/chipotle-valuation-report.pdf";

const title = "Chipotle Valuation | Danyals";
const description =
  "A financial analysis and valuation project examining Chipotle through DuPont analysis, ratio analysis, and valuation methods.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/chipotle-valuation" },
  openGraph: {
    title,
    description,
    url: "/projects/chipotle-valuation",
    type: "article",
  },
  twitter: { card: "summary", title, description },
};

const modelSections = [
  {
    number: "01",
    title: "DuPont Analysis",
    description:
      "Decomposes return on equity into profitability, efficiency, and leverage.",
  },
  {
    number: "02",
    title: "Ratio Analysis",
    description:
      "Reviews liquidity, profitability, efficiency, leverage, and market measures.",
  },
  {
    number: "03",
    title: "Valuation",
    description:
      "Presents the workbook’s assumptions, calculations, and estimated outputs.",
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
    <div className="min-h-screen bg-[#f8f6f1] text-[#17202a]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#49c6c2] px-4 py-3 text-sm font-semibold text-[#07111f] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader active="projects" />

      <main id="main-content">
        <section className="mx-auto grid max-w-[82rem] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-12">
          <Reveal>
            <Eyebrow>Equity research and valuation</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.7rem] leading-[1.06] tracking-[-0.045em] text-[#17202a] sm:text-6xl lg:text-[4.2rem]">
              Chipotle Valuation
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
              An academic project applying financial-statement analysis,
              profitability decomposition, ratio analysis, and valuation
              methods to Chipotle Mexican Grill.
            </p>
            <p className="mt-5 max-w-2xl border-l border-[#167d7a] pl-4 text-xs leading-6 text-[#667085]">
              Presented for educational and portfolio purposes only. This work
              is not investment advice and does not imply endorsement by
              Chipotle.
            </p>
            <div className="mt-8">
              <ModelDownloadButtons />
            </div>
          </Reveal>
          <Reveal direction="right">
            <figure className="border border-[#cbd2da] bg-[#f0ece4] p-3">
              <Image
                src="/resume/images/chipotle-valuation.png"
                width={960}
                height={475}
                alt="SWOT analysis from the academic Chipotle valuation project"
                preload
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="h-auto w-full object-contain"
              />
              <figcaption className="mt-3 text-xs leading-5 text-[#667085]">
                Selected project visual; Chipotle is the subject of independent
                academic analysis.
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section
          aria-labelledby="overview-heading"
          className="dark-focus bg-[#07111f] text-[#f5f1e8]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <SectionHeading
              eyebrow="Project overview"
              title="A structured view of performance and value"
              id="overview-heading"
              description="The project moves from historical financial performance to profitability decomposition, operating and market ratios, and a valuation view. The website preserves the source workbook’s displayed values and makes the report available beside an interactive browser viewer."
              dark
            />
            <div className="mt-10 grid border-l border-t border-[#23364a] md:grid-cols-3">
              {modelSections.map((section) => (
                <article
                  key={section.title}
                  className="min-h-52 border-b border-r border-[#23364a] p-5"
                >
                  <span className="text-xs tabular-nums text-[#49c6c2]">
                    {section.number}
                  </span>
                  <h3 className="mt-10 text-xl text-[#f5f1e8]">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#a7b0be]">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[82rem] space-y-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          {model ? (
            <WorkbookViewer
              sheets={viewerSheets}
              summaryOutputs={model.summaryOutputs}
            />
          ) : (
            <section
              id="workbook-viewer"
              aria-labelledby="missing-model-heading"
              className="scroll-mt-32 border border-[#b99a5b] bg-[#fff8e8] p-6"
            >
              <h2
                id="missing-model-heading"
                className="text-xl text-[#17202a]"
              >
                Model data has not been generated
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667085]">
                Run{" "}
                <code className="bg-[#f6e8c8] px-1.5 py-0.5 text-xs">
                  npm run extract:chipotle
                </code>{" "}
                to generate website data from the source workbook.
              </p>
            </section>
          )}

          <section
            id="valuation-report"
            aria-labelledby="valuation-report-heading"
            className="scroll-mt-32"
          >
            <div className="flex flex-col gap-5 border-t border-[#cbd2da] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Supporting document</Eyebrow>
                <h2
                  id="valuation-report-heading"
                  className="mt-4 text-3xl text-[#17202a] sm:text-4xl"
                >
                  Valuation report
                </h2>
              </div>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#167d7a]"
              >
                Open PDF in new tab <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="mt-8 overflow-hidden border border-[#cbd2da] bg-[#f0ece4] p-2">
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
            <p className="mt-4 text-xs leading-5 text-[#667085]">
              If the embed is unavailable,{" "}
              <a
                href={PDF_PATH}
                className="font-semibold text-[#167d7a] underline underline-offset-4"
              >
                open the report directly
              </a>{" "}
              or{" "}
              <a
                href={PDF_PATH}
                download
                className="font-semibold text-[#167d7a] underline underline-offset-4"
              >
                download a copy
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="methodology-heading">
            <SectionHeading
              eyebrow="Methodology and limitations"
              title="A transparent academic model"
              id="methodology-heading"
            />
            <div className="mt-9 grid gap-8 lg:grid-cols-2">
              <p className="text-sm leading-7 text-[#667085]">
                The browser viewer displays values extracted at build time from
                the source workbook. It does not recompute formulas,
                reinterpret assumptions, or replace the downloadable model.
                Workbook ranges, merged cells, formats, and unavailable cached
                values are handled by the extraction and viewer pipeline.
              </p>
              <p className="text-sm leading-7 text-[#667085]">
                The analysis is limited by its source period, assumptions,
                academic scope, and the methods selected. It should be read as
                project evidence rather than a current recommendation or a
                complete institutional research product.
              </p>
            </div>
          </section>

          <ProjectNavigation
            previous={{
              label: "Market Intelligence",
              href: "/projects/market-intelligence",
            }}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
