import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageFrame } from "./ImageFrame";

const disciplines = [
  ["Accounting", "Performance, reporting, controls, and decision evidence."],
  ["Finance", "Value, capital allocation, risk, and transactions."],
  ["Economics", "Markets, incentives, policy, and growth."],
  ["Computer Science", "Technical literacy and structured problem-solving."],
];

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <SectionHeading
        eyebrow="Education"
        title="University of Toronto Mississauga"
        id="education-heading"
        description="An interdisciplinary business education connecting financial analysis with economic context and technical literacy."
      />

      <ImageFrame
        src="/resume/images/utm-campus.png"
        alt="University of Toronto Mississauga campus building"
        width={1280}
        height={787}
        sizes="(max-width: 1312px) 100vw, 1280px"
        caption="University of Toronto Mississauga"
        className="mt-10"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <dl className="border-y border-[#cbd2da]">
          {[
            ["Program", "Honours Bachelor of Business Administration"],
            ["Focus", "Specialist in Accounting and Finance"],
            ["Additional study", "Major in Economics · Minor in Computer Science"],
            ["Expected graduation", "April 2028"],
            ["Status", "CPA Ontario Student"],
          ].map(([term, detail]) => (
            <div
              key={term}
              className="grid gap-2 border-b border-[#cbd2da] py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                {term}
              </dt>
              <dd className="text-sm leading-6 text-[#344054]">{detail}</dd>
            </div>
          ))}
        </dl>
        <div className="border-y border-[#cbd2da]">
          <p className="py-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#667085]">
            Selected academic results
          </p>
          <dl>
            <div className="flex items-center justify-between gap-6 border-t border-[#cbd2da] py-5">
              <dt className="text-sm text-[#344054]">Business Finance II</dt>
              <dd className="text-lg font-semibold tabular-nums text-[#167d7a]">
                94
              </dd>
            </div>
            <div className="flex items-center justify-between gap-6 border-t border-[#cbd2da] py-5">
              <dt className="text-sm text-[#344054]">
                Introduction to Macroeconomics
              </dt>
              <dd className="text-lg font-semibold tabular-nums text-[#167d7a]">
                90
              </dd>
            </div>
          </dl>
          <p className="border-t border-[#cbd2da] py-4 text-xs leading-5 text-[#667085]">
            Selected results are shown for context and do not represent a
            complete academic transcript.
          </p>
        </div>
      </div>

      <div className="mt-10 grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map(([title, text]) => (
          <article
            key={title}
            className="border-b border-r border-[#cbd2da] p-5"
          >
            <h3 className="text-lg text-[#17202a]">{title}</h3>
            <p className="mt-3 text-xs leading-5 text-[#667085]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
