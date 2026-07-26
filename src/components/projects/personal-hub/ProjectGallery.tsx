import { SectionHeading } from "@/components/site/SectionHeading";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { screenshots } from "./screenshots";

export function ProjectGallery() {
  return (
    <section aria-labelledby="gallery-heading">
      <SectionHeading
        eyebrow="Interface gallery"
        title="A view not featured above"
        id="gallery-heading"
        description="The sign-in screen completes the public interface story without repeating the six primary capability images."
      />
      <ScreenshotFrame screenshot={screenshots.login} className="mt-9" />
    </section>
  );
}
