import { ImageFrame } from "./ImageFrame";

const disciplines = [
  {
    title: "Accounting",
    text: "A foundation for interpreting performance, reporting quality, controls, and the evidence behind decisions.",
  },
  {
    title: "Finance",
    text: "A lens for considering value, capital allocation, risk, transactions, and investor outcomes.",
  },
  {
    title: "Economics",
    text: "Context for understanding incentives, policy, competition, growth, and the environment surrounding a firm.",
  },
  {
    title: "Computer Science",
    text: "Technical literacy and structured problem-solving for understanding modern systems and collaborating across disciplines.",
  },
];

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="grid gap-8 border-t border-zinc-300 pt-6 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Education
        </p>
        <div>
          <h2
            id="education-heading"
            className="text-balance text-4xl font-medium tracking-[-0.045em] text-zinc-950 sm:text-5xl"
          >
            University of Toronto Mississauga
          </h2>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-700">
            Honours Bachelor of Business Administration
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <ImageFrame
          src="/resume/images/utm-campus.png"
          alt="University of Toronto Mississauga campus building"
          width={1280}
          height={787}
          sizes="(max-width: 1023px) 100vw, 55vw"
          caption="University of Toronto Mississauga"
        />
        <dl className="border-y border-zinc-300">
          {[
            ["Program", "Honours Bachelor of Business Administration"],
            ["Specialist", "Accounting and Finance"],
            ["Major", "Economics"],
            ["Minor", "Computer Science"],
            ["Expected graduation", "April 2028"],
            ["Status", "CPA Ontario Student"],
          ].map(([term, detail]) => (
            <div
              key={term}
              className="grid gap-2 border-b border-zinc-300 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {term}
              </dt>
              <dd className="text-sm leading-6 text-zinc-800">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-950">
          Interdisciplinary rationale
        </h3>
        <div className="mt-7 grid border-l border-t border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline, index) => (
            <article
              key={discipline.title}
              className="border-b border-r border-zinc-300 p-6"
            >
              <p className="font-mono text-[0.68rem] text-zinc-400">
                0{index + 1}
              </p>
              <h4 className="mt-8 text-lg font-medium text-zinc-950">
                {discipline.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {discipline.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-950">
          Selected academic results
        </h3>
        <div>
          <dl className="border-y border-zinc-300">
            <div className="flex items-center justify-between gap-6 border-b border-zinc-300 py-5">
              <dt className="text-sm text-zinc-700">Business Finance II</dt>
              <dd className="font-mono text-lg text-zinc-950">94</dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-5">
              <dt className="text-sm text-zinc-700">
                Introduction to Macroeconomics
              </dt>
              <dd className="font-mono text-lg text-zinc-950">90</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Selected results are shown for context and do not represent a
            complete academic transcript.
          </p>
        </div>
      </div>
    </section>
  );
}
