import Link from "next/link";
import { ImageFrame } from "./ImageFrame";

type ProjectPreviewProps = {
  number: string;
  title: string;
  summary: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export function ProjectPreview({
  number,
  title,
  summary,
  href,
  image,
}: ProjectPreviewProps) {
  return (
    <article className="group flex h-full flex-col border border-[#cbd2da] bg-[#f8f6f1] transition duration-300 hover:-translate-y-1 hover:border-[#167d7a] hover:shadow-[0_18px_45px_rgba(13,27,42,0.08)]">
      <ImageFrame
        {...image}
        sizes="(max-width: 1023px) 100vw, 33vw"
        className="-m-px mb-0"
        imageClassName="transition-transform duration-300 group-hover:scale-[1.01]"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] tabular-nums text-[#98a2b3]">{number}</p>
        <h3 className="mt-7 text-2xl tracking-[-0.03em] text-[#17202a]">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-[#667085]">{summary}</p>
        <Link
          href={href}
          className="mt-8 inline-flex min-h-11 items-center justify-between border-t border-[#cbd2da] pt-4 text-sm font-semibold text-[#167d7a]"
        >
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
