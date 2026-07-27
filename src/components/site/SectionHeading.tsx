import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
  dark?: boolean;
}) {
  return (
    <header
      className={`grid gap-6 border-t pt-5 lg:grid-cols-[0.72fr_1.65fr] lg:gap-14 ${
        dark ? "border-[#23364a]" : "border-[#cbd2da]"
      }`}
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <div>
        <h2
          id={id}
          className={`max-w-4xl text-balance text-3xl leading-[1.12] tracking-[-0.035em] sm:text-5xl ${
            dark ? "text-[#f5f1e8]" : "text-[#17202a]"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-5 max-w-3xl text-sm leading-7 sm:text-base ${
              dark ? "text-[#a7b0be]" : "text-[#475467]"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
