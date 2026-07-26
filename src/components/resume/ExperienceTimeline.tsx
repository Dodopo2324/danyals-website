const experiences = [
  {
    role: "Financial Debt Advisor",
    company: "msi Spergel Inc.",
    period: "June 2025 – April 2026",
    href: "#msi-spergel",
  },
  {
    role: "Client Relations & Finance Partner",
    company: "PiktureIt Media Production",
    period: "February 2024 – June 2025",
    href: "#piktureit",
  },
];

export function ExperienceTimeline() {
  return (
    <ol className="relative mt-12 border-l border-zinc-300">
      {experiences.map((experience, index) => (
        <li
          key={experience.role}
          className="relative grid gap-4 border-b border-zinc-300 py-8 pl-8 first:border-t sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:pl-10"
        >
          <span
            className="absolute -left-[0.29rem] top-11 size-2 bg-zinc-900"
            aria-hidden="true"
          />
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-zinc-400">
            0{index + 1}
          </span>
          <div>
            <h3 className="text-xl font-medium tracking-[-0.025em] text-zinc-950">
              {experience.role}
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              {experience.company} · {experience.period}
            </p>
          </div>
          <a
            href={experience.href}
            className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-950"
          >
            Explore role <span aria-hidden="true">↓</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
