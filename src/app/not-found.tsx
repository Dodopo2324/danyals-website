import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[var(--color-background)] px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-start">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          404
        </p>

        <h1 className="max-w-2xl font-serif text-5xl leading-tight text-[var(--color-foreground)] sm:text-6xl">
          This page could not be found.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
          The page may have moved, the address may be incorrect, or the
          content may no longer be available.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-[#07111F] transition-transform hover:-translate-y-0.5"
          >
            Return home
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)]"
          >
            Explore projects
          </Link>

          <Link
            href="/resume"
            className="px-2 py-3 font-medium text-[var(--color-foreground)] underline decoration-[var(--color-accent)] underline-offset-4"
          >
            View résumé
          </Link>
        </div>
      </div>
    </main>
  );
}