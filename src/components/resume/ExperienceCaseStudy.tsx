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
      <header className="grid gap-8 border-t border-zinc-300 pt-6 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {company}
          </p>
          <p className="mt-3 font-mono text-xs text-zinc-400">{period}</p>
        </div>
        <div>
          <h2
            id={`${id}-heading`}
            className="text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-zinc-950 sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-zinc-800">
            {subtitle}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            {introduction}
          </p>
        </div>
      </header>
      <div className="mt-14">{children}</div>
    </article>
  );
}
