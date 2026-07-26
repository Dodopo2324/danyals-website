import { Reveal } from "@/components/site/Reveal";

const experiences = [
  {
    role: "Financial Debt Advisor",
    company: "msi Spergel Inc.",
    period: "June 2025 – April 2026",
    facts: [
      "90+ ultimately filed proposals",
      "Primary client contact",
      "Financial review and proposal structuring",
    ],
    href: "#msi-spergel",
  },
  {
    role: "Client Relations & Finance Partner",
    company: "PiktureIt Media Production",
    period: "February 2024 – June 2025",
    facts: [
      "Approximately eight recurring contracts",
      "Pricing and business operations",
      "Client and production management",
    ],
    href: "#piktureit",
  },
];

export function ExperienceTimeline() {
  return (
    <ol className="mt-10 border-y border-[#cbd2da]">
      {experiences.map((experience, index) => (
        <li key={experience.role}>
          <Reveal delay={index * 90}>
            <article className="grid gap-6 border-b border-[#cbd2da] py-7 last:border-b-0 lg:grid-cols-[0.12fr_0.78fr_1.2fr_auto] lg:items-center lg:gap-8">
              <span className="text-xs tabular-nums text-[#98a2b3]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl text-[#17202a]">{experience.role}</h3>
                <p className="mt-2 text-xs text-[#667085]">
                  {experience.company} · {experience.period}
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {experience.facts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-center gap-2 text-xs text-[#667085]"
                  >
                    <span className="size-1 bg-[#167d7a]" aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
              <a
                href={experience.href}
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#167d7a]"
              >
                Explore this experience <span aria-hidden="true">↓</span>
              </a>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
