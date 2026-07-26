import type { Metadata } from "next";
import Link from "next/link";
import { AccessNotice } from "@/components/projects/personal-hub/AccessNotice";
import { FeatureSection } from "@/components/projects/personal-hub/FeatureSection";
import { ProjectGallery } from "@/components/projects/personal-hub/ProjectGallery";
import { ProjectHero } from "@/components/projects/personal-hub/ProjectHero";
import { StackList } from "@/components/projects/personal-hub/StackList";
import { TechnicalChallenge } from "@/components/projects/personal-hub/TechnicalChallenge";
import { screenshots } from "@/components/projects/personal-hub/screenshots";
import { ProjectNavigation } from "@/components/site/ProjectNavigation";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const title = "Personal Hub | Danyals";
const description =
  "A privately hosted personal software environment for file storage, utilities, automation, information, and cross-device workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/personal-hub" },
  openGraph: {
    title,
    description,
    url: "/projects/personal-hub",
    type: "article",
  },
  twitter: { card: "summary", title, description },
};

const futureDirections = [
  {
    title: "Voice interaction",
    description:
      "Explore speech recognition, intent routing, reminders, notifications, and permission-aware actions.",
  },
  {
    title: "Interface simplification",
    description:
      "Consolidate overlapping utilities—particularly document tools—into clearer workflows.",
  },
  {
    title: "Expanded self-hosted utilities",
    description:
      "Add practical modules where control and maintainability justify replacing a subscription.",
  },
];

export default function PersonalHubPage() {
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
          aria-labelledby="origin-heading"
          className="dark-focus bg-[#07111f] text-[#f5f1e8]"
        >
          <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.65fr] lg:gap-14 lg:px-12">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a7b0be]">
                Origin
              </p>
              <h2
                id="origin-heading"
                className="mt-5 max-w-md text-balance text-3xl leading-[1.12] sm:text-5xl"
              >
                It started with a storage problem
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-[#d8dde5]">
                My iPhone storage was full, and moving large photos and videos
                was inconvenient. Rather than add another cloud subscription, I
                used the available capacity on my home computer to build a
                password-protected browser utility. Files could be uploaded
                from a connected device directly to privately controlled local
                storage. Once that first workflow proved reliable, it became
                the foundation for a broader environment where storage,
                document tools, automation, information, and recurring personal
                workflows could live together.
              </p>
              <details className="disclosure mt-7 border-y border-[#23364a]">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between text-sm font-semibold text-[#f5f1e8]">
                  Read the full origin story
                  <span className="disclosure-icon text-xl font-normal text-[#49c6c2] transition-transform">
                    +
                  </span>
                </summary>
                <div className="space-y-4 border-t border-[#23364a] py-6 text-sm leading-7 text-[#a7b0be]">
                  <p>
                    The available capacity was limited by local hardware rather
                    than a third-party subscription tier. I used the utility to
                    move photos and videos off my phone successfully.
                  </p>
                  <p>
                    Instead of building isolated scripts whenever a recurring
                    problem appeared, I developed one authenticated environment
                    that could keep growing with new utilities and workflows.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <SectionHeading
            eyebrow="Key capabilities"
            title="Six modules that define the system"
            id="capabilities-heading"
            description="Each module addresses a recurring workflow while sharing the same private browser-based environment."
          />
          <div className="mt-9">
            <FeatureSection
              number="01"
              title="File Transfer"
              description="Authenticated uploads move large files from another device directly to storage on the host computer."
              images={[screenshots.fileTransfer]}
            />
            <FeatureSection
              number="02"
              title="Storage"
              description="A browser interface supports viewing, searching, organizing, uploading, and downloading privately stored files."
              images={[screenshots.storage]}
              reverse
            />
            <FeatureSection
              number="03"
              title="PDF Tools"
              description="Document workflows cover merging, splitting, rotating, and reordering pages, with outputs saved back into storage."
              note="Interface consolidation remains a planned improvement."
              images={[screenshots.pdfTool]}
            />
            <FeatureSection
              number="04"
              title="Night Mode"
              description="A full-screen ambient display combines time, date, weather, brightness controls, and locally stored city footage."
              images={[screenshots.nightMode]}
              reverse
            />
            <FeatureSection
              number="05"
              title="Dashboard and Launcher"
              description="A central view brings together daily information, navigation, administration, utilities, and experimental modules."
              images={[screenshots.dashboard, screenshots.appLauncher]}
            />
            <FeatureSection
              number="06"
              title="Market Intelligence"
              description="A developing research module adds company, legal-entity, filing, financial, and Canadian economic information."
              images={[screenshots.marketIntelligence]}
              reverse
            />
          </div>
        </section>

        <TechnicalChallenge />

        <div className="mx-auto max-w-[82rem] space-y-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <StackList />

          <section aria-labelledby="future-heading">
            <SectionHeading
              eyebrow="Future direction"
              title="Next improvements"
              id="future-heading"
            />
            <div className="mt-9 grid border-l border-t border-[#cbd2da] md:grid-cols-3">
              {futureDirections.map((direction, index) => (
                <article
                  key={direction.title}
                  className="min-h-52 border-b border-r border-[#cbd2da] p-5"
                >
                  <span className="text-xs tabular-nums text-[#167d7a]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-10 text-xl text-[#17202a]">
                    {direction.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#667085]">
                    {direction.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <ProjectGallery />

          <AccessNotice />

          <div className="border-t border-[#cbd2da] pt-8">
            <Link
              href="/projects/market-intelligence"
              className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#167d7a]"
            >
              Explore the Market Intelligence module{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ProjectNavigation
            next={{
              label: "Market Intelligence",
              href: "/projects/market-intelligence",
            }}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
