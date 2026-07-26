import { Eyebrow } from "@/components/site/Eyebrow";

const stages = [
  [
    "Symptom",
    "Night Mode worked initially, but memory usage kept rising during 4K playback until performance degraded after roughly 20–30 minutes.",
  ],
  [
    "Diagnosis",
    "With no useful visible error, I monitored the process in Task Manager and compared behaviour as clips changed.",
  ],
  [
    "Cause",
    "Previously displayed video resources were not being released correctly as new content loaded.",
  ],
  [
    "Resolution",
    "I revised the playback lifecycle so obsolete resources could be released instead of accumulating in memory.",
  ],
  [
    "Lesson",
    "The issue reinforced the value of observing system behaviour, reasoning about resource lifecycles, and debugging beyond visible messages.",
  ],
];

export function TechnicalChallenge() {
  return (
    <section
      aria-labelledby="technical-challenge-heading"
      className="dark-focus bg-[#07111f] text-[#f5f1e8]"
    >
      <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <Eyebrow dark>Technical challenge</Eyebrow>
        <h2
          id="technical-challenge-heading"
          className="mt-5 max-w-3xl text-balance text-3xl leading-[1.12] sm:text-5xl"
        >
          Diagnosing a 4K video memory leak
        </h2>
        <dl className="mt-10 grid border-l border-t border-[#23364a] sm:grid-cols-2 lg:grid-cols-5">
          {stages.map(([term, detail]) => (
            <div
              key={term}
              className="border-b border-r border-[#23364a] p-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#49c6c2]">
                {term}
              </dt>
              <dd className="mt-4 text-xs leading-6 text-[#a7b0be]">
                {detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
