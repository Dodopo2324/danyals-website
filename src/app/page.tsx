import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/site/BrandMark";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const projects = [
  {
    category: "Private software system",
    title: "Personal Hub",
    description:
      "A browser-based environment for storage, document utilities, automation, information access, and cross-device workflows.",
    href: "/projects/personal-hub",
    image: "/projects/personal-hub/images/dashboard.png",
    width: 1910,
    height: 926,
    alt: "Personal Hub dashboard showing daily information and application navigation",
  },
  {
    category: "Financial data and research",
    title: "Market Intelligence",
    description:
      "A private workspace combining company information, legal-entity data, public filings, and Canadian economic indicators.",
    href: "/projects/market-intelligence",
    image: "/projects/market-intelligence/images/overview.png",
    width: 1904,
    height: 802,
    alt: "Market Intelligence research workspace overview",
  },
  {
    category: "Equity research and valuation",
    title: "Chipotle Valuation",
    description:
      "An academic project applying financial-statement analysis, DuPont analysis, ratios, and valuation methods.",
    href: "/projects/chipotle-valuation",
    image: "/resume/images/chipotle-valuation.png",
    width: 960,
    height: 475,
    alt: "SWOT analysis from the Chipotle valuation project",
  },
];

const experiences = [
  {
    company: "msi Spergel",
    role: "Financial Debt Advisor",
    dates: "June 2025 – April 2026",
    impact:
      "Supported more than 90 consumer proposals that were ultimately filed while guiding clients through financial review and trustee-ready documentation.",
    href: "/resume#msi-spergel",
  },
  {
    company: "PiktureIt Media Production",
    role: "Client Relations & Finance Partner",
    dates: "February 2024 – June 2025",
    impact:
      "Managed client relationships, pricing, invoicing, production schedules, equipment decisions, and contractor coordination.",
    href: "/resume#piktureit",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#17202a]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#49c6c2] px-4 py-3 text-sm font-semibold text-[#07111f] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader theme="dark" active="home" />

      <main id="main-content">
        <section className="editorial-grid fine-grain dark-focus relative overflow-hidden bg-[#07111f] text-[#f5f1e8]">
          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[82rem] items-center px-5 py-20 sm:px-8 lg:min-h-[44rem] lg:px-12">
            <div className="max-w-5xl">
              <Reveal>
                <Eyebrow dark>Danyal Shenoda</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-7 max-w-5xl text-balance text-[2.8rem] leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-[4.6rem]">
                  Accounting, finance, technology, and the work connecting them.
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-[#a7b0be] sm:text-lg sm:leading-8">
                  I am a University of Toronto student exploring how financial
                  analysis, market context, technology, and business operations
                  shape value and better decisions.
                </p>
              </Reveal>
              <Reveal delay={270}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href="/#projects">Explore my work</ButtonLink>
                  <ButtonLink href="/resume" variant="ghost">
                    View résumé
                  </ButtonLink>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 items-center gap-3 px-2 text-sm font-semibold text-[#d8dde5] transition-colors hover:text-[#49c6c2]"
                  >
                    Contact <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </Reveal>
              <div className="accent-line mt-16 h-px w-36 bg-[#49c6c2]" />
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-28"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="A multidisciplinary view of business"
                id="about-heading"
                description="My studies combine accounting and finance with economics and computer science, creating a broader way to examine performance, value, markets, and the systems supporting modern organizations."
              />
            </Reveal>
            <div className="mt-12 grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-4">
              {["Accounting", "Finance", "Economics", "Computer Science"].map(
                (discipline, index) => (
                  <Reveal key={discipline} delay={index * 70}>
                    <div className="flex min-h-32 flex-col justify-between border-b border-r border-[#cbd2da] p-5">
                      <span className="text-[0.65rem] tabular-nums text-[#98a2b3]">
                        0{index + 1}
                      </span>
                      <p className="font-serif text-lg text-[#17202a]">
                        {discipline}
                      </p>
                    </div>
                  </Reveal>
                ),
              )}
            </div>
            <Link
              href="/resume#summary"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#167d7a] hover:underline"
            >
              Explore the full rationale <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-28 bg-[#f0ece4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Experience"
              title="Client work where analysis and communication meet"
              id="experience-heading"
            />
            <div className="mt-12 divide-y divide-[#cbd2da] border-y border-[#cbd2da]">
              {experiences.map((experience, index) => (
                <Reveal key={experience.company} delay={index * 90}>
                  <article className="grid gap-5 py-7 lg:grid-cols-[0.2fr_0.8fr_1.45fr_auto] lg:items-center lg:gap-8">
                    <span className="text-xs tabular-nums text-[#98a2b3]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl text-[#17202a]">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-xs text-[#667085]">
                        {experience.company} · {experience.dates}
                      </p>
                    </div>
                    <p className="max-w-2xl text-sm leading-6 text-[#667085]">
                      {experience.impact}
                    </p>
                    <Link
                      href={experience.href}
                      className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#167d7a]"
                    >
                      View experience <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-28 bg-[#07111f] text-[#f5f1e8]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Featured projects"
              title="Applied work across software, research, and valuation"
              id="projects-heading"
              dark
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 90}>
                  <article className="group h-full border border-[#23364a] bg-[#0d1b2a] transition duration-300 hover:-translate-y-1 hover:border-[#3a6570] hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
                    <div className="overflow-hidden border-b border-[#23364a] bg-[#07111f]">
                      <Image
                        src={project.image}
                        width={project.width}
                        height={project.height}
                        alt={project.alt}
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      />
                    </div>
                    <div className="p-6">
                      <Eyebrow dark>{project.category}</Eyebrow>
                      <h3 className="mt-5 text-2xl text-[#f5f1e8]">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-[#a7b0be]">
                        {project.description}
                      </p>
                      <Link
                        href={project.href}
                        className="mt-7 flex min-h-11 items-center justify-between border-t border-[#23364a] pt-4 text-sm font-semibold text-[#49c6c2]"
                      >
                        View case study <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <a
              href="https://hub.danyals.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#a7b0be] hover:text-[#49c6c2]"
            >
              Access Personal Hub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="credentials-heading"
          className="border-b border-[#cbd2da]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-16 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Eyebrow>Credentials</Eyebrow>
                <h2
                  id="credentials-heading"
                  className="mt-3 text-2xl text-[#17202a]"
                >
                  Professional development
                </h2>
              </div>
              <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
                <BrandMark name="Bloomberg" detail="BMC & Finance Fundamentals" />
                <BrandMark name="FactSet" detail="Essentials" />
                <BrandMark name="CPA Ontario" detail="Student & PSAP modules" />
                <BrandMark name="Excel" detail="Essential Training" />
              </div>
            </div>
            <Link
              href="/resume#credentials"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#167d7a]"
            >
              View credentials in context <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-28 bg-[#0d1b2a] text-[#f5f1e8]"
        >
          <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:px-12">
            <div>
              <Eyebrow dark>Contact</Eyebrow>
              <h2
                id="contact-heading"
                className="mt-6 max-w-4xl text-balance text-3xl leading-[1.12] tracking-[-0.035em] sm:text-5xl"
              >
                Interested in accounting, finance, valuation, transactions,
                technology, and entrepreneurship.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href="mailto:danyalshenoda1@gmail.com">
                Email me
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/shenodad/"
                variant="ghost"
                external
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink href="/resume.pdf" variant="ghost" download>
                Download résumé
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
