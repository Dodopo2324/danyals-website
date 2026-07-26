import Image from "next/image";
import type { ProjectScreenshot } from "./screenshots";

interface ScreenshotFrameProps {
  screenshot: ProjectScreenshot;
  preload?: boolean;
  className?: string;
}

export function ScreenshotFrame({
  screenshot,
  preload = false,
  className = "",
}: ScreenshotFrameProps) {
  return (
    <figure className={className}>
      <a
        href={screenshot.fullSizeSrc ?? screenshot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${screenshot.caption}`}
        className="group block overflow-hidden border border-[#cbd2da] bg-[#f0ece4] p-2 transition duration-300 hover:border-[#167d7a] hover:shadow-[0_16px_40px_rgba(13,27,42,0.09)] sm:p-3"
      >
        <span className="relative block">
          <Image
            src={screenshot.src}
            width={screenshot.width}
            height={screenshot.height}
            alt={screenshot.alt}
            preload={preload}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="h-auto w-full bg-[#07111f] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
          {screenshot.redactions?.map((redaction) => (
            <span
              key={redaction.label}
              aria-label={redaction.label}
              className="absolute grid place-items-center overflow-hidden bg-[#07111f] text-[clamp(0.3rem,0.55vw,0.65rem)] text-[#a7b0be]"
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
      <figcaption className="mt-3 flex items-start justify-between gap-5 text-xs leading-5 text-[#667085]">
        <span>{screenshot.caption}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-[#98a2b3]"
        >
          ↗
        </span>
      </figcaption>
    </figure>
  );
}
