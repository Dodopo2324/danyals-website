export function AccessNotice() {
  return (
    <section
      aria-labelledby="access-notice-heading"
      className="border border-zinc-300 bg-[#e9e8e4] p-6 sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Access
          </p>
          <h2
            id="access-notice-heading"
            className="mt-4 max-w-3xl text-balance text-2xl font-medium leading-[1.2] tracking-[-0.035em] text-zinc-950 sm:text-3xl"
          >
            Personal Hub is privately hosted and contains personal files,
            administrative functions, and non-public workflows. Public access
            is not currently available.
          </h2>
        </div>
        <dl className="divide-y divide-zinc-300 border-y border-zinc-300">
          <div className="py-4">
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Development status
            </dt>
            <dd className="mt-2 text-sm font-semibold text-zinc-900">Active</dd>
          </div>
          <div className="py-4">
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Primary user
            </dt>
            <dd className="mt-2 text-sm leading-6 text-zinc-800">
              Personal use, with limited family and friend workflows
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
