import { MetricCard } from "./MetricCard";
import { WorkbookTabs } from "./WorkbookTabs";
import type { SummaryOutput, ViewerSheet } from "./types";

interface WorkbookViewerProps {
  sheets: ViewerSheet[];
  summaryOutputs: SummaryOutput[];
}

export function WorkbookViewer({
  sheets,
  summaryOutputs,
}: WorkbookViewerProps) {
  return (
    <section
      id="workbook-viewer"
      aria-labelledby="workbook-viewer-heading"
      className="scroll-mt-32"
    >
      <div className="flex flex-col gap-5 border-t border-[#cbd2da] pt-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#667085]">
            Interactive workbook
          </p>
          <h2
            id="workbook-viewer-heading"
            className="mt-4 text-3xl tracking-[-0.035em] text-[#17202a] sm:text-4xl"
          >
            Financial model viewer
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-[#667085]">
          Values are displayed from the source workbook. Calculations are not
          recomputed or reinterpreted in the browser.
        </p>
      </div>

      {summaryOutputs.length > 0 ? (
        <div className="mt-10 grid gap-7 border-y border-[#cbd2da] bg-[#f0ece4]/60 py-7 sm:grid-cols-2 lg:grid-cols-3">
          {summaryOutputs.map((output) => (
            <MetricCard
              key={output.label}
              label={output.label}
              value={output.value}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-10">
        <WorkbookTabs sheets={sheets} />
      </div>
    </section>
  );
}
