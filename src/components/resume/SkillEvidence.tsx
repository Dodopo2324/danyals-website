export function SkillEvidence({
  title,
  skills,
  evidence,
}: {
  title: string;
  skills: string[];
  evidence: string;
}) {
  return (
    <article className="border-t border-[#cbd2da] pt-5">
      <h3 className="text-xl text-[#17202a]">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border border-[#cbd2da] bg-[#f8f6f1] px-3 py-2 text-xs text-[#344054]"
          >
            {skill}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm leading-6 text-[#667085]">{evidence}</p>
    </article>
  );
}
