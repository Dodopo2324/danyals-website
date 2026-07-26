type CredentialCardProps = {
  number: string;
  title: string;
  details?: string[];
};

export function CredentialCard({
  number,
  title,
  details,
}: CredentialCardProps) {
  return (
    <article className="border border-zinc-300 p-6">
      <p className="font-mono text-[0.68rem] text-zinc-400">{number}</p>
      <h3 className="mt-8 text-xl font-medium tracking-[-0.025em] text-zinc-950">
        {title}
      </h3>
      {details ? (
        <ul className="mt-5 space-y-2 border-t border-zinc-300 pt-5">
          {details.map((detail) => (
            <li
              key={detail}
              className="flex gap-3 text-xs leading-5 text-zinc-600"
            >
              <span className="mt-[0.55rem] size-1 shrink-0 bg-zinc-400" />
              {detail}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
