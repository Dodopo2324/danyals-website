const links = [
  {
    label: "Email",
    value: "danyalshenoda1@gmail.com",
    href: "mailto:danyalshenoda1@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shenodad",
    href: "https://www.linkedin.com/in/shenodad/",
    external: true,
  },
  {
    label: "Download résumé",
    value: "PDF",
    href: "/resume.pdf",
    external: false,
    download: true,
  },
  {
    label: "Website",
    value: "danyals.ca",
    href: "https://danyals.ca",
    external: false,
  },
];

export function ContactPanel() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-zinc-900 text-white"
    >
      <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <h2
              id="contact-heading"
              className="text-balance text-4xl font-medium tracking-[-0.045em] text-white sm:text-6xl"
            >
              Connect
            </h2>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-zinc-300">
              I am interested in conversations about accounting, finance,
              valuation, transactions, financial technology, and
              entrepreneurship.
            </p>
          </div>
          <div className="border-y border-zinc-700">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download}
                className="group flex min-h-16 items-center justify-between gap-6 border-b border-zinc-700 text-sm text-zinc-300 transition-colors last:border-b-0 hover:text-white focus-visible:text-white"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {link.label}
                  </span>
                  <span className="mt-1 block">{link.value}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  {link.download ? "↓" : "→"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
