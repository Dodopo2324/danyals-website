import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import type { ProjectScreenshot } from "./screenshots";

export function FeatureSection({
  number,
  eyebrow,
  title,
  paragraphs,
  images,
  reverse = false,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  images: ProjectScreenshot[];
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <article className="grid gap-9 border-t border-[#cbd2da] py-11 lg:grid-cols-[0.7fr_1.45fr] lg:items-center lg:gap-14 lg:py-14">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#667085]">
            <span className="text-[#167d7a]">{number}</span>
            {eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-3xl leading-[1.12] text-[#17202a]">
            {title}
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-xl text-sm leading-7 text-[#667085]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {children}
        </div>
        <div
          className={`${images.length > 1 ? "grid gap-6" : ""} ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          {images.map((image) => (
            <ScreenshotFrame key={image.src} screenshot={image} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}
