type Skill = {
  name: string;
  evidence: string;
};

type SkillEvidenceProps = {
  number: string;
  title: string;
  skills: Skill[];
};

export function SkillEvidence({
  number,
  title,
  skills,
}: SkillEvidenceProps) {
  return (
    <section aria-labelledby={`skills-${number}`}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[0.68rem] text-zinc-400">{number}</span>
        <h3
          id={`skills-${number}`}
          className="text-xl font-medium tracking-[-0.025em] text-zinc-950"
        >
          {title}
        </h3>
      </div>
      <dl className="mt-6 border-y border-zinc-300">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="grid gap-2 border-b border-zinc-300 py-5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
          >
            <dt className="text-sm font-semibold text-zinc-800">{skill.name}</dt>
            <dd className="text-sm leading-6 text-zinc-600">
              {skill.evidence}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
