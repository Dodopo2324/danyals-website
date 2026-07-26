export function AccessNotice() {
  return (
    <section
      aria-labelledby="access-notice-heading"
      className="border border-[#cbd2da] bg-[#f0ece4] p-6 sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#667085]">
            Access
          </p>
          <h2
            id="access-notice-heading"
            className="mt-4 max-w-3xl text-balance text-2xl leading-[1.2] tracking-[-0.03em] text-[#17202a] sm:text-3xl"
          >
            Personal Hub is privately hosted and contains personal files,
            administrative functions, and non-public workflows. Public access
            is not currently available.
          </h2>
        </div>
        <dl className="divide-y divide-[#cbd2da] border-y border-[#cbd2da]">
          <div className="py-4">
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#667085]">
              Development status
            </dt>
            <dd className="mt-2 text-sm font-semibold text-[#167d7a]">Active</dd>
          </div>
          <div className="py-4">
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#667085]">
              Primary user
            </dt>
            <dd className="mt-2 text-sm leading-6 text-[#344054]">
              Personal use, with limited family and friend workflows
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
