import { ScreenshotFrame } from "./ScreenshotFrame";
import { screenshots } from "./screenshots";

const gallery = [
  screenshots.overview,
  screenshots.companies,
  screenshots.appleFinancials,
  screenshots.legalEntitySearch,
  screenshots.rbcLegalEntities,
  screenshots.economy,
  screenshots.businessInvestment,
  screenshots.sources,
  screenshots.settings,
];

export function ProjectGallery() {
  return (
    <section aria-labelledby="gallery-heading">
      <div className="border-t border-zinc-300 pt-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Interface gallery
        </p>
        <h2
          id="gallery-heading"
          className="mt-4 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl"
        >
          Research workspace views
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
          Selected views from the private module. Open any image to inspect its
          full-size interface.
        </p>
      </div>
      <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {gallery.map((image, index) => (
          <ScreenshotFrame
            key={image.src}
            screenshot={image}
            className={index === gallery.length - 1 ? "md:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  );
}
