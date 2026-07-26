interface MetricCardProps {
  label: string;
  value: string;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="border-l border-[#cbd2da] pl-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#667085]">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold tabular-nums tracking-[-0.03em] text-[#167d7a]">
        {value.trim()}
      </p>
      <p className="mt-2 text-[0.65rem] text-[#98a2b3]">
        Displayed workbook output
      </p>
    </article>
  );
}
