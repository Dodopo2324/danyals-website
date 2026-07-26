import type { Metadata } from "next";
import Link from "next/link";
import { ContactPanel } from "@/components/resume/ContactPanel";
import { CredentialCard } from "@/components/resume/CredentialCard";
import { EducationSection } from "@/components/resume/EducationSection";
import { ExperienceCaseStudy } from "@/components/resume/ExperienceCaseStudy";
import { ExperienceTimeline } from "@/components/resume/ExperienceTimeline";
import { ImageFrame } from "@/components/resume/ImageFrame";
import { ProjectPreview } from "@/components/resume/ProjectPreview";
import { ResumeHero } from "@/components/resume/ResumeHero";
import { SkillEvidence } from "@/components/resume/SkillEvidence";
import { WorkflowDiagram } from "@/components/resume/WorkflowDiagram";

const title = "Résumé | Danyals";
const description =
  "An expanded professional profile of Danyal Shenoda covering accounting, finance, client advisory, business operations, technology, and selected projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title,
    description,
    url: "/resume",
    type: "profile",
  },
};

const disciplines = [
  {
    title: "Accounting",
    description:
      "Understanding financial performance, reporting, controls, and the evidence behind business decisions.",
  },
  {
    title: "Finance",
    description:
      "Studying valuation, capital allocation, risk, transactions, and how financial decisions affect businesses and investors.",
  },
  {
    title: "Economics",
    description:
      "Understanding markets, incentives, policy, growth, and the forces shaping businesses and investments.",
  },
  {
    title: "Computer Science",
    description:
      "Building technical literacy, structured problem-solving, software understanding, and the ability to communicate with technical professionals.",
  },
];

const msiResponsibilities = [
  "Managed the progression of 90+ ultimately filed consumer proposals",
  "Conducted detailed financial consultations",
  "Reviewed income, expenses, assets, debts, creditor balances, and exemptions",
  "Prepared simplified household budgets",
  "Recommended feasible proposal payment structures",
  "Coordinated client documentation and follow-up",
  "Verified application accuracy",
  "Prepared trustee-ready files",
  "Explained unfamiliar financial concepts to clients",
  "Maintained clear communication among clients, administrators, trustees, and creditors",
];

const piktureItResponsibilities = [
  "Developed pricing based on filming frequency, editing requirements, equipment needs, service scope, and client budget",
  "Prepared quotes and negotiated client terms",
  "Managed invoicing, collections, expenses, and cash flow",
  "Coordinated filming, editing, and publishing schedules",
  "Evaluated equipment purchases such as cameras, lenses, lighting, and related production tools",
  "Assessed whether capital purchases were justified by quality improvements and expected project demand",
  "Coordinated editors and contractors",
  "Contributed to hiring and capacity decisions",
  "Managed client expectations and delivery requirements",
];

const skillGroups = [
  {
    number: "01",
    title: "Finance and accounting",
    skills: [
      {
        name: "Financial statement analysis",
        evidence:
          "Used in client financial assessments and the Chipotle valuation project.",
      },
      {
        name: "Cash-flow analysis",
        evidence:
          "Used in debt-restructuring assessments, budgeting, and small-business operations.",
      },
      {
        name: "Ratio and DuPont analysis",
        evidence: "Applied in the Chipotle financial-analysis project.",
      },
      {
        name: "Financial modelling",
        evidence:
          "Developed through academic finance work and valuation projects.",
      },
    ],
  },
  {
    number: "02",
    title: "Data and research",
    skills: [
      {
        name: "FactSet",
        evidence:
          "Completed FactSet Essentials and used the platform for company and financial research.",
      },
      {
        name: "Bloomberg Terminal",
        evidence:
          "Completed Bloomberg Market Concepts and Bloomberg Finance Fundamentals and used Bloomberg research tools.",
      },
      {
        name: "R and Stata",
        evidence: "Used in econometrics and data-analysis coursework.",
      },
      {
        name: "Excel",
        evidence:
          "Used in professional financial analysis, academic work, and project-based analysis.",
      },
    ],
  },
  {
    number: "03",
    title: "Technology",
    skills: [
      {
        name: "Python",
        evidence:
          "Used in Personal Hub development and technical problem-solving.",
      },
      {
        name: "Flask",
        evidence: "Used as the backend framework for Personal Hub.",
      },
      {
        name: "HTML, CSS, and JavaScript",
        evidence:
          "Used to build and refine browser-based Personal Hub interfaces.",
      },
    ],
  },
  {
    number: "04",
    title: "Professional",
    skills: [
      {
        name: "Client communication",
        evidence:
          "Developed through direct work with financially distressed clients and small-business customers.",
      },
      {
        name: "Project coordination",
        evidence:
          "Used to manage proposal files, client engagements, contractors, and production schedules.",
      },
      {
        name: "Stakeholder communication",
        evidence:
          "Applied across clients, trustees, administrators, creditors, vendors, and contractors.",
      },
    ],
  },
];

const navigation = [
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Credentials", "#credentials"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

function SectionHeading({
  eyebrow,
  title: heading,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <div className="grid gap-7 border-t border-zinc-300 pt-6 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-4xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-zinc-950 sm:text-5xl"
      >
        {heading}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid border-l border-t border-zinc-300 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 border-b border-r border-zinc-300 p-5 text-sm leading-6 text-zinc-700"
        >
          <span className="mt-[0.65rem] size-1 shrink-0 bg-zinc-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-[#f4f3ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="Danyals home"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center border border-zinc-800 text-[0.65rem] font-bold tracking-[-0.08em] text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white"
          >
            DS
          </span>
          <span className="text-sm font-bold tracking-[0.24em] text-zinc-950">
            DANYALS
          </span>
        </Link>

        <nav aria-label="Résumé navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.75rem] font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="hidden min-h-10 items-center border border-zinc-400 px-4 text-xs font-semibold text-zinc-800 transition-colors hover:border-zinc-900 hover:bg-white sm:inline-flex"
          >
            Download PDF
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700 [&::-webkit-details-marker]:hidden">
              Menu
              <span className="font-mono text-zinc-400" aria-hidden="true">
                +
              </span>
            </summary>
            <nav
              aria-label="Mobile résumé navigation"
              className="absolute right-0 top-[3.4rem] w-56 border border-zinc-300 bg-[#f8f7f4] p-2 shadow-[0_20px_45px_rgba(24,24,27,0.09)]"
            >
              <ul>
                {navigation.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="flex min-h-11 items-center justify-between border-b border-zinc-200 px-3 text-sm text-zinc-700 last:border-b-0 hover:bg-white hover:text-zinc-950"
                    >
                      {label} <span aria-hidden="true">↓</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export default function ResumePage() {
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
        <ResumeHero />

        <section
          aria-labelledby="summary-heading"
          className="border-y border-zinc-300 bg-[#ecebe7]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Professional summary"
              title="A multidisciplinary view of business"
              id="summary-heading"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
              <div aria-hidden="true" />
              <div className="max-w-4xl space-y-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                <p>
                  I am pursuing an Honours Bachelor of Business Administration
                  at the University of Toronto Mississauga, specializing in
                  Accounting and Finance while also completing a Major in
                  Economics and a Minor in Computer Science.
                </p>
                <p>
                  I chose this combination because no single discipline fully
                  explains how a business works. Accounting shows what has
                  occurred, finance examines value and capital decisions,
                  economics explains the environment around the firm, and
                  computer science provides the tools to build and understand
                  the systems supporting modern organizations.
                </p>
              </div>
            </div>
            <div className="mt-14 grid border-l border-t border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((discipline, index) => (
                <article
                  key={discipline.title}
                  className="border-b border-r border-zinc-300 bg-[#f4f3ef] p-6"
                >
                  <span className="font-mono text-[0.68rem] text-zinc-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-10 text-xl font-medium tracking-[-0.025em] text-zinc-950">
                    {discipline.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {discipline.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="mx-auto max-w-[82rem] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            id="experience-heading"
          />
          <ExperienceTimeline />
        </section>

        <section className="border-y border-zinc-300 bg-[#ecebe7]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
            <ExperienceCaseStudy
              id="msi-spergel"
              company="msi Spergel Inc."
              period="June 2025 – April 2026"
              title="Financial Debt Advisor"
              subtitle="Supporting clients from initial inquiry through trustee-ready proposal files."
              introduction="At msi Spergel, I worked directly with financially distressed individuals and small-business owners considering debt-restructuring options. I served as the primary point of contact from the initial consultation through document collection, financial review, proposal structuring, client verification, and transfer to a Licensed Insolvency Trustee."
            >
              <div className="grid border-l border-t border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "90+",
                    "Supported more than 90 consumer proposals that were ultimately filed.",
                  ],
                  [
                    "2–4 weeks",
                    "A common engagement range, with some client files extending longer.",
                  ],
                  [
                    "Direct contact",
                    "Communicated with clients by phone, text, email, and in person.",
                  ],
                  [
                    "Continuity",
                    "Remained the main point of contact until trustee review.",
                  ],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="border-b border-r border-zinc-300 bg-[#f4f3ef] p-6"
                  >
                    <p className="text-2xl font-medium tracking-[-0.035em] text-zinc-950">
                      {value}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-zinc-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <section aria-labelledby="workflow-heading" className="mt-20">
                <h3
                  id="workflow-heading"
                  className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
                >
                  Client workflow
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
                  A website-native view of the progression from a prospective
                  client’s inquiry to an independently reviewed proposal file.
                </p>
                <div className="mt-9">
                  <WorkflowDiagram />
                </div>
              </section>

              <section
                aria-labelledby="msi-responsibilities-heading"
                className="mt-20"
              >
                <h3
                  id="msi-responsibilities-heading"
                  className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
                >
                  Responsibilities and impact
                </h3>
                <div className="mt-8">
                  <BulletList items={msiResponsibilities} />
                </div>
              </section>

              <section
                aria-labelledby="communication-heading"
                className="mt-20 grid gap-8 border-t border-zinc-300 pt-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16"
              >
                <h3
                  id="communication-heading"
                  className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
                >
                  Communication under financial pressure
                </h3>
                <div>
                  <div className="max-w-3xl space-y-5 text-base leading-7 text-zinc-700">
                    <p>
                      The most difficult part of the role was not simply
                      reviewing financial information. Clients were often
                      experiencing significant anxiety and uncertainty, and
                      small communication failures could undermine trust
                      quickly.
                    </p>
                    <p>
                      The experience strengthened my ability to explain
                      unfamiliar financial concepts, manage emotionally
                      difficult conversations, establish realistic
                      expectations, remain accurate under pressure, and
                      communicate with empathy without sacrificing professional
                      judgment.
                    </p>
                  </div>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-zinc-300 pt-6 sm:grid-cols-2">
                    {[
                      "Explaining why minimum credit-card payments may not meaningfully reduce principal",
                      "Distinguishing emotional concerns from financial constraints",
                      "Presenting options clearly",
                      "Helping clients make informed decisions",
                    ].map((example) => (
                      <li
                        key={example}
                        className="flex gap-3 text-sm leading-6 text-zinc-600"
                      >
                        <span className="mt-[0.65rem] size-1 shrink-0 bg-zinc-500" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ExperienceCaseStudy>
          </div>
        </section>

        <section className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <ExperienceCaseStudy
            id="piktureit"
            company="PiktureIt Media Production"
            period="February 2024 – June 2025"
            title="Client Relations & Finance Partner"
            subtitle="Small-business operations across client service, pricing, production, and financial decisions."
            introduction="PiktureIt Media Production was a small media-production business creating photography and short-form video content for retail, automotive, restaurant, jewellery, real-estate, and other small-business clients."
          >
            <div className="grid gap-5 lg:grid-cols-[1.55fr_0.55fr] lg:items-start">
              <ImageFrame
                src="/resume/images/piktureit-project2.png"
                alt="Automotive photography produced as part of PiktureIt media work"
                width={775}
                height={600}
                sizes="(max-width: 1023px) 100vw, 62vw"
                caption="Example of automotive media-production work. The image does not indicate a formal relationship with the vehicle manufacturer."
              />
              <ImageFrame
                src="/resume/images/piktureit-project.jpg"
                alt="Product video still produced as part of PiktureIt media work"
                width={508}
                height={835}
                sizes="(max-width: 1023px) 100vw, 24vw"
                caption="Example of product-focused media-production work. Brand presence does not indicate a formal relationship with the product manufacturer."
              />
            </div>

            <section aria-labelledby="scope-heading" className="mt-20">
              <h3
                id="scope-heading"
                className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
              >
                Scope
              </h3>
              <div className="mt-8 grid border-l border-t border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [
                    "≈ 8",
                    "Recurring client contracts over the life of the business",
                  ],
                  [
                    "Up to 5",
                    "Recurring client relationships managed concurrently",
                  ],
                  ["Plus", "Additional one-time production projects"],
                  [
                    "Services",
                    "Photography, short-form video, editing, publishing support, and selected social-media services",
                  ],
                ].map(([value, label]) => (
                  <div key={label} className="border-b border-r border-zinc-300 p-6">
                    <p className="text-2xl font-medium tracking-[-0.035em] text-zinc-950">
                      {value}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-zinc-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.tiktok.com/@baghdadfood1/video/7369695283665538310"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-14 items-center justify-between border-y border-zinc-300 text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950"
              >
                <span>
                  Approximately 254,000 TikTok views on one client video.
                  <span className="ml-2 font-normal text-zinc-500">
                    This outcome is not attributed to PiktureIt’s work alone.
                  </span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </section>

            <section
              aria-labelledby="piktureit-responsibilities-heading"
              className="mt-20"
            >
              <h3
                id="piktureit-responsibilities-heading"
                className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
              >
                Responsibilities
              </h3>
              <div className="mt-8">
                <BulletList items={piktureItResponsibilities} />
              </div>
            </section>

            <section
              aria-labelledby="client-selection-heading"
              className="mt-20 grid gap-8 border-t border-zinc-300 pt-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16"
            >
              <h3
                id="client-selection-heading"
                className="text-2xl font-medium tracking-[-0.03em] text-zinc-950"
              >
                Client selection is part of business strategy
              </h3>
              <div>
                <p className="max-w-3xl text-base leading-7 text-zinc-700">
                  One of the most important lessons was that client selection
                  matters as much as client acquisition. Revenue alone does not
                  make a relationship worthwhile if expectations,
                  communication demands, or working styles make the engagement
                  unsustainable.
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-600">
                  That lesson informed pricing decisions, contract
                  expectations, boundaries, service scope, client
                  communication, and capacity planning.
                </p>
                <a
                  href="https://www.instagram.com/piktureit.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center gap-4 border-b border-zinc-500 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-950 hover:text-zinc-950"
                >
                  View PiktureIt on Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </ExperienceCaseStudy>
        </section>

        <div className="border-y border-zinc-300 bg-[#ecebe7]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
            <EducationSection />
          </div>
        </div>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-[82rem] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <SectionHeading
            eyebrow="Applied work"
            title="Selected projects"
            id="projects-heading"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ProjectPreview
              number="01"
              title="Personal Hub"
              summary="A private, browser-based software environment for storage, document utilities, automation, information access, and cross-device workflows."
              href="/projects/personal-hub"
              image={{
                src: "/projects/personal-hub/images/dashboard.png",
                alt: "Personal Hub dashboard interface",
                width: 1910,
                height: 926,
              }}
            />
            <ProjectPreview
              number="02"
              title="Market Intelligence"
              summary="A private research workspace combining company information, legal-entity data, financial observations, public filings, and Canadian economic indicators."
              href="/projects/market-intelligence"
              image={{
                src: "/projects/market-intelligence/images/overview.png",
                alt: "Market Intelligence research workspace overview",
                width: 1904,
                height: 802,
              }}
            />
            <ProjectPreview
              number="03"
              title="Chipotle Valuation"
              summary="An academic project applying financial-statement analysis, ratio analysis, DuPont analysis, and valuation methods to Chipotle Mexican Grill."
              href="/projects/chipotle-valuation"
              image={{
                src: "/resume/images/chipotle-valuation.png",
                alt: "SWOT analysis from the Chipotle valuation project",
                width: 960,
                height: 475,
              }}
            />
          </div>
        </section>

        <section
          id="credentials"
          aria-labelledby="credentials-heading"
          className="scroll-mt-24 border-y border-zinc-300 bg-[#ecebe7]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
            <SectionHeading
              eyebrow="Continuous learning"
              title="Credentials and professional development"
              id="credentials-heading"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CredentialCard number="01" title="Bloomberg Market Concepts" />
              <CredentialCard
                number="02"
                title="Bloomberg Finance Fundamentals"
              />
              <CredentialCard
                number="03"
                title="FactSet Essentials"
                details={[
                  "Core Products",
                  "Portfolio Analysis",
                  "Universal Screening",
                  "Derivative Products",
                  "Productivity Suite",
                ]}
              />
              <CredentialCard
                number="04"
                title="CPA Ontario PSAP Skills Modules"
                details={[
                  "Problem Solving and Decision Making",
                  "Critical Thinking",
                  "Professional Skepticism",
                  "Ethics for Aspiring Accountants",
                ]}
              />
              <CredentialCard
                number="05"
                title="Excel 2016 Essential Training"
              />
            </div>
            <p className="mt-8 text-sm text-zinc-600">
              Credential links are available through{" "}
              <a
                href="https://www.linkedin.com/in/shenodad/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-zinc-900 underline decoration-zinc-400 underline-offset-4"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="mx-auto max-w-[82rem] scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <SectionHeading
            eyebrow="Evidence over ratings"
            title="Skills in context"
            id="skills-heading"
          />
          <div className="mt-14 grid gap-x-12 gap-y-16 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillEvidence key={group.title} {...group} />
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-300 bg-[#deddd8]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
            <SectionHeading
              eyebrow="Career direction"
              title="What I am exploring"
              id="career-direction-heading"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
              <div aria-hidden="true" />
              <div className="max-w-4xl space-y-5 text-lg leading-8 text-zinc-700">
                <p>
                  I am particularly interested in valuation, financial due
                  diligence, transaction-related work, private markets, and the
                  role technology can play in improving financial analysis and
                  business decision-making.
                </p>
                <p>
                  I am also interested in understanding how businesses create
                  value through capital allocation, partnerships, acquisitions,
                  operational improvement, and long-term strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactPanel />
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-4 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-bold tracking-[0.2em] text-zinc-200"
          >
            DANYALS
          </Link>
          <p>
            Built by Danyal Shenoda.{" "}
            <span className="font-mono text-zinc-500">© {currentYear}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
