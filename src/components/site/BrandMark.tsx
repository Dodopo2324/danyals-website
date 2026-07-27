export function BrandMark({
  name,
  detail,
  dark = false,
}: {
  name: string;
  detail?: string;
  dark?: boolean;
}) {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden="true"
        className={`grid size-9 shrink-0 place-items-center border text-[0.6rem] font-bold tracking-[0.08em] ${
          dark
            ? "border-[#3a5067] text-[#49c6c2]"
            : "border-[#cbd2da] text-[#116b68]"
        }`}
      >
        {initials}
      </span>
      <span className="min-w-0">
        <span
          className={`block truncate text-sm font-semibold ${
            dark ? "text-[#f5f1e8]" : "text-[#17202a]"
          }`}
        >
          {name}
        </span>
        {detail ? (
          <span
            className={`mt-0.5 block text-[0.68rem] ${
              dark ? "text-[#a7b0be]" : "text-[#475467]"
            }`}
          >
            {detail}
          </span>
        ) : null}
      </span>
    </div>
  );
}
