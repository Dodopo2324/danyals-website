import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com";
const EMAIL_ADDRESS = "hello@danyals.ca";
const RESUME_PATH = "/resume.pdf";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    company: "msi Spergel",
    role: "Financial Debt Advisor",
    period: "June 2025 — April 2026",
    description:
      "Helped clients assess financial options, prepare consumer proposal files, review budgets and assets, and coordinate documentation with trustees and creditors.",
  },
  {
    company: "Picture It Media Production",
    role: "Client Relations & Finance Partner",
    period: "Small-business operations",
    description:
      "Managed pricing, contracts, invoicing, budgeting, client relationships, suppliers, and outsourced production work for small-business clients.",
  },
  {
    company: "University and professional development",
    role: "Continuing education",
    period: "Academic & applied work",
    description:
      "Accounting, finance, economics, software, the CPA pathway, Bloomberg, FactSet, and applied project work.",
  },
];

const projects = [
  {
    title: "Personal Hub",
    category: "Productivity systems",
    href: "/projects/personal-hub",
    description:
      "A private productivity and information platform combining calendar, email, approvals, administration, and personal workflows.",
  },
  {
    title: "Market Intelligence",
    category: "Financial data",
    href: "/projects/market-intelligence",
    description:
      "A financial-data module integrating sources such as FactSet, GLEIF, Bank of Canada, SEC EDGAR, and Statistics Canada.",
  },
  {
    title: "Chipotle Valuation",
    category: "Company analysis",
    href: "/projects/chipotle-valuation",
    description:
      "A finance project applying company analysis and valuation methods to a public company.",
  },
  {
    title: "Software and finance experiments",
    category: "Applied projects",
    href: null,
    description:
      "Selected tools, prototypes, and applied projects connecting financial analysis with software development.",
  },
];

const credentials = [
  "Bloomberg Market Concepts",
  "Bloomberg Finance Fundamentals",
  "FactSet Essentials",
  "CPA Ontario PSAP Skills Modules",
  "Excel 2016 Essential Training",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="font-mono text-[0.8em]">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionHeading({
  id,
  number,
  eyebrow,
  title,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="grid gap-5 border-t border-zinc-300 pt-5 md:grid-cols-[1fr_2fr] md:gap-8">
      <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        <span className="font-mono text-zinc-400">{number}</span>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-2xl text-balance text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-zinc-900 sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-[#f4f3ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 focus-visible:outline-none"
          aria-label="Danyals — back to top"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center border border-zinc-800 text-[0.65rem] font-bold tracking-[-0.08em] text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white group-focus-visible:bg-zinc-900 group-focus-visible:text-white"
          >
            DS
          </span>
          <span className="text-sm font-bold tracking-[0.24em] text-zinc-950">
            DANYALS
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.78rem] font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
            Menu
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-px w-5 bg-zinc-800 transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
              <span className="absolute left-0 top-[6px] h-px w-5 bg-zinc-800 transition-opacity group-open:opacity-0" />
              <span className="absolute left-0 top-3 h-px w-5 bg-zinc-800 transition-transform group-open:-translate-y-[6px] group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[3.55rem] w-56 border border-zinc-200 bg-[#f8f7f4] p-2 shadow-[0_20px_45px_rgba(24,24,27,0.09)]"
          >
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center justify-between border-b border-zinc-200 px-3 text-sm text-zinc-700 transition-colors last:border-0 hover:bg-white hover:text-zinc-950"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.65rem] text-zinc-400"
                    >
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="top" className="min-h-screen bg-[#f4f3ef] text-zinc-900">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-[82rem] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-36 lg:pt-28"
        >
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-7 flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                <span className="h-px w-8 bg-zinc-400" aria-hidden="true" />
                Danyal Shenoda
              </p>
              <h1
                id="hero-heading"
                className="max-w-5xl text-balance text-[2.65rem] font-medium leading-[1.02] tracking-[-0.052em] text-zinc-950 sm:text-6xl lg:text-[4.6rem]"
              >
                Accounting, finance, technology, and the projects connecting
                them.
              </h1>
              <p className="mt-8 max-w-3xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                I am a University of Toronto student building experience across
                accounting, finance, economics, and software. Danyals is where I
                document my work, selected projects, and long-term interests in
                valuation, transactions, entrepreneurship, and technology.
              </p>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <div className="flex w-full flex-col gap-3 min-[430px]:w-auto min-[430px]:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center justify-center gap-7 bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:bg-zinc-700"
                  >
                    View Projects <Arrow />
                  </a>
                  <Link
                    href="/resume"
                    className="inline-flex min-h-12 items-center justify-center gap-7 border border-zinc-400 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-white focus-visible:border-zinc-900 focus-visible:bg-white"
                  >
                    View Résumé <Arrow diagonal />
                  </Link>
                </div>
                <a
                  href="https://hub.danyals.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
                >
                  Access Personal Hub
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <Arrow diagonal />
                  </span>
                </a>
              </div>
            </div>

            <aside
              aria-label="Areas of focus"
              className="border-l border-zinc-300 pl-6 lg:mb-1"
            >
              <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Areas of focus
              </p>
              <ol className="space-y-3">
                {["Accounting", "Finance", "Technology", "Entrepreneurship"].map(
                  (area, index) => (
                    <li
                      key={area}
                      className="flex items-center gap-4 text-sm text-zinc-700"
                    >
                      <span className="font-mono text-[0.65rem] text-zinc-400">
                        0{index + 1}
                      </span>
                      {area}
                    </li>
                  ),
                )}
              </ol>
            </aside>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-20 bg-zinc-900 text-white"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-8">
              <p className="flex items-start gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                <span className="font-mono text-zinc-500">01</span>
                About
              </p>
              <div>
                <h2
                  id="about-heading"
                  className="max-w-3xl text-balance text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-50 sm:text-5xl"
                >
                  A multidisciplinary foundation for practical, considered
                  work.
                </h2>
                <div className="mt-10 grid gap-8 border-t border-zinc-700 pt-8 sm:grid-cols-2 sm:gap-12">
                  <p className="text-base leading-7 text-zinc-300">
                    Danyal studies Accounting and Finance at the University of
                    Toronto, alongside Economics and Computer Science. This
                    combination shapes a practical interest in how businesses
                    operate, make decisions, and create lasting value.
                  </p>
                  <p className="text-base leading-7 text-zinc-300">
                    His interests include valuations, financial due diligence,
                    private markets, corporate transactions, entrepreneurship
                    through acquisition, and building useful software that
                    makes complex work clearer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-20"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <SectionHeading
              id="experience-heading"
              number="02"
              eyebrow="Experience"
              title="Experience across advisory work, small-business operations, and continued learning."
            />
            <div className="mt-14 divide-y divide-zinc-300 border-y border-zinc-300">
              {experience.map((item, index) => (
                <article
                  key={item.company}
                  className="group grid gap-4 py-8 transition-colors hover:bg-white/55 sm:px-4 md:grid-cols-[3rem_1fr_1fr] md:gap-8 md:py-10"
                >
                  <p className="font-mono text-xs text-zinc-400">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-zinc-950">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">{item.role}</p>
                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                      {item.period}
                    </p>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-20 bg-[#e9e8e4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <SectionHeading
              id="projects-heading"
              number="03"
              eyebrow="Selected projects"
              title="Independent work at the intersection of analysis, systems, and useful technology."
            />
            <div className="mt-14 grid border-l border-t border-zinc-300 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group flex min-h-72 flex-col border-b border-r border-zinc-300 bg-[#e9e8e4] p-6 transition-colors hover:bg-[#f4f3ef] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {project.category}
                    </p>
                    <span className="font-mono text-xs text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-auto pt-16">
                    <h3 className="max-w-md text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
                      {project.description}
                    </p>
                    {project.href ? (
                      <Link
                        href={project.href}
                        className="mt-7 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
                      >
                        View project <Arrow />
                      </Link>
                    ) : (
                      <p className="mt-7 flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors group-hover:text-zinc-900">
                        View project <Arrow />
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-lg text-xs leading-5 text-zinc-500">
              Project details are being prepared for publication. No external
              links are currently available.
            </p>
          </div>
        </section>

        <section
          id="credentials"
          aria-labelledby="credentials-heading"
          className="scroll-mt-20"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <SectionHeading
              id="credentials-heading"
              number="04"
              eyebrow="Credentials"
              title="Professional learning that supports the work."
            />
            <ol className="mt-14 grid border-l border-t border-zinc-300 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((credential, index) => (
                <li
                  key={credential}
                  className="flex min-h-32 flex-col justify-between border-b border-r border-zinc-300 p-5 sm:min-h-40 sm:p-6"
                >
                  <span className="font-mono text-xs text-zinc-400">
                    0{index + 1}
                  </span>
                  <span className="max-w-xs text-base font-medium leading-6 text-zinc-800">
                    {credential}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-20 bg-zinc-900 text-white"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <p className="mb-8 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <span className="font-mono text-zinc-500">05</span>
              Contact
            </p>
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end lg:gap-20">
              <h2
                id="contact-heading"
                className="max-w-4xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] text-zinc-50 sm:text-5xl lg:text-6xl"
              >
                I am interested in conversations about accounting, finance,
                valuation, transactions, technology, and entrepreneurship.
              </h2>
              <div className="divide-y divide-zinc-700 border-y border-zinc-700">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between text-sm text-zinc-300 transition-colors hover:text-white focus-visible:text-white"
                >
                  LinkedIn
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <Arrow diagonal />
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="group flex min-h-14 items-center justify-between text-sm text-zinc-300 transition-colors hover:text-white focus-visible:text-white"
                >
                  Email
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </a>
                <a
                  href={RESUME_PATH}
                  download
                  className="group flex min-h-14 items-center justify-between text-sm text-zinc-300 transition-colors hover:text-white focus-visible:text-white"
                >
                  Download Résumé
                  <span className="transition-transform group-hover:translate-y-0.5">
                    <span aria-hidden="true">↓</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-5 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-bold tracking-[0.2em] text-zinc-200">DANYALS</p>
          <p>
            Built by Danyal Shenoda.{" "}
            <span className="font-mono text-zinc-500">© {currentYear}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
