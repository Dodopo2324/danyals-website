import type { Metadata } from "next";
import Link from "next/link";
import { FeatureSection } from "@/components/projects/market-intelligence/FeatureSection";
import { ProjectGallery } from "@/components/projects/market-intelligence/ProjectGallery";
import { ProjectHero } from "@/components/projects/market-intelligence/ProjectHero";
import { ResearchWorkflow } from "@/components/projects/market-intelligence/ResearchWorkflow";
import { ScreenshotFrame } from "@/components/projects/market-intelligence/ScreenshotFrame";
import { SourceStatus } from "@/components/projects/market-intelligence/SourceStatus";
import { TechnicalChallenge } from "@/components/projects/market-intelligence/TechnicalChallenge";
import { screenshots } from "@/components/projects/market-intelligence/screenshots";
import { ProjectNavigation } from "@/components/site/ProjectNavigation";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const title = "Market Intelligence | Danyals";
const description =
  "A private research workspace combining company financials, legal-entity data, public filings, and Canadian economic indicators.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/market-intelligence" },
  openGraph: {
    title,
    description,
    url: "/projects/market-intelligence",
    type: "article",
  },
  twitter: { card: "summary", title, description },
};

const companyMetrics = [
  "Revenue",
  "Margins",
  "EBITDA",
  "Net income",
  "EPS",
  "Assets",
  "Liabilities",
  "Equity",
  "Operating cash flow",
];

const entityFields = [
  "Legal name",
  "LEI",
  "Country",
  "Jurisdiction",
  "City",
  "Entity status",
  "Registration status",
];

const economicSubjects = [
  "Growth",
  "Inflation",
  "Labour",
  "Population",
  "Trade",
  "Housing",
  "Currency",
  "Interest rates",
];

const limitations = [
  "FactSet access depends on the current account entitlement or allowed IP range.",
  "SEC EDGAR validation remains incomplete.",
  "Coverage and refresh schedules vary by provider and company.",
  "The interface is still being simplified.",
  "The module remains private and is not intended for public investment use.",
];

const future = [
  "Validate SEC EDGAR issuer and filing workflows",
  "Improve mapping among names, tickers, LEIs, and SEC identifiers",
  "Simplify the research workspace",
  "Expand saved research, monitoring, and change detection",
  "Improve comparisons while preserving attribution",
];

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-[#cbd2da] bg-white/50 px-3 py-2 text-xs text-[#344054]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#17202a]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#49c6c2] px-4 py-3 text-sm font-semibold text-[#07111f] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader active="projects" />

      <main id="main-content">
        <ProjectHero />

        <section
          aria-labelledby="purpose-heading"
          className="dark-focus bg-[#07111f] text-[#f5f1e8]"
        >
          <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.65fr] lg:gap-14 lg:px-12">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a7b0be]">
                Purpose
              </p>
              <h2
                id="purpose-heading"
                className="mt-5 text-balance text-3xl leading-[1.12] sm:text-5xl"
              >
                Reduce research fragmentation
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#d8dde5]">
              Financial and economic research often requires moving among
              public databases, APIs, investor-relations pages, and professional
              platforms. Market Intelligence brings selected company,
              legal-entity, filing, and economic information into one private
              workspace for organization and convenience. It supplements
              institutional platforms rather than replacing them, while keeping
              source attribution, access limits, and data status visible.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="research-workflow-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <SectionHeading
            eyebrow="Research workflow"
            title="From search to monitored research"
            id="research-workflow-heading"
          />
          <div className="mt-9">
            <ResearchWorkflow />
          </div>
        </section>

        <section
          aria-labelledby="research-areas-heading"
          className="border-y border-[#cbd2da] bg-[#f0ece4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <h2 id="research-areas-heading" className="sr-only">
              Research areas
            </h2>
            <FeatureSection
              number="01"
              eyebrow="Company research"
              title="Companies and financial observations"
              paragraphs={[
                "Companies can be searched, filtered, refreshed, grouped into watchlists, and reviewed across multiple periods.",
                "Coverage depends on provider access and availability, so not every observation exists for every company.",
              ]}
              images={[screenshots.companies, screenshots.appleFinancials]}
            >
              <TagList items={companyMetrics} />
            </FeatureSection>

            <FeatureSection
              number="02"
              eyebrow="Legal-entity research"
              title="Resolve the correct legal entity"
              paragraphs={[
                "GLEIF records can be searched by identity, jurisdiction, and registration fields.",
                "Because results may include subsidiaries, branches, funds, or similarly named organizations, the interface requires explicit verification before a record is linked.",
              ]}
              images={[
                screenshots.legalEntitySearch,
                screenshots.rbcLegalEntities,
              ]}
              reverse
            >
              <TagList items={entityFields} />
            </FeatureSection>

            <FeatureSection
              number="03"
              eyebrow="Economic research"
              title="Canadian indicators in context"
              paragraphs={[
                "Selected Statistics Canada indicators and Bank of Canada series are organized into searchable subject areas.",
                "Detailed views can show latest observations, changes, charts, history, definitions, source metadata, and export support.",
              ]}
              images={[screenshots.economy, screenshots.businessInvestment]}
            >
              <TagList items={economicSubjects} />
            </FeatureSection>
          </div>
        </section>

        <section
          aria-labelledby="providers-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <SectionHeading
            eyebrow="Provider status"
            title="Access conditions remain visible"
            id="providers-heading"
            description="Licensed and public sources have different entitlements, authentication requirements, refresh schedules, and endpoint limits. Status is communicated in text, not colour alone."
          />
          <div className="mt-9">
            <SourceStatus />
          </div>

          <details className="disclosure mt-8 border-y border-[#cbd2da]">
            <summary className="flex min-h-14 cursor-pointer items-center justify-between text-sm font-semibold text-[#17202a]">
              How provider diagnostics work
              <span className="disclosure-icon text-xl font-normal text-[#167d7a] transition-transform">
                +
              </span>
            </summary>
            <div className="grid gap-8 border-t border-[#cbd2da] py-7 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-sm leading-7 text-[#667085]">
                  The diagnostics interface separates configuration from
                  individual request outcomes. A provider may be configured
                  correctly while a request fails because of entitlement,
                  source availability, authentication scope, or endpoint
                  limitations.
                </p>
                <TagList
                  items={[
                    "Connection tests",
                    "Last success",
                    "Most recent failure",
                    "Refresh intervals",
                    "Retry behaviour",
                    "Cache settings",
                  ]}
                />
              </div>
              <ScreenshotFrame screenshot={screenshots.settings} />
            </div>
          </details>
        </section>

        <TechnicalChallenge />

        <div className="mx-auto max-w-[82rem] space-y-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <ProjectGallery />

          <section aria-labelledby="limitations-heading">
            <SectionHeading
              eyebrow="Limitations and future direction"
              title="A useful module still in active development"
              id="limitations-heading"
            />
            <div className="mt-9 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xl text-[#17202a]">Current limitations</h3>
                <ul className="mt-5 divide-y divide-[#cbd2da] border-y border-[#cbd2da]">
                  {limitations.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 py-4 text-sm leading-6 text-[#667085]"
                    >
                      <span className="mt-2.5 size-1 shrink-0 bg-[#167d7a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-[#17202a]">Next improvements</h3>
                <ol className="mt-5 divide-y divide-[#cbd2da] border-y border-[#cbd2da]">
                  {future.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2rem_1fr] gap-3 py-4 text-sm leading-6 text-[#667085]"
                    >
                      <span className="text-xs tabular-nums text-[#98a2b3]">
                        0{index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <p className="mt-8 border-l-2 border-[#167d7a] pl-4 text-sm leading-7 text-[#667085]">
              Market Intelligence is a private module within Personal Hub.
              Public access is not available, and the module does not provide
              investment advice.
            </p>
            <Link
              href="/projects/personal-hub"
              className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#167d7a]"
            >
              View the Personal Hub case study <span aria-hidden="true">→</span>
            </Link>
          </section>

          <ProjectNavigation
            previous={{
              label: "Personal Hub",
              href: "/projects/personal-hub",
            }}
            next={{
              label: "Chipotle Valuation",
              href: "/projects/chipotle-valuation",
            }}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
