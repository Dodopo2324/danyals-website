import { ScreenshotFrame } from "./ScreenshotFrame";
import type { ProjectScreenshot } from "./screenshots";

interface FeatureSectionProps {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  images: ProjectScreenshot[];
  reverse?: boolean;
  children?: React.ReactNode;
}

export function FeatureSection({
  number,
  eyebrow,
  title,
  paragraphs,
  images,
  reverse = false,
  children,
}: FeatureSectionProps) {
  return (
    <article className="grid gap-9 border-t border-zinc-300 py-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 lg:py-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          <span className="font-mono text-zinc-400">{number}</span>
          {eyebrow}
        </div>
        <h2 className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] text-zinc-950 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-xl text-sm leading-7 text-zinc-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {children}
      </div>
      <div
        className={`${images.length > 1 ? "grid gap-7" : ""} ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        {images.map((image) => (
          <ScreenshotFrame key={image.src} screenshot={image} />
        ))}
      </div>
    </article>
  );
}
