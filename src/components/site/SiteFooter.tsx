import Link from "next/link";

const projectLinks = [
  ["Personal Hub", "/projects/personal-hub"],
  ["Market Intelligence", "/projects/market-intelligence"],
  ["Chipotle Valuation", "/projects/chipotle-valuation"],
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-focus border-t border-[#23364a] bg-[#07111f] text-[#a7b0be]">
      <div className="mx-auto max-w-[82rem] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.24em] text-[#f5f1e8]"
            >
              DANYALS
            </Link>
            <p className="mt-3 text-sm text-[#d8dde5]">Danyal Shenoda</p>
            <p className="mt-4 max-w-sm text-xs leading-6">
              Accounting, finance, technology, and the work connecting them.
            </p>
          </div>
          <nav aria-label="Contact links">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#718096]">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:danyalshenoda1@gmail.com"
                  className="hover:text-[#49c6c2]"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shenodad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#49c6c2]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#49c6c2]">
                  Résumé
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Project links">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#718096]">
              Selected projects
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {projectLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#49c6c2]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#23364a] pt-6 text-[0.68rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Danyal Shenoda</p>
          <p>Designed and built for danyals.ca</p>
        </div>
      </div>
    </footer>
  );
}
