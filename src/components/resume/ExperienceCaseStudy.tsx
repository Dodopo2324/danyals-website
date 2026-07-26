import type { ReactNode } from "react";

type ExperienceCaseStudyProps = {
  id: string;
  company: string;
  period: string;
  title: string;
  subtitle: string;
  introduction: string;
  children: ReactNode;
};

export function ExperienceCaseStudy({
  id,
  company,
  period,
  title,
  subtitle,
  introduction,
  children,
}: ExperienceCaseStudyProps) {
  return (
    <article id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <header className="grid gap-8 border-t border-[#cbd2da] pt-6 lg:grid-cols-[0.62fr_1.6fr] lg:gap-16">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#667085]">
            {company}
          </p>
          <p className="mt-3 text-xs tabular-nums text-[#98a2b3]">{period}</p>
        </div>
        <div>
          <h2
            id={`${id}-heading`}
            className="text-balance text-4xl leading-[1.08] tracking-[-0.04em] text-[#17202a] sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">
            {subtitle}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#667085]">
            {introduction}
          </p>
        </div>
      </header>
      <div className="mt-12">{children}</div>
    </article>
  );
}
