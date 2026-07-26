import { Reveal } from "@/components/site/Reveal";

const steps = [
  "Search",
  "Resolve identity",
  "Review financial or economic data",
  "Save or pin research",
  "Monitor refresh and source status",
];

export function ResearchWorkflow() {
  return (
    <section aria-labelledby="workflow-heading">
      <h2 id="workflow-heading" className="sr-only">
        Research workflow
      </h2>
      <ol className="grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step}>
            <Reveal delay={index * 70}>
              <div className="flex min-h-32 flex-col justify-between border-b border-r border-[#cbd2da] p-4">
                <span className="text-xs tabular-nums text-[#167d7a]">
                  0{index + 1}
                </span>
                <div className="flex items-end justify-between gap-3">
                  <span className="text-sm font-semibold leading-5 text-[#17202a]">
                    {step}
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="text-[#98a2b3]" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
