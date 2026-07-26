import { Eyebrow } from "@/components/site/Eyebrow";

const differences = [
  "Authentication",
  "Identifiers",
  "Response formats",
  "Date conventions",
  "Units",
  "Refresh schedules",
  "Rate limits",
  "Entitlements",
];

export function TechnicalChallenge() {
  return (
    <section
      aria-labelledby="technical-challenge-heading"
      className="dark-focus bg-[#07111f] text-[#f5f1e8]"
    >
      <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.65fr] lg:gap-14 lg:px-12">
        <div>
          <Eyebrow dark>Technical challenge</Eyebrow>
          <h2
            id="technical-challenge-heading"
            className="mt-5 max-w-lg text-balance text-3xl leading-[1.12] sm:text-5xl"
          >
            Normalizing different data providers
          </h2>
        </div>
        <div>
          <p className="max-w-3xl text-base leading-8 text-[#d8dde5]">
            The challenge was not only calling APIs, but representing source
            health, request outcomes, timestamps, attribution, and research
            records consistently without hiding important provider differences.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {differences.map((difference) => (
              <li
                key={difference}
                className="border border-[#23364a] px-3 py-2 text-xs text-[#a7b0be]"
              >
                {difference}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l border-[#49c6c2] pl-5 text-sm leading-7 text-[#a7b0be]">
            FactSet illustrates the distinction: a provider can be configured
            while an endpoint remains unavailable to the current entitlement or
            allowed IP range. Configuration, connection, request status, and
            current issues are therefore reported separately.
          </p>
        </div>
      </div>
    </section>
  );
}
