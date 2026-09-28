export function SkillsStrip({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-black/45 dark:text-white/45">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70 dark:border-white/15 dark:text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
