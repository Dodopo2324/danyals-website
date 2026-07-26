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
        className="inline-flex min-h-12 items-center justify-center gap-7 border border-[#49c6c2] bg-[#49c6c2] px-5 text-sm font-semibold text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6dd4d1]"
      >
        View Model <Arrow />
      </a>
      <a
        href="#valuation-report"
        className="inline-flex min-h-12 items-center justify-center gap-7 border border-[#cbd2da] px-5 text-sm font-semibold text-[#17202a] transition duration-300 hover:-translate-y-0.5 hover:border-[#167d7a] hover:bg-white"
      >
        Read Report <Arrow />
      </a>
      <a
        href={EXCEL_PATH}
        download
        className="inline-flex min-h-12 items-center justify-center gap-6 border border-[#cbd2da] px-5 text-sm font-medium text-[#667085] transition duration-300 hover:-translate-y-0.5 hover:border-[#167d7a] hover:text-[#17202a]"
      >
        Download Excel <Arrow down />
      </a>
      <a
        href={PDF_PATH}
        download
        className="inline-flex min-h-12 items-center justify-center gap-6 border border-[#cbd2da] px-5 text-sm font-medium text-[#667085] transition duration-300 hover:-translate-y-0.5 hover:border-[#167d7a] hover:text-[#17202a]"
      >
        Download PDF <Arrow down />
      </a>
    </div>
  );
}
