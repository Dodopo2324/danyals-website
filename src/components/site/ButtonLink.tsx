import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const variants = {
  primary:
    "border-[#49c6c2] bg-[#49c6c2] text-[#07111f] hover:border-[#6dd4d1] hover:bg-[#6dd4d1]",
  secondary:
    "border-[#cbd2da] text-[#17202a] hover:border-[#116b68] hover:bg-white",
  ghost:
    "border-[#23364a] text-[#f5f1e8] hover:border-[#49c6c2] hover:bg-[#0d1b2a]",
  dark: "border-[#17202a] bg-[#17202a] text-[#f5f1e8] hover:border-[#116b68] hover:bg-[#116b68]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-5 border px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      <span aria-hidden="true">{download ? "↓" : external ? "↗" : "→"}</span>
    </>
  );

  if (!external && !download && href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
    >
      {content}
    </a>
  );
}
