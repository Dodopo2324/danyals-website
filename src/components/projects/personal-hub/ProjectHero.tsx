import { ScreenshotFrame } from "./ScreenshotFrame";
import { screenshots } from "./screenshots";

export function ProjectHero() {
  return (
    <section className="mx-auto max-w-[82rem] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Self-hosted software system
      </p>

      <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold text-zinc-600">
            Personal Hub
          </p>
          <h1 className="max-w-5xl text-balance text-[2.7rem] font-medium leading-[1.04] tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-[4.25rem]">
            A private, browser-based operating environment built around the
            problems I encounter every day.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Personal Hub began as a way to transfer files from my phone directly
            to my home computer. It has since developed into a self-hosted
            environment for storage, utilities, automation, information, and
            experimental applications that can be accessed from almost any
            connected device.
          </p>
        </div>

        <div className="border-l border-zinc-300 pl-5">
          <div className="flex flex-wrap gap-2">
            <span className="border border-zinc-400 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-700">
              Private system
            </span>
            <span className="border border-zinc-300 bg-white/60 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-600">
              Actively developed
            </span>
          </div>
          <p className="mt-5 text-xs leading-6 text-zinc-500">
            Personal Hub contains private files, administrative tools, and
            personal workflows. Public access is not currently available.
          </p>
        </div>
      </div>

      <ScreenshotFrame
        screenshot={screenshots.dashboard}
        priority
        className="mt-14"
      />
    </section>
  );
}
