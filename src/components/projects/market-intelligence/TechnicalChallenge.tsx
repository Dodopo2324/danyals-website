const providerDifferences = [
  "Authentication requirements",
  "Identifier systems",
  "Response formats",
  "Date conventions",
  "Units",
  "Refresh schedules",
  "Rate limits",
  "Error conditions",
  "Entitlement rules",
];

export function TechnicalChallenge() {
  return (
    <section
      aria-labelledby="technical-challenge-heading"
      className="bg-zinc-900 text-white"
    >
      <div className="mx-auto grid max-w-[82rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-8 lg:px-12">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Technical challenge
          </p>
          <h2
            id="technical-challenge-heading"
            className="mt-5 max-w-lg text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
          >
            Normalizing different data providers
          </h2>
        </div>
        <div>
          <p className="max-w-3xl text-base leading-8 text-zinc-300">
            The main challenge was not simply calling individual APIs. The
            system needed a consistent way to represent source health, request
            outcomes, timestamps, attribution, and research records without
            hiding meaningful differences among providers.
          </p>
          <ul className="mt-9 flex flex-wrap gap-2">
            {providerDifferences.map((difference) => (
              <li
                key={difference}
                className="border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
              >
                {difference}
              </li>
            ))}
          </ul>
          <p className="mt-9 border-l border-zinc-600 pl-5 text-sm leading-7 text-zinc-400">
            FactSet demonstrates why the states remain separate: a provider can
            be configured while the requested endpoint is still unavailable to
            the current account or allowed IP range. The interface therefore
            reports configuration, connection state, request status, and the
            current issue independently.
          </p>
        </div>
      </div>
    </section>
  );
}
