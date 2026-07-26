import { ButtonLink } from "@/components/site/ButtonLink";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { ImageFrame } from "./ImageFrame";

export function ResumeHero() {
  return (
    <section className="editorial-grid dark-focus bg-[#07111f] text-[#f5f1e8]">
      <div className="mx-auto grid max-w-[82rem] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.62fr)] lg:gap-20 lg:px-12">
        <div>
          <Reveal>
            <Eyebrow dark>Expanded professional profile</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[2.8rem] leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.35rem]">
              Danyal Shenoda
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-3xl text-balance text-xl leading-8 text-[#f5f1e8] sm:text-2xl sm:leading-9">
              Accounting and Finance student exploring how businesses create
              value through analysis, transactions, technology, and strategic
              decisions.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a7b0be] sm:text-base">
              Studies in accounting, finance, economics, and computer science
              inform how I examine performance, market context, operations,
              systems, and long-term value.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/resume.pdf" download>
                Download PDF
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/shenodad/"
                variant="ghost"
                external
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href="mailto:danyalshenoda1@gmail.com"
                variant="ghost"
              >
                Email
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right">
          <ImageFrame
            src="/resume/images/headshot.jpg"
            alt="Professional portrait of Danyal Shenoda"
            width={4672}
            height={6046}
            sizes="(max-width: 1023px) 100vw, 31vw"
            preload
            dark
            className="mx-auto w-full max-w-[30rem] shadow-[16px_16px_0_0_#167d7a]"
          />
        </Reveal>
      </div>
    </section>
  );
}
