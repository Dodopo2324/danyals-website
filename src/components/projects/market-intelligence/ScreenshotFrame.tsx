import Image from "next/image";
import type { ProjectScreenshot } from "./screenshots";

interface ScreenshotFrameProps {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  className?: string;
}

export function ScreenshotFrame({
  screenshot,
  priority = false,
  className = "",
}: ScreenshotFrameProps) {
  return (
    <figure className={className}>
      <a
        href={screenshot.fullSizeSrc ?? screenshot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${screenshot.caption}`}
        className="group block border border-zinc-300 bg-[#e8e7e3] p-2 transition-colors hover:border-zinc-500 focus-visible:border-zinc-800 sm:p-3"
      >
        <span className="relative block">
          <Image
            src={screenshot.src}
            width={screenshot.width}
            height={screenshot.height}
            alt={screenshot.alt}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="h-auto w-full bg-zinc-950 object-contain"
          />
          {screenshot.redactions?.map((redaction) => (
            <span
              key={redaction.label}
              aria-label={redaction.label}
              className="absolute grid place-items-center overflow-hidden bg-[#091521] text-[clamp(0.3rem,0.55vw,0.65rem)] text-zinc-400"
              style={{
                left: redaction.left,
                top: redaction.top,
                width: redaction.width,
                height: redaction.height,
              }}
            >
              <span className="sr-only">{redaction.label}</span>
            </span>
          ))}
        </span>
      </a>
      <figcaption className="mt-3 flex items-start justify-between gap-5 text-xs leading-5 text-zinc-500">
        <span>{screenshot.caption}</span>
        <span
          aria-hidden="true"
          className="shrink-0 font-mono text-zinc-400"
        >
          ↗
        </span>
      </figcaption>
    </figure>
  );
}
