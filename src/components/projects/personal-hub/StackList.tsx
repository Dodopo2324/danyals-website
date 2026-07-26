const stack = [
  { label: "Backend", value: "Flask" },
  { label: "Frontend", value: "HTML, CSS, and JavaScript" },
  { label: "Data storage", value: "Local files and JSON" },
  {
    label: "Authentication",
    value: "Username and password with Flask sessions",
  },
  { label: "Hosting", value: "Currently self-hosted on a Windows PC" },
  { label: "Planned access", value: "hub.danyals.ca" },
];

const sources = [
  "FactSet",
  "GLEIF",
  "Bank of Canada",
  "Weather data",
  "SEC EDGAR",
  "Statistics Canada",
];

export function StackList() {
  return (
    <section aria-labelledby="technology-heading">
      <div className="grid gap-8 border-t border-zinc-300 pt-5 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Public stack
          </p>
          <h2
            id="technology-heading"
            className="mt-4 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl"
          >
            Technology
          </h2>
        </div>
        <div>
          <dl className="divide-y divide-zinc-300 border-y border-zinc-300">
            {stack.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr]"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  {item.label}
                </dt>
                <dd className="text-sm text-zinc-800">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              APIs and data sources
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sources.map((source) => (
                <li
                  key={source}
                  className="border border-zinc-300 bg-white/50 px-3 py-2 text-xs text-zinc-700"
                >
                  {source}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-6 text-zinc-500">
              Custom-domain access is planned or in progress; the system is not
              currently hosted on the portfolio site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
