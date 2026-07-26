const EXCEL_PATH =
  "/projects/chiptole-valuation/chipotle-valuation-model.xltx";
const PDF_PATH =
  "/projects/chiptole-valuation/chipotle-valuation-report.pdf";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span aria-hidden="true" className="font-mono text-xs">
      {down ? "↓" : "→"}
    </span>
  );
}

export function ModelDownloadButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#workbook-viewer"
        className="inline-flex min-h-12 items-center justify-center gap-7 bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:bg-zinc-700"
      >
        View Model <Arrow />
      </a>
      <a
        href="#valuation-report"
        className="inline-flex min-h-12 items-center justify-center gap-7 border border-zinc-400 px-5 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-900 hover:bg-white focus-visible:border-zinc-900 focus-visible:bg-white"
      >
        Read Report <Arrow />
      </a>
      <a
        href={EXCEL_PATH}
        download
        className="inline-flex min-h-12 items-center justify-center gap-6 border border-zinc-300 px-5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-700 hover:text-zinc-950 focus-visible:border-zinc-700 focus-visible:text-zinc-950"
      >
        Download Excel <Arrow down />
      </a>
      <a
        href={PDF_PATH}
        download
        className="inline-flex min-h-12 items-center justify-center gap-6 border border-zinc-300 px-5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-700 hover:text-zinc-950 focus-visible:border-zinc-700 focus-visible:text-zinc-950"
      >
        Download PDF <Arrow down />
      </a>
    </div>
  );
}
