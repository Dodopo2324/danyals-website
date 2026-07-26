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

const title = "Market Intelligence | Danyals";
const description =
  "A private research workspace combining company financials, legal-entity data, public filings, and Canadian economic indicators.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/market-intelligence",
  },
  openGraph: {
    title,
    description,
    url: "/projects/market-intelligence",
    type: "article",
  },
};

const financialObservations = [
  "Revenue",
  "Gross income",
  "Margins",
  "EBITDA",
  "EBIT",
  "Net income",
  "Earnings per share",
  "Assets",
  "Liabilities",
  "Shareholders’ equity",
  "Operating cash flow",
];

const entityFields = [
  "Company or legal name",
  "LEI",
  "Country",
  "Legal jurisdiction",
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

const indicatorDetails = [
  "Latest observation",
  "Period change",
  "Frequency",
  "Geography",
  "Historical chart",
  "Observation table",
  "Series definition",
  "Source metadata",
  "Export capability",
];

const diagnosticStates = [
  "Provider configuration",
  "Authentication requirement",
  "Connection-test outcome",
  "Endpoint permission",
  "Last successful request",
  "Most recent failure",
  "Refresh intervals",
  "Retry behaviour",
  "Cache settings",
  "Monitoring preferences",
];

const sharedArchitecture = [
  "Authentication",
  "Navigation",
  "Local storage",
  "Research history",
  "Administrative controls",
  "Provider configuration",
  "Private data access",
  "Existing hosting infrastructure",
];

const capabilities = [
  "Company tracking and filtering",
  "Multi-period financial observations",
  "GLEIF legal-entity search",
  "Legal-entity linking and confirmation",
  "Statistics Canada indicator browsing",
  "Bank of Canada series access",
  "Historical indicator charts",
  "Research history",
  "Saved pins",
  "Source diagnostics",
  "Export support for selected data",
  "Provider refresh controls",
];

const limitations = [
  "FactSet access is limited by the current account entitlement or allowed IP range.",
  "SEC EDGAR has not yet been fully tested.",
  "Coverage varies by provider and company.",
  "Data refresh schedules differ across sources.",
  "The interface is still being simplified.",
  "The module remains private and is not designed for public investment use.",
];

const futureDirections = [
  {
    number: "01",
    title: "SEC EDGAR validation",
    description:
      "Complete testing of issuer search, filing history, filing metadata, and selected filing documents.",
  },
  {
    number: "02",
    title: "Better company identity mapping",
    description:
      "Improve links among company names, tickers, FactSet identifiers, LEIs, SEC identifiers, and internal records.",
  },
  {
    number: "03",
    title: "Research workspace simplification",
    description:
      "Reduce interface density and make common workflows easier to navigate.",
  },
  {
    number: "04",
    title: "Saved research and monitoring",
    description:
      "Expand pins, watchlists, refresh tracking, and meaningful change detection.",
  },
  {
    number: "05",
    title: "Stronger visual analysis",
    description:
      "Improve charts and comparisons while preserving source attribution and avoiding unsupported conclusions.",
  },
];

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-zinc-300 bg-white/50 px-3 py-2 text-xs text-zinc-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex h-[4.5rem] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.22em] text-zinc-950"
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center border border-zinc-800 text-[0.65rem] tracking-[-0.08em]"
            >
              DS
            </span>
            DANYALS
          </Link>
          <Link
            href="/#projects"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Back to Projects
          </Link>
        </div>
      </header>

      <main>
        <ProjectHero />
        <ResearchWorkflow />

        <section
          aria-labelledby="workspace-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <h2 id="workspace-heading" className="sr-only">
            Research workspaces
          </h2>
          <FeatureSection
            number="01"
            eyebrow="Research overview"
            title="One research workspace"
            paragraphs={[
              "The overview brings together global search, tracked-company context, recently refreshed records, entity-change monitoring, saved pins, and recent research history.",
              "It provides a starting point for moving among company, entity, filing, and economic research without overstating the breadth or completeness of the underlying data.",
            ]}
            images={[screenshots.overview]}
          />

          <FeatureSection
            number="02"
            eyebrow="Company research"
            title="Tracked companies and financial observations"
            paragraphs={[
              "The company workspace allows companies to be added, searched, filtered, refreshed, grouped into watchlists, and reviewed across multiple periods.",
              "Coverage depends on provider access and source availability, so not every observation is available for every tracked company.",
            ]}
            images={[screenshots.companies, screenshots.appleFinancials]}
            reverse
          >
            <TagList items={financialObservations} />
          </FeatureSection>

          <FeatureSection
            number="03"
            eyebrow="Legal-entity research"
            title="Resolving the correct legal entity"
            paragraphs={[
              "GLEIF integration allows public Legal Entity Identifier records to be searched using several identity and registration fields.",
              "Search results can include subsidiaries, branches, funds, foreign entities, or similarly named organizations. The interface therefore asks the user to verify the legal name, jurisdiction, country, and registered address before linking a record.",
              "The Royal Bank of Canada example demonstrates why the intended Canadian entity must be distinguished from similarly named or related organizations.",
            ]}
            images={[
              screenshots.legalEntitySearch,
              screenshots.rbcLegalEntities,
            ]}
          >
            <TagList items={entityFields} />
          </FeatureSection>

          <FeatureSection
            number="04"
            eyebrow="Canadian economic data"
            title="Economic indicators in context"
            paragraphs={[
              "The economy workspace organizes selected Statistics Canada indicators and Bank of Canada series into a searchable interface.",
              "Displayed figures come from their attributed official sources and may be refreshed on different schedules.",
            ]}
            images={[screenshots.economy, screenshots.businessInvestment]}
            reverse
          >
            <TagList items={economicSubjects} />
            <h3 className="mt-7 text-sm font-semibold text-zinc-900">
              Detailed indicator views may include
            </h3>
            <TagList items={indicatorDetails} />
          </FeatureSection>
        </section>

        <section
          aria-labelledby="sources-heading"
          className="bg-[#e9e8e4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Data sources and current status
                </p>
                <h2
                  id="sources-heading"
                  className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
                >
                  Provider-aware research
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-zinc-600">
                Licensed and public sources have different access conditions.
                Provider configuration, connection state, endpoint access, and
                current issues are therefore presented separately. The FactSet
                limitation is an account, entitlement, or allowed-IP condition,
                not a software failure.
              </p>
            </div>
            <div className="mt-10">
              <SourceStatus />
            </div>
            <ScreenshotFrame
              screenshot={screenshots.sources}
              className="mt-12"
            />
          </div>
        </section>

        <section
          aria-labelledby="diagnostics-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <FeatureSection
            number="05"
            eyebrow="Source configuration and diagnostics"
            title="Separating configuration from request outcomes"
            paragraphs={[
              "The settings and diagnostics interface distinguishes provider configuration from the outcome of an individual request.",
              "A provider may be configured correctly while a specific request fails because of entitlement restrictions, source availability, authentication scope, or an endpoint limitation. Keeping these states separate makes the system easier to understand without presenting it as enterprise monitoring.",
            ]}
            images={[screenshots.settings]}
          >
            <TagList items={diagnosticStates} />
          </FeatureSection>
          <span id="diagnostics-heading" className="sr-only">
            Source configuration and diagnostics
          </span>
        </section>

        <TechnicalChallenge />

        <section
          aria-labelledby="architecture-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Architecture
              </p>
              <h2
                id="architecture-heading"
                className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
              >
                A module inside Personal Hub
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-zinc-600">
                Market Intelligence remains part of Personal Hub rather than
                operating as a separate public application. Public visitors see
                only this case study; the live system remains private.
              </p>
              <TagList items={sharedArchitecture} />
              <Link
                href="/projects/personal-hub"
                className="group mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
              >
                View the Personal Hub case study
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="bg-zinc-900 text-white"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Current capabilities
            </p>
            <h2
              id="capabilities-heading"
              className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl"
            >
              What the module supports
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              Availability and completeness vary by provider, company, and
              access level.
            </p>
            <ul className="mt-10 grid border-l border-t border-zinc-700 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="flex min-h-28 flex-col justify-between border-b border-r border-zinc-700 p-4 text-sm text-zinc-300"
                >
                  <span className="font-mono text-[0.65rem] text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-[82rem] space-y-28 px-5 py-20 sm:px-8 sm:py-28 lg:space-y-32 lg:px-12 lg:py-32">
          <section aria-labelledby="limitations-heading">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Limitations and active development
                </p>
                <h2
                  id="limitations-heading"
                  className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
                >
                  Current limitations
                </h2>
              </div>
              <ul className="divide-y divide-zinc-300 border-y border-zinc-300">
                {limitations.map((limitation, index) => (
                  <li
                    key={limitation}
                    className="grid gap-3 py-5 text-sm leading-7 text-zinc-700 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="font-mono text-xs text-zinc-400">
                      0{index + 1}
                    </span>
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="future-heading">
            <div className="border-t border-zinc-300 pt-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Future direction
              </p>
              <h2
                id="future-heading"
                className="mt-4 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl"
              >
                Next improvements
              </h2>
            </div>
            <div className="mt-10 grid border-l border-t border-zinc-300 md:grid-cols-2">
              {futureDirections.map((direction) => (
                <article
                  key={direction.title}
                  className="flex min-h-60 flex-col border-b border-r border-zinc-300 p-5 sm:p-7"
                >
                  <span className="font-mono text-xs text-zinc-400">
                    {direction.number}
                  </span>
                  <div className="mt-auto pt-10">
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                      {direction.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
                      {direction.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <ProjectGallery />

          <section
            aria-labelledby="access-heading"
            className="border border-zinc-300 bg-[#e9e8e4] p-6 sm:p-8"
          >
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Access
                </p>
                <h2
                  id="access-heading"
                  className="mt-4 max-w-3xl text-balance text-2xl font-medium leading-[1.2] tracking-[-0.035em] text-zinc-950 sm:text-3xl"
                >
                  Market Intelligence is a private module within Personal Hub.
                  Public access is not currently available.
                </h2>
              </div>
              <dl className="divide-y divide-zinc-300 border-y border-zinc-300">
                <div className="py-4">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    Development status
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-zinc-900">
                    Active
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    Primary purpose
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-800">
                    Personal financial and economic research
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    Data scope
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-800">
                    Public and licensed sources, subject to provider access
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-4 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-bold tracking-[0.2em] text-zinc-200">DANYALS</p>
          <p>Market Intelligence · Private research module</p>
        </div>
      </footer>
    </div>
  );
}
