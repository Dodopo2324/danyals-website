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
    <div className="financial-scroll overflow-x-auto border border-[#cbd2da] bg-[#f8f6f1]">
      <table className="w-full min-w-[48rem] border-collapse text-left">
        <caption className="sr-only">
          Current Market Intelligence provider status
        </caption>
        <thead className="bg-[#0d1b2a] text-[#f5f1e8]">
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
            <tr key={provider.name} className="border-t border-[#cbd2da]">
              <th
                scope="row"
                className="px-4 py-4"
              >
                <BrandMark name={provider.name} />
              </th>
              <td className="px-4 py-4 text-xs text-[#667085]">
                {provider.source}
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex border border-[#cbd2da] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#344054]">
                  {provider.status}
                </span>
              </td>
              <td className="max-w-lg px-4 py-4 text-xs leading-6 text-[#667085]">
                {provider.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import { BrandMark } from "@/components/site/BrandMark";
