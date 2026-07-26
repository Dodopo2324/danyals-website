import Link from "next/link";

export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  return (
    <nav
      aria-label="Project navigation"
      className="grid border-y border-[#cbd2da] sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={previous.href}
          className="group min-h-28 border-b border-[#cbd2da] p-5 transition-colors hover:bg-white sm:border-b-0 sm:border-r"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.16em] text-[#667085]">
            Previous project
          </span>
          <span className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#17202a]">
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            {previous.label}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group min-h-28 p-5 text-right transition-colors hover:bg-white"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.16em] text-[#667085]">
            Next project
          </span>
          <span className="mt-4 flex items-center justify-end gap-3 text-sm font-semibold text-[#17202a]">
            {next.label}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
