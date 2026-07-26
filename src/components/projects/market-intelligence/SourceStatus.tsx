const providers = [
  {
    name: "FactSet",
    source: "Licensed source",
    status: "Requires entitlement",
    detail:
      "Configured, but the current account or allowed IP range does not have access to the requested endpoint.",
  },
  {
    name: "GLEIF",
    source: "Public source",
    status: "Connected",
    detail: "Implemented and connected through the public GLEIF API.",
  },
  {
    name: "Bank of Canada",
    source: "Public source",
    status: "Connected",
    detail: "Implemented and connected through the public Valet API.",
  },
  {
    name: "Statistics Canada",
    source: "Public source",
    status: "Connected",
    detail: "Implemented and connected through the public Web Data Service.",
  },
  {
    name: "SEC EDGAR",
    source: "Public source",
    status: "Not yet tested",
    detail: "Integrated into the source framework; validation remains planned.",
  },
];

export function SourceStatus() {
  return (
    <div className="overflow-x-auto border border-zinc-300 bg-[#fbfaf7]">
      <table className="min-w-[48rem] w-full border-collapse text-left">
        <caption className="sr-only">
          Current Market Intelligence provider status
        </caption>
        <thead className="bg-zinc-800 text-white">
          <tr>
            <th scope="col" className="px-4 py-3 text-xs font-semibold">
              Provider
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold">
              Access
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold">
              Status
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold">
              Current state
            </th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.name} className="border-t border-zinc-300">
              <th
                scope="row"
                className="px-4 py-4 text-sm font-semibold text-zinc-950"
              >
                {provider.name}
              </th>
              <td className="px-4 py-4 text-xs text-zinc-600">
                {provider.source}
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex border border-zinc-400 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-zinc-700">
                  {provider.status}
                </span>
              </td>
              <td className="max-w-lg px-4 py-4 text-xs leading-6 text-zinc-600">
                {provider.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
