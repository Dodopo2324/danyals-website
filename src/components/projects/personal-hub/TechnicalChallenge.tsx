const lessons = [
  "Debugging beyond visible error messages",
  "Monitoring system behaviour",
  "Identifying a resource-lifecycle issue",
  "Applying computer-science fundamentals to a practical problem",
];

export function TechnicalChallenge() {
  return (
    <section
      aria-labelledby="technical-challenge-heading"
      className="bg-zinc-900 text-white"
    >
      <div className="mx-auto max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Technical challenge
            </p>
            <h2
              id="technical-challenge-heading"
              className="mt-5 max-w-md text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl"
            >
              Diagnosing a 4K video memory leak
            </h2>
          </div>

          <div>
            <div className="space-y-6 text-base leading-8 text-zinc-300">
              <p>
                Night Mode uses locally stored 4K city footage as a background.
                The feature initially appeared to work, but after approximately
                20 to 30 minutes, system memory usage continued rising until
                performance degraded and playback eventually failed.
              </p>
              <p>
                The issue did not produce a useful visible error. I diagnosed it
                by monitoring memory usage in Task Manager and observing that
                previously displayed video data was not being released
                correctly as new content loaded.
              </p>
              <p>
                The playback lifecycle was revised so old resources could be
                released rather than accumulating in memory.
              </p>
            </div>

            <ul className="mt-10 grid border-l border-t border-zinc-700 sm:grid-cols-2">
              {lessons.map((lesson, index) => (
                <li
                  key={lesson}
                  className="flex min-h-28 flex-col justify-between border-b border-r border-zinc-700 p-4 text-sm leading-6 text-zinc-300"
                >
                  <span className="font-mono text-[0.65rem] text-zinc-500">
                    0{index + 1}
                  </span>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
