import { ScreenshotFrame } from "./ScreenshotFrame";
import type { ProjectScreenshot } from "./screenshots";

interface FeatureSectionProps {
  number: string;
  title: string;
  description: string;
  images: ProjectScreenshot[];
  note?: string;
  reverse?: boolean;
}

export function FeatureSection({
  number,
  title,
  description,
  images,
  note,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <article className="grid gap-8 border-t border-zinc-300 py-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 lg:py-14">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="font-mono text-xs text-zinc-400">{number}</p>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
          {description}
        </p>
        {note ? (
          <p className="mt-5 border-l border-zinc-300 pl-4 text-xs leading-6 text-zinc-500">
            {note}
          </p>
        ) : null}
      </div>
      <div
        className={`${images.length > 1 ? "grid gap-6 sm:grid-cols-2" : ""} ${
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
