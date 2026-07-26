import type { ReactNode } from "react";

export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-[#a7b0be]" : "text-[#667085]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
