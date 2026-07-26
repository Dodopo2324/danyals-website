interface MetricCardProps {
  label: string;
  value: string;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="border-l border-zinc-300 pl-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 font-mono text-2xl font-medium tabular-nums tracking-[-0.03em] text-zinc-950">
        {value.trim()}
      </p>
      <p className="mt-2 text-[0.65rem] text-zinc-400">
        Displayed workbook output
      </p>
    </article>
  );
}
