const workflow = [
  {
    title: "Initial inquiry",
    description:
      "A prospective client submitted general information after responding to an advertisement or referral.",
  },
  {
    title: "Financial consultation",
    description:
      "I contacted the client, explained the firm’s role, and reviewed their debts, payments, financial history, assets, household circumstances, and objectives.",
  },
  {
    title: "Document collection",
    description:
      "I coordinated the collection of identity, tax, employment, income, creditor, and asset documentation and followed up on missing items.",
  },
  {
    title: "Financial review",
    description:
      "I reviewed creditor balances, assets, exemptions, income, expenses, and repayment capacity and prepared a feasible proposal structure.",
  },
  {
    title: "Final client verification",
    description:
      "I completed a final call with the client to verify application details, close information gaps, and confirm the proposed payment structure.",
  },
  {
    title: "Trustee review and filing",
    description:
      "The completed file was transferred to a Licensed Insolvency Trustee for independent review, the statutory meeting, and filing.",
  },
];

export function WorkflowDiagram() {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute left-[8.33%] right-[8.33%] top-[1.2rem] hidden border-t border-zinc-400 lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-0 border-t border-zinc-300 lg:grid-cols-6 lg:border-t-0">
          {workflow.map((step, index) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[2.5rem_1fr] gap-4 border-b border-zinc-300 py-6 lg:block lg:border-b-0 lg:border-r lg:px-4 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="relative z-10 grid size-10 place-items-center border border-zinc-400 bg-[#f4f3ef] font-mono text-[0.68rem] text-zinc-600 lg:mx-auto">
                0{index + 1}
              </span>
              <div className="lg:mt-6">
                <h4 className="text-sm font-semibold leading-5 text-zinc-950 lg:min-h-10">
                  {step.title}
                </h4>
                <p className="mt-3 text-xs leading-5 text-zinc-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-8 border-l-2 border-zinc-800 pl-4 text-sm leading-6 text-zinc-600">
        My direct involvement generally concluded once the completed file was
        transferred to the Licensed Insolvency Trustee.
      </p>
    </div>
  );
}
