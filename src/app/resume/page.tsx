import type { Metadata } from "next";
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
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const title = "Résumé | Danyals";
const description =
  "An expanded professional profile of Danyal Shenoda covering accounting, finance, client advisory, business operations, technology, and selected projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: {
    title,
    description,
    url: "/resume",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const internalNavigation = [
  ["Summary", "#summary"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Credentials", "#credentials"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const disciplines = [
  [
    "Accounting",
    "Financial performance, reporting, controls, and decision evidence.",
  ],
  ["Finance", "Valuation, capital allocation, risk, and transactions."],
  ["Economics", "Markets, incentives, policy, growth, and external context."],
  [
    "Computer Science",
    "Technical literacy, structured problem-solving, and system understanding.",
  ],
];

const msiResponsibilities = [
  "Conducted detailed consultations and remained the primary client contact until trustee review",
  "Reviewed income, expenses, assets, debts, creditor balances, exemptions, and household circumstances",
  "Prepared simplified household budgets and recommended feasible proposal payment structures",
  "Coordinated documentation, follow-up, and application verification",
  "Prepared trustee-ready files for independent Licensed Insolvency Trustee review",
  "Communicated clearly among clients, administrators, trustees, and creditors",
];

const piktureItResponsibilities = [
  "Developed pricing and quotes based on scope, frequency, editing, equipment, and client budget",
  "Managed invoicing, collections, expenses, and cash flow",
  "Coordinated filming, editing, publishing, contractors, and delivery schedules",
  "Evaluated cameras, lenses, lighting, and other production investments",
  "Contributed to hiring, capacity, and service-scope decisions",
  "Managed client expectations, contract terms, and delivery requirements",
];

function ResponsibilityGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-h-28 gap-3 border-b border-r border-[#cbd2da] p-4 text-xs leading-6 text-[#667085]"
        >
          <span className="mt-2.5 size-1 shrink-0 bg-[#167d7a]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#17202a]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#49c6c2] px-4 py-3 text-sm font-semibold text-[#07111f] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader theme="light" active="resume" />

      <main id="main-content">
        <ResumeHero />

        <nav
          aria-label="Résumé sections"
          className="sticky top-[4.75rem] z-40 overflow-x-auto border-b border-[#cbd2da] bg-[#f8f6f1]/96 backdrop-blur-lg"
        >
          <ul className="mx-auto flex min-w-max max-w-[82rem] px-5 sm:px-8 lg:px-12">
            {internalNavigation.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex min-h-12 items-center border-b-2 border-transparent px-4 text-xs font-medium text-[#667085] transition-colors hover:border-[#49c6c2] hover:text-[#17202a]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          id="summary"
          aria-labelledby="summary-heading"
          className="scroll-mt-32"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Professional summary"
              title="A multidisciplinary view of business"
              id="summary-heading"
              description="I am pursuing an Honours Bachelor of Business Administration at the University of Toronto Mississauga, specializing in Accounting and Finance with a Major in Economics and a Minor in Computer Science."
            />
            <div className="mt-10 grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map(([discipline, text], index) => (
                <Reveal key={discipline} delay={index * 70}>
                  <article className="min-h-44 border-b border-r border-[#cbd2da] p-5">
                    <span className="text-xs tabular-nums text-[#98a2b3]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-8 text-lg text-[#17202a]">
                      {discipline}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-[#667085]">
                      {text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <details className="disclosure mt-7 border-y border-[#cbd2da]">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between text-sm font-semibold text-[#17202a]">
                Why I chose this combination
                <span className="disclosure-icon text-xl font-normal text-[#167d7a] transition-transform">
                  +
                </span>
              </summary>
              <div className="grid gap-5 border-t border-[#cbd2da] py-7 lg:grid-cols-2">
                <p className="text-sm leading-7 text-[#667085]">
                  No single discipline fully explains how a business works.
                  Accounting shows what has occurred, finance examines value
                  and capital decisions, and economics explains the environment
                  around the firm.
                </p>
                <p className="text-sm leading-7 text-[#667085]">
                  Computer science adds technical literacy and the tools to
                  understand the systems supporting modern organizations,
                  communicate with technical professionals, and approach
                  problems structurally without overstating software expertise.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-32 bg-[#f0ece4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Experience"
              title="Professional experience"
              id="experience-heading"
            />
            <ExperienceTimeline />
          </div>
        </section>

        <section className="border-y border-[#cbd2da]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <ExperienceCaseStudy
              id="msi-spergel"
              company="msi Spergel Inc."
              period="June 2025 – April 2026"
              title="Financial Debt Advisor"
              subtitle="Supporting clients from initial inquiry through trustee-ready proposal files."
              introduction="I worked directly with financially distressed individuals and small-business owners considering debt-restructuring options, serving as the primary contact through consultation, document coordination, financial review, proposal structuring, verification, and transfer to a Licensed Insolvency Trustee."
            >
              <div className="grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["90+", "Consumer proposals supported that were ultimately filed"],
                  ["Primary contact", "Phone, text, email, and in-person communication"],
                  ["Financial review", "Debts, income, expenses, assets, and repayment capacity"],
                  ["Proposal structure", "Budgets, payment recommendations, and verification"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="min-h-36 border-b border-r border-[#cbd2da] p-5"
                  >
                    <p className="text-lg font-semibold text-[#167d7a]">
                      {value}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-[#667085]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <section aria-labelledby="workflow-heading" className="mt-16">
                <h3 id="workflow-heading" className="text-2xl text-[#17202a]">
                  Client workflow
                </h3>
                <div className="mt-7">
                  <WorkflowDiagram />
                </div>
              </section>

              <section aria-labelledby="msi-responsibilities" className="mt-16">
                <h3
                  id="msi-responsibilities"
                  className="text-2xl text-[#17202a]"
                >
                  Core responsibilities
                </h3>
                <div className="mt-7">
                  <ResponsibilityGrid items={msiResponsibilities} />
                </div>
              </section>

              <details className="disclosure mt-12 border-y border-[#cbd2da]">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 text-sm font-semibold text-[#17202a]">
                  Communication under financial pressure
                  <span className="disclosure-icon text-xl font-normal text-[#167d7a] transition-transform">
                    +
                  </span>
                </summary>
                <div className="grid gap-8 border-t border-[#cbd2da] py-7 lg:grid-cols-2">
                  <div className="space-y-4 text-sm leading-7 text-[#667085]">
                    <p>
                      Clients were often experiencing significant anxiety and
                      uncertainty, and small communication failures could
                      undermine trust quickly.
                    </p>
                    <p>
                      The role strengthened my ability to explain unfamiliar
                      concepts, manage emotionally difficult conversations,
                      establish realistic expectations, remain accurate under
                      pressure, and communicate with empathy without sacrificing
                      professional judgment.
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-[#667085]">
                    {[
                      "Explaining why minimum credit-card payments may not meaningfully reduce principal",
                      "Distinguishing emotional concerns from financial constraints",
                      "Presenting options clearly",
                      "Helping clients make informed decisions",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 size-1 shrink-0 bg-[#167d7a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </ExperienceCaseStudy>
          </div>
        </section>

        <section className="bg-[#f0ece4]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <ExperienceCaseStudy
              id="piktureit"
              company="PiktureIt Media Production"
              period="February 2024 – June 2025"
              title="Client Relations & Finance Partner"
              subtitle="Pricing, operations, production, and client relationships inside a small media business."
              introduction="PiktureIt created photography and short-form video for retail, automotive, restaurant, jewellery, real-estate, and other small-business clients."
            >
              <div className="grid gap-5 lg:grid-cols-[1.55fr_0.55fr] lg:items-start">
                <ImageFrame
                  src="/resume/images/piktureit-project2.png"
                  alt="Automotive photography produced as part of PiktureIt media work"
                  width={775}
                  height={600}
                  sizes="(max-width: 1023px) 100vw, 62vw"
                  caption="Example of automotive media work; no formal relationship with the vehicle manufacturer is implied."
                />
                <ImageFrame
                  src="/resume/images/piktureit-project.jpg"
                  alt="Product video still produced as part of PiktureIt media work"
                  width={508}
                  height={835}
                  sizes="(max-width: 1023px) 100vw, 24vw"
                  caption="Example of product-focused media work; brand presence does not imply a formal relationship."
                />
              </div>

              <div className="mt-10 grid border-l border-t border-[#cbd2da] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["≈ 8", "Recurring client contracts over the business’s life"],
                  ["Up to 5", "Recurring clients managed concurrently"],
                  ["Services", "Photography, short-form video, editing, and publishing support"],
                  ["254K", "Approximate views on one client TikTok video"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="min-h-36 border-b border-r border-[#cbd2da] p-5"
                  >
                    <p className="text-lg font-semibold text-[#167d7a]">
                      {value}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-[#667085]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.tiktok.com/@baghdadfood1/video/7369695283665538310"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-[#167d7a]"
              >
                View the client video on TikTok{" "}
                <span className="font-normal text-[#667085]">
                  (the result is not attributed to PiktureIt alone)
                </span>
                <span aria-hidden="true">↗</span>
              </a>

              <section
                aria-labelledby="piktureit-responsibilities"
                className="mt-14"
              >
                <h3
                  id="piktureit-responsibilities"
                  className="text-2xl text-[#17202a]"
                >
                  Core responsibilities
                </h3>
                <div className="mt-7">
                  <ResponsibilityGrid items={piktureItResponsibilities} />
                </div>
              </section>

              <details className="disclosure mt-12 border-y border-[#cbd2da]">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 text-sm font-semibold text-[#17202a]">
                  Pricing rationale and the client-selection lesson
                  <span className="disclosure-icon text-xl font-normal text-[#167d7a] transition-transform">
                    +
                  </span>
                </summary>
                <div className="grid gap-8 border-t border-[#cbd2da] py-7 lg:grid-cols-2">
                  <p className="text-sm leading-7 text-[#667085]">
                    Pricing considered filming frequency, editing requirements,
                    equipment needs, service scope, project demand, and client
                    budget. Capital purchases were assessed against expected
                    quality improvements and likely work.
                  </p>
                  <div>
                    <h3 className="text-lg text-[#17202a]">
                      Client selection is part of business strategy
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      Revenue alone does not make an engagement sustainable.
                      The experience informed pricing, contract expectations,
                      boundaries, service scope, communication, and capacity
                      planning.
                    </p>
                    <a
                      href="https://www.instagram.com/piktureit.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#167d7a]"
                    >
                      View PiktureIt on Instagram{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </details>
            </ExperienceCaseStudy>
          </div>
        </section>

        <div className="border-y border-[#cbd2da]">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <EducationSection />
          </div>
        </div>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-32 bg-[#07111f] text-[#f5f1e8]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Applied work"
              title="Selected projects"
              id="projects-heading"
              dark
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <ProjectPreview
                number="01"
                title="Personal Hub"
                summary="A private software environment for storage, document utilities, automation, and cross-device workflows."
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
                summary="A private research workspace combining company, entity, filing, financial, and Canadian economic information."
                href="/projects/market-intelligence"
                image={{
                  src: "/projects/market-intelligence/images/overview.png",
                  alt: "Market Intelligence workspace overview",
                  width: 1904,
                  height: 802,
                }}
              />
              <ProjectPreview
                number="03"
                title="Chipotle Valuation"
                summary="An academic project applying financial-statement, ratio, DuPont, and valuation analysis."
                href="/projects/chipotle-valuation"
                image={{
                  src: "/resume/images/chipotle-valuation.png",
                  alt: "Chipotle valuation project SWOT analysis",
                  width: 960,
                  height: 475,
                }}
              />
            </div>
          </div>
        </section>

        <section
          id="credentials"
          aria-labelledby="credentials-heading"
          className="scroll-mt-32"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Continuous learning"
              title="Credentials and professional development"
              id="credentials-heading"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CredentialCard
                title="Bloomberg"
                detail="Bloomberg Market Concepts"
              />
              <CredentialCard
                title="Bloomberg"
                detail="Bloomberg Finance Fundamentals"
              />
              <CredentialCard
                title="FactSet"
                detail="FactSet Essentials"
                items={[
                  "Core Products",
                  "Portfolio Analysis",
                  "Universal Screening",
                  "Derivative Products",
                  "Productivity Suite",
                ]}
              />
              <CredentialCard
                title="CPA Ontario"
                detail="PSAP Skills Modules"
                items={[
                  "Problem Solving and Decision Making",
                  "Critical Thinking",
                  "Professional Skepticism",
                  "Ethics for Aspiring Accountants",
                ]}
              />
              <CredentialCard
                title="Microsoft Excel"
                detail="Excel 2016 Essential Training"
              />
            </div>
            <p className="mt-7 text-sm text-[#667085]">
              Credential links are available through{" "}
              <a
                href="https://www.linkedin.com/in/shenodad/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#167d7a] underline underline-offset-4"
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
          className="scroll-mt-32 border-y border-[#cbd2da] bg-[#f0ece4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Evidence over ratings"
              title="Skills in context"
              id="skills-heading"
            />
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <SkillEvidence
                title="Finance and accounting"
                skills={[
                  "Financial statements",
                  "Cash flow",
                  "Ratio & DuPont analysis",
                  "Financial modelling",
                ]}
                evidence="Applied across client financial assessments, academic finance work, small-business operations, and the Chipotle valuation."
              />
              <SkillEvidence
                title="Research and data"
                skills={["FactSet", "Bloomberg Terminal", "R", "Stata", "Excel"]}
                evidence="Developed through platform credentials, company research, econometrics coursework, and professional analysis."
              />
              <SkillEvidence
                title="Technology"
                skills={["Python", "Flask", "HTML", "CSS", "JavaScript"]}
                evidence="Used to build and refine Personal Hub and its browser-based interfaces; presented as applied technical literacy, not advanced expertise."
              />
              <SkillEvidence
                title="Professional"
                skills={[
                  "Client communication",
                  "Project coordination",
                  "Stakeholder communication",
                ]}
                evidence="Applied across distressed clients, small-business customers, trustees, administrators, creditors, vendors, and contractors."
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="career-heading">
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <SectionHeading
              eyebrow="Career direction"
              title="What I am exploring"
              id="career-heading"
            />
            <p className="mt-9 max-w-4xl text-lg leading-8 text-[#344054] lg:ml-[calc(30%+2rem)]">
              I am particularly interested in valuation, financial due
              diligence, transaction-related work, private markets, and the role
              technology can play in analysis—along with how capital allocation,
              partnerships, acquisitions, and operational improvement create
              long-term business value.
            </p>
          </div>
        </section>

        <ContactPanel />
      </main>

      <SiteFooter />
    </div>
  );
}
