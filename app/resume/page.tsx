import type { Metadata } from "next";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { experience } from "@/lib/content/experience";
import { siteConfig } from "@/lib/content/site-config";

export const metadata: Metadata = {
  title: `Résumé | ${siteConfig.name}`,
  description: "Full work history, role by role.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Résumé</h1>
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline-offset-4 hover:underline"
        >
          Download the one-page PDF ↓
        </a>
      </div>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
        The full role-by-role history behind the case studies. Each section is collapsible, so expand the
        ones you care about.
      </p>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16">
        <SkillsStrip title="Technical" skills={siteConfig.skills.technical} />
        <SkillsStrip title="Leadership" skills={siteConfig.skills.leadership} />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {experience.map((section) => (
          <ExperienceSection key={section.slug} section={section} />
        ))}
      </div>
    </div>
  );
}
