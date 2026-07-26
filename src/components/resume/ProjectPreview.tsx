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
    <article className="group flex h-full flex-col border border-zinc-300 bg-[#f7f6f2]">
      <ImageFrame
        {...image}
        sizes="(max-width: 1023px) 100vw, 33vw"
        className="-m-px mb-0"
        imageClassName="transition-transform duration-300 group-hover:scale-[1.01]"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.68rem] text-zinc-400">{number}</p>
        <h3 className="mt-7 text-2xl font-medium tracking-[-0.03em] text-zinc-950">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600">{summary}</p>
        <Link
          href={href}
          className="mt-8 inline-flex min-h-11 items-center justify-between border-t border-zinc-300 pt-4 text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950"
        >
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
