import { BrandMark } from "@/components/site/BrandMark";

export function CredentialCard({
  title,
  detail,
  items,
}: {
  title: string;
  detail: string;
  items?: string[];
}) {
  return (
    <article className="border border-[#cbd2da] bg-[#f8f6f1] p-5">
      <BrandMark name={title} detail={detail} />
      {items ? (
        <details className="disclosure mt-5 border-t border-[#cbd2da]">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between text-xs font-semibold text-[#344054]">
            View completed modules
            <span className="disclosure-icon text-lg text-[#167d7a] transition-transform">
              +
            </span>
          </summary>
          <ul className="space-y-2 border-t border-[#cbd2da] py-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-xs leading-5 text-[#667085]"
              >
                <span className="mt-2 size-1 shrink-0 bg-[#167d7a]" />
                {item}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </article>
  );
}
