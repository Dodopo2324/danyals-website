const objectives = [
  "Track companies",
  "Review financial observations across multiple periods",
  "Resolve legal entities and identifiers",
  "Browse Canadian economic indicators",
  "Monitor data-source health",
  "Save research history",
  "Pin frequently used items",
  "Export selected data where supported",
];

export function ResearchWorkflow() {
  return (
    <section aria-labelledby="purpose-heading" className="bg-zinc-900 text-white">
      <div className="mx-auto grid max-w-[82rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-8 lg:px-12">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Project purpose
          </p>
          <h2
            id="purpose-heading"
            className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
          >
            Why I built it
          </h2>
        </div>
        <div>
          <p className="max-w-3xl text-base leading-8 text-zinc-300">
            Financial and economic research often requires moving between
            multiple websites, APIs, investor-relations pages, public
            databases, and professional platforms. Market Intelligence was
            built to reduce that fragmentation through a single personal
            workspace for organization and convenience—not to replace
            institutional data platforms.
          </p>
          <ul className="mt-10 grid border-l border-t border-zinc-700 sm:grid-cols-2">
            {objectives.map((objective, index) => (
              <li
                key={objective}
                className="flex min-h-24 flex-col justify-between border-b border-r border-zinc-700 p-4 text-sm text-zinc-300"
              >
                <span className="font-mono text-[0.65rem] text-zinc-500">
                  0{index + 1}
                </span>
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
