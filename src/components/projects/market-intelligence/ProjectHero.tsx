import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { screenshots } from "./screenshots";

export function ProjectHero() {
  return (
    <section className="mx-auto max-w-[82rem] px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
      <Reveal>
        <Eyebrow>Financial data and research system</Eyebrow>
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end lg:gap-20">
          <div>
            <h1 className="max-w-5xl text-balance text-[2.65rem] leading-[1.06] tracking-[-0.045em] text-[#17202a] sm:text-6xl lg:text-[4.15rem]">
              Market Intelligence
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              A private workspace for company, legal-entity, filing, financial,
              and Canadian economic research inside Personal Hub.
            </p>
          </div>
          <aside className="border-l border-[#cbd2da] pl-5">
            <div className="flex flex-wrap gap-2">
              {["Private research tool", "Active development"].map((status) => (
                <span
                  key={status}
                  className="border border-[#cbd2da] bg-white/60 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#344054]"
                >
                  {status}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-6 text-[#667085]">
              It supplements established platforms such as Bloomberg and
              FactSet. It is not a trading system or investment advice.
            </p>
          </aside>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <ScreenshotFrame
          screenshot={screenshots.overview}
          preload
          className="mt-12"
        />
      </Reveal>
    </section>
  );
}
