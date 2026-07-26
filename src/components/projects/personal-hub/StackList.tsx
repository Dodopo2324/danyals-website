const groups = [
  {
    title: "Application",
    items: ["Flask backend", "HTML, CSS & JavaScript", "Modular utilities"],
  },
  {
    title: "Data and access",
    items: ["Local files & JSON", "Flask sessions", "Permissions"],
  },
  {
    title: "Operations",
    items: ["Windows self-hosting", "Audit records", "Administration"],
  },
];

export function StackList() {
  return (
    <section aria-labelledby="technology-heading">
      <div className="grid gap-8 border-t border-[#cbd2da] pt-5 lg:grid-cols-[0.72fr_1.65fr] lg:gap-14">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#667085]">
            Architecture
          </p>
          <h2
            id="technology-heading"
            className="mt-4 text-3xl text-[#17202a]"
          >
            A concise system view
          </h2>
        </div>
        <div className="grid border-l border-t border-[#cbd2da] sm:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="border-b border-r border-[#cbd2da] p-5"
            >
              <h3 className="text-lg text-[#17202a]">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-xs leading-5 text-[#667085]"
                  >
                    <span className="mt-2 size-1 shrink-0 bg-[#167d7a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs leading-6 text-[#667085] lg:ml-[calc(30%+2rem)]">
        The system remains privately hosted on a Windows PC. Custom-domain
        access is planned or in progress, and the live environment is not hosted
        on this portfolio.
      </p>
    </section>
  );
}
