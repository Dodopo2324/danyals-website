import { Reveal } from "@/components/site/Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import type { ProjectScreenshot } from "./screenshots";

export function FeatureSection({
  number,
  title,
  description,
  images,
  note,
  reverse = false,
}: {
  number: string;
  title: string;
  description: string;
  images: ProjectScreenshot[];
  note?: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <article className="grid gap-8 border-t border-[#cbd2da] py-10 lg:grid-cols-[0.7fr_1.45fr] lg:items-center lg:gap-14 lg:py-14">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="text-xs tabular-nums text-[#167d7a]">{number}</p>
          <h3 className="mt-5 text-2xl text-[#17202a]">{title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#667085]">
            {description}
          </p>
          {note ? (
            <p className="mt-5 border-l border-[#167d7a] pl-4 text-xs leading-6 text-[#667085]">
              {note}
            </p>
          ) : null}
        </div>
        <div
          className={`${images.length > 1 ? "grid gap-5 sm:grid-cols-2" : ""} ${
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
