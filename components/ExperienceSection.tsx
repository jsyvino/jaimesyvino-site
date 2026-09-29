import { Disclosure } from "@/components/Disclosure";
import type { ExperienceSection as ExperienceSectionType } from "@/lib/content/experience";

export function ExperienceSection({ section }: { section: ExperienceSectionType }) {
  return (
    <Disclosure
      defaultOpen={section.defaultOpen}
      summary={<span className="text-base font-semibold text-black dark:text-white">{section.heading}</span>}
    >
      <div className="flex flex-col gap-8">
        {section.roles.map((role) => (
          <div key={`${role.title}-${role.dateRange}`}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <p className="font-medium text-black dark:text-white">
                {role.title}
                {role.company ? <span className="font-normal text-black/60 dark:text-white/60"> · {role.company}</span> : null}
              </p>
              <p className="shrink-0 text-xs text-black/45 dark:text-white/45">{role.dateRange}</p>
            </div>
            {role.location ? (
              <p className="mt-0.5 text-xs text-black/45 dark:text-white/45">{role.location}</p>
            ) : null}
            {role.subtitle ? (
              <p className="mt-0.5 text-xs italic text-black/45 dark:text-white/45">{role.subtitle}</p>
            ) : null}
            {role.stack ? (
              <p className="mt-1 text-xs text-black/45 dark:text-white/45">Stack: {role.stack}</p>
            ) : null}
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Disclosure>
  );
}
