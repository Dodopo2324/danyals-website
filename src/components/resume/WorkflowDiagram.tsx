import { Reveal } from "@/components/site/Reveal";

const workflow = [
  {
    title: "Initial inquiry",
    short: "General information received",
    description:
      "A prospective client submitted general information after responding to an advertisement or referral.",
  },
  {
    title: "Financial consultation",
    short: "Circumstances and objectives reviewed",
    description:
      "I contacted the client, explained the firm’s role, and reviewed their debts, payments, financial history, assets, household circumstances, and objectives.",
  },
  {
    title: "Document collection",
    short: "Supporting information coordinated",
    description:
      "I coordinated the collection of identity, tax, employment, income, creditor, and asset documentation and followed up on missing items.",
  },
  {
    title: "Financial review",
    short: "Repayment capacity assessed",
    description:
      "I reviewed creditor balances, assets, exemptions, income, expenses, and repayment capacity and prepared a feasible proposal structure.",
  },
  {
    title: "Final verification",
    short: "Application details confirmed",
    description:
      "I completed a final call with the client to verify application details, close information gaps, and confirm the proposed payment structure.",
  },
  {
    title: "Trustee review",
    short: "Independent review and filing",
    description:
      "The completed file was transferred to a Licensed Insolvency Trustee for independent review, the statutory meeting, and filing.",
  },
];

export function WorkflowDiagram() {
  return (
    <div>
      <ol className="grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-6">
        {workflow.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 65}>
              <div className="flex min-h-40 flex-col border-b border-r border-[#cbd2da] p-4">
                <span className="text-xs tabular-nums text-[#167d7a]">
                  0{index + 1}
                </span>
                <div className="mt-auto pt-8">
                  <h4 className="text-sm font-semibold text-[#17202a]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#667085]">
                    {step.short}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <details className="disclosure mt-5 border-y border-[#cbd2da]">
        <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-5 text-sm font-semibold text-[#17202a]">
          Full workflow descriptions
          <span className="disclosure-icon text-xl font-normal text-[#167d7a] transition-transform">
            +
          </span>
        </summary>
        <ol className="grid gap-x-10 gap-y-6 border-t border-[#cbd2da] py-7 sm:grid-cols-2">
          {workflow.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3">
              <span className="text-xs tabular-nums text-[#98a2b3]">
                0{index + 1}
              </span>
              <div>
                <h5 className="text-sm font-semibold text-[#17202a]">
                  {step.title}
                </h5>
                <p className="mt-2 text-xs leading-6 text-[#667085]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </details>
      <p className="mt-6 border-l-2 border-[#167d7a] pl-4 text-xs leading-6 text-[#667085]">
        My direct involvement generally concluded once the completed file was
        transferred to the Licensed Insolvency Trustee.
      </p>
    </div>
  );
}
