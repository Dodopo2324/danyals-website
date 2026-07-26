import type { Metadata } from "next";
import Link from "next/link";
import { AccessNotice } from "@/components/projects/personal-hub/AccessNotice";
import { FeatureSection } from "@/components/projects/personal-hub/FeatureSection";
import { ProjectGallery } from "@/components/projects/personal-hub/ProjectGallery";
import { ProjectHero } from "@/components/projects/personal-hub/ProjectHero";
import { ScreenshotFrame } from "@/components/projects/personal-hub/ScreenshotFrame";
import { StackList } from "@/components/projects/personal-hub/StackList";
import { TechnicalChallenge } from "@/components/projects/personal-hub/TechnicalChallenge";
import { screenshots } from "@/components/projects/personal-hub/screenshots";

const title = "Personal Hub | Danyals";
const description =
  "A privately hosted personal software environment for file storage, utilities, automation, information, and cross-device workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects/personal-hub",
  },
  openGraph: {
    title,
    description,
    url: "/projects/personal-hub",
    type: "article",
  },
};

const principles = [
  "Browser-based access",
  "No local installation required",
  "Cross-device availability",
  "Privately controlled storage",
  "Modular applications",
  "Ownership of the software and workflows",
  "New tools for recurring problems",
];

const workflows = [
  "Moving large files between devices and home storage",
  "Accessing personal files through a browser",
  "Running parking-permit automation for family use",
  "Combining multiple document tools in one place",
  "Viewing weather, time, news, and local information",
  "Running a customized nighttime display",
  "Accessing market and economic research tools",
  "Adding new utilities when a repetitive problem appears",
];

const systemAreas = [
  "Authentication",
  "Permissions",
  "Local file storage",
  "JSON-based data",
  "Administrative controls",
  "Audit and operational records",
  "Browser automation",
  "External APIs",
  "Media playback",
  "Utility applications",
  "Experimental modules",
];

const futureDirections = [
  {
    number: "01",
    title: "Voice interaction",
    description:
      "A future voice interface could accept an instruction such as, “Remind me at 7:00 p.m. to research Berkshire Hathaway.” Building it would involve speech recognition, intent detection, date and time extraction, action routing, notifications, and permission handling.",
  },
  {
    number: "02",
    title: "Interface simplification",
    description:
      "Several tools, particularly the PDF utilities, should be consolidated into fewer and clearer workflows.",
  },
  {
    number: "03",
    title: "Broader device usefulness",
    description:
      "Future exploration may consider voice-first, passive-display, or driving-related contexts. No driving integration currently exists.",
  },
  {
    number: "04",
    title: "Additional self-hosted utilities",
    description:
      "Future modules may replace selected subscription-based tools where doing so is practical, maintainable, and legally appropriate.",
  },
];

export default function PersonalHubPage() {
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

        <section
          aria-labelledby="origin-heading"
          className="bg-zinc-900 text-white"
        >
          <div className="mx-auto grid max-w-[82rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20 lg:px-12">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Project origin
              </p>
              <h2
                id="origin-heading"
                className="mt-5 max-w-md text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
              >
                It started with a storage problem
              </h2>
            </div>
            <div>
              <div className="space-y-5 text-base leading-8 text-zinc-300">
                <p>
                  My iPhone storage had filled up, and moving large photos and
                  videos off the device was inconvenient. I did not want to
                  depend on another cloud-storage subscription when I already
                  had a capable home computer with several terabytes of
                  available storage.
                </p>
                <p>
                  I built a password-protected web utility that allowed files to
                  be uploaded from almost any connected device directly to that
                  computer. The available capacity was limited by privately
                  controlled local hardware rather than a third-party
                  subscription tier.
                </p>
                <p>
                  I used the tool to move photos and videos off my phone
                  successfully. That first reliable workflow became the starting
                  point for the broader Personal Hub idea.
                </p>
              </div>
              <ScreenshotFrame
                screenshot={screenshots.fileTransfer}
                className="mt-10"
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="core-idea-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Core idea
              </p>
              <h2
                id="core-idea-heading"
                className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
              >
                From one utility to a personal operating environment
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-zinc-600">
                Instead of building isolated scripts every time a recurring
                problem appeared, Personal Hub became one place where tools,
                files, automation, information, and personal workflows could
                live together.
              </p>
              <ul className="mt-10 grid border-l border-t border-zinc-300 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <li
                    key={principle}
                    className="flex min-h-24 flex-col justify-between border-b border-r border-zinc-300 p-4 text-sm font-medium text-zinc-800"
                  >
                    <span className="font-mono text-[0.65rem] text-zinc-400">
                      0{index + 1}
                    </span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="modules-heading"
          className="bg-[#e9e8e4]"
        >
          <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="border-t border-zinc-300 pt-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Selected applications
              </p>
              <h2
                id="modules-heading"
                className="mt-4 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl"
              >
                Featured modules
              </h2>
            </div>

            <div className="mt-10">
              <FeatureSection
                number="01"
                title="File Transfer"
                description="The original Personal Hub utility. It allows authenticated users to upload files from another device directly to storage on the host computer, making large transfers possible without conventional email or consumer cloud-storage limits."
                images={[screenshots.fileTransfer]}
              />
              <FeatureSection
                number="02"
                title="Storage"
                description="A browser-based interface for viewing, searching, sorting, organizing, uploading, and downloading files stored on privately controlled hardware."
                images={[screenshots.storage]}
                reverse
              />
              <FeatureSection
                number="03"
                title="PDF Tool"
                description="A document utility for merging, splitting, rotating, and reordering PDF pages, with generated files saved back into Personal Hub storage."
                note="The current toolset is functional, but interface consolidation is a planned improvement."
                images={[screenshots.pdfTool]}
              />
              <FeatureSection
                number="04"
                title="Night Mode"
                description="A full-screen ambient display designed for nighttime use. It includes a large clock, date, weather information, brightness controls, and locally stored city footage."
                images={[screenshots.nightMode]}
                reverse
              />
              <FeatureSection
                number="05"
                title="Dashboard and App Launcher"
                description="The dashboard acts as a central command centre for time, weather, news, navigation, administration, and available applications. The launcher organizes utilities and experimental tools in one consistent interface."
                images={[screenshots.dashboard, screenshots.appLauncher]}
              />
              <FeatureSection
                number="06"
                title="Authentication"
                description="The system uses username-and-password authentication with server-side Flask sessions to protect access to private tools and files."
                images={[screenshots.login]}
                reverse
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="workflows-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Real-world workflows
              </p>
              <h2
                id="workflows-heading"
                className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
              >
                Recurring problems it simplifies
              </h2>
            </div>
            <ol className="grid border-l border-t border-zinc-300 sm:grid-cols-2">
              {workflows.map((workflow, index) => (
                <li
                  key={workflow}
                  className="flex min-h-28 flex-col justify-between border-b border-r border-zinc-300 p-4 text-sm leading-6 text-zinc-700"
                >
                  <span className="font-mono text-[0.65rem] text-zinc-400">
                    0{index + 1}
                  </span>
                  {workflow}
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-6 text-zinc-500 md:ml-[calc(33.333%+0.75rem)]">
            These workflows are private and are not all available to other
            users. Administrative details remain intentionally undisclosed.
          </p>
        </section>

        <TechnicalChallenge />

        <section
          aria-labelledby="architecture-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-8">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Architecture and scale
              </p>
              <h2
                id="architecture-heading"
                className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
              >
                A growing private system
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-zinc-600">
                The broader challenge is not one feature, but managing a system
                with many connected responsibilities. Early planning helped
                avoid rebuilding the entire environment as it expanded, without
                implying enterprise-scale architecture.
              </p>
              <ul className="mt-10 flex flex-wrap gap-2">
                {systemAreas.map((area) => (
                  <li
                    key={area}
                    className="border border-zinc-300 bg-white/50 px-3 py-2 text-xs text-zinc-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="market-intelligence-heading"
          className="bg-[#e9e8e4]"
        >
          <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-8 lg:px-12">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Developing module
              </p>
              <h2
                id="market-intelligence-heading"
                className="mt-5 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-5xl"
              >
                Market Intelligence
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-zinc-600">
                Market Intelligence is a developing research module inside
                Personal Hub. It is intended to provide faster access to
                financial, corporate, ownership, economic, and public-filing
                information through a focused personal interface.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">
                It currently or ultimately connects to sources such as FactSet,
                GLEIF, Bank of Canada, weather data, SEC EDGAR, and Statistics
                Canada. It supplements established platforms rather than
                replacing them, and it is still being refined.
              </p>
              {/* TODO: Create the /projects/market-intelligence case-study page next. */}
              <Link
                href="/projects/market-intelligence"
                className="group mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 focus-visible:text-zinc-950"
              >
                View Market Intelligence project
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

        <div className="mx-auto max-w-[82rem] space-y-28 px-5 py-20 sm:px-8 sm:py-28 lg:space-y-32 lg:px-12 lg:py-32">
          <StackList />

          <section
            aria-labelledby="proud-heading"
            className="border-y border-zinc-300 py-14"
          >
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  What I am most proud of
                </p>
                <h2
                  id="proud-heading"
                  className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
                >
                  A system that grows with the problems
                </h2>
              </div>
              <div>
                <p className="max-w-3xl text-lg leading-8 text-zinc-600">
                  The defining feature of Personal Hub is not any single module.
                  It is the ability to identify a recurring problem, build a
                  solution, and permanently add that solution to an environment
                  I control.
                </p>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600">
                  In practical terms, that means greater productivity, lower
                  dependence on subscriptions, cross-device access, ownership
                  of the system, freedom to customize workflows, and a useful
                  environment for applying software-design knowledge.
                </p>
              </div>
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
                  className="flex min-h-64 flex-col border-b border-r border-zinc-300 p-5 sm:p-7"
                >
                  <span className="font-mono text-xs text-zinc-400">
                    {direction.number}
                  </span>
                  <div className="mt-auto pt-12">
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
          <AccessNotice />
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-4 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-bold tracking-[0.2em] text-zinc-200">DANYALS</p>
          <p>Personal Hub · Private software system</p>
        </div>
      </footer>
    </div>
  );
}
