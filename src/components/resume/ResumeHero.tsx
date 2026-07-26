import { ImageFrame } from "./ImageFrame";

const EMAIL = "danyalshenoda1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/shenodad/";

export function ResumeHero() {
  return (
    <section
      aria-labelledby="resume-hero-heading"
      className="mx-auto max-w-[82rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-36"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.7fr)] lg:gap-20">
        <div>
          <p className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            <span className="h-px w-8 bg-zinc-400" aria-hidden="true" />
            Expanded professional profile
          </p>
          <h1
            id="resume-hero-heading"
            className="text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-[4.6rem]"
          >
            Danyal Shenoda
          </h1>
          <p className="mt-8 max-w-3xl text-balance text-xl font-medium leading-8 tracking-[-0.02em] text-zinc-800 sm:text-2xl sm:leading-9">
            Accounting and Finance student exploring how businesses create
            value through financial analysis, transactions, technology, and
            strategic decision-making.
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            My studies in accounting, finance, economics, and computer science
            help me examine businesses from multiple perspectives—from
            financial performance and market conditions to operations,
            technology, and the relationships that create long-term value.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-6 bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:bg-zinc-700"
            >
              Download PDF Résumé <span aria-hidden="true">↓</span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-6 border border-zinc-400 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-white focus-visible:border-zinc-900 focus-visible:bg-white"
            >
              View LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-12 items-center justify-center gap-6 border border-zinc-300 px-6 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-900 hover:bg-white hover:text-zinc-950 focus-visible:border-zinc-900 focus-visible:bg-white focus-visible:text-zinc-950"
            >
              Email Me <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-600">
            <a
              href={`mailto:${EMAIL}`}
              className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950"
            >
              {EMAIL}
            </a>
            <a
              href="https://danyals.ca"
              className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950"
            >
              danyals.ca
            </a>
          </div>
        </div>

        <ImageFrame
          src="/resume/images/headshot.jpg"
          alt="Professional portrait of Danyal Shenoda"
          width={4672}
          height={6046}
          sizes="(max-width: 1023px) 100vw, 34vw"
          preload
          dark
          className="mx-auto w-full max-w-[34rem] shadow-[18px_18px_0_0_#d8d7d2]"
        />
      </div>
    </section>
  );
}
