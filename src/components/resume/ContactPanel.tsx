import { ButtonLink } from "@/components/site/ButtonLink";
import { Eyebrow } from "@/components/site/Eyebrow";

export function ContactPanel() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="dark-focus scroll-mt-28 bg-[#0d1b2a] text-[#f5f1e8]"
    >
      <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:px-12">
        <div>
          <Eyebrow dark>Contact</Eyebrow>
          <h2
            id="contact-heading"
            className="mt-6 text-balance text-4xl leading-[1.1] tracking-[-0.04em] sm:text-6xl"
          >
            Connect
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#a7b0be]">
            I am interested in conversations about accounting, finance,
            valuation, transactions, financial technology, and entrepreneurship.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ButtonLink href="mailto:danyalshenoda1@gmail.com">
            Email
          </ButtonLink>
          <ButtonLink
            href="https://www.linkedin.com/in/shenodad/"
            external
            variant="ghost"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink href="/resume.pdf" download variant="ghost">
            Download résumé
          </ButtonLink>
          <a
            href="https://danyals.ca"
            className="inline-flex min-h-11 items-center justify-between border-t border-[#23364a] pt-3 text-sm text-[#a7b0be] hover:text-[#49c6c2]"
          >
            danyals.ca <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
