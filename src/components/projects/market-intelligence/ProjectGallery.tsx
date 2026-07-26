import { SectionHeading } from "@/components/site/SectionHeading";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { screenshots } from "./screenshots";

export function ProjectGallery() {
  return (
    <section aria-labelledby="gallery-heading">
      <SectionHeading
        eyebrow="Interface gallery"
        title="Provider visibility"
        id="gallery-heading"
        description="A source-status view complements the research screenshots above without repeating them."
      />
      <ScreenshotFrame screenshot={screenshots.sources} className="mt-9" />
    </section>
  );
}
