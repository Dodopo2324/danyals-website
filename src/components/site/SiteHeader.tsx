import Link from "next/link";

type ActivePage = "home" | "resume" | "projects";

const navigation = [
  { label: "About", href: "/#about", active: "home" },
  { label: "Experience", href: "/#experience", active: "home" },
  { label: "Projects", href: "/#projects", active: "projects" },
  { label: "Résumé", href: "/resume", active: "resume" },
  { label: "Contact", href: "/#contact", active: "home" },
] satisfies Array<{ label: string; href: string; active: ActivePage }>;

export function SiteHeader({
  theme = "light",
  active,
}: {
  theme?: "light" | "dark";
  active?: ActivePage;
}) {
  const dark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        dark
          ? "dark-focus border-[#23364a]/90 bg-[#07111f]/92 text-[#f5f1e8]"
          : "border-[#cbd2da]/80 bg-[#f8f6f1]/92 text-[#17202a]"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`grid size-8 place-items-center border text-[0.62rem] font-bold tracking-[-0.05em] transition-colors ${
              dark
                ? "border-[#3a5067] text-[#49c6c2] group-hover:border-[#49c6c2]"
                : "border-[#475467] text-[#116b68] group-hover:border-[#116b68]"
            }`}
          >
            DS
          </span>
          <span>
            <span className="block text-sm font-bold tracking-[0.23em]">
              DANYALS
            </span>
            <span
              className={`mt-0.5 hidden text-[0.58rem] tracking-[0.12em] sm:block ${
                dark ? "text-[#a7b0be]" : "text-[#475467]"
              }`}
            >
              BY DANYAL SHENODA
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => {
              const isActive =
                active === item.active &&
                (item.active !== "home" || item.label === "About");
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex min-h-11 items-center text-xs font-medium transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#49c6c2] after:transition-transform hover:after:scale-x-100 ${
                      isActive
                        ? dark
                          ? "text-[#49c6c2] after:scale-x-100"
                          : "text-[#116b68] after:scale-x-100"
                        : dark
                          ? "text-[#a7b0be] hover:text-[#f5f1e8]"
                          : "text-[#475467] hover:text-[#17202a]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            Menu
            <span className="transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className={`absolute right-0 top-[3.7rem] w-64 border p-2 shadow-2xl ${
              dark
                ? "border-[#23364a] bg-[#0d1b2a]"
                : "border-[#cbd2da] bg-[#f8f6f1]"
            }`}
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex min-h-12 items-center justify-between border-b px-3 text-sm last:border-b-0 ${
                      dark
                        ? "border-[#23364a] text-[#d8dde5] hover:bg-[#172b3f]"
                        : "border-[#e1e4e8] text-[#344054] hover:bg-white"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
