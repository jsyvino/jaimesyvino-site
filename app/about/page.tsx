import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { SkillsStrip } from "@/components/SkillsStrip";
import { originStory } from "@/lib/content/origin-story";
import { siteConfig } from "@/lib/content/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.currentRole.blurb,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-black/80 dark:text-white/80">
        <p>{siteConfig.currentRole.blurb}</p>
        <p>
          Across MagicSchool AI, HowGood, and KnowledgeHound, the pattern has stayed the same: find the
          highest-leverage problem, build the smallest thing that actually solves it, measure whether it
          worked, and bring the team along the whole way. I care about being decisive without being
          territorial — a squad works best when the right call gets made quickly and everyone understands why.
        </p>
        <p>
          I&apos;m equally at home leading a team&apos;s roadmap and hiring, and being the person who opens
          Datadog to find out why a page is slow. The case studies on the home page show both sides of that on
          purpose.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16">
        <SkillsStrip title="Technical" skills={siteConfig.skills.technical} />
        <SkillsStrip title="Leadership" skills={siteConfig.skills.leadership} />
      </div>

      <div className="mt-10">
        <Disclosure summary={originStory.teaser}>
          <p>{originStory.paragraph}</p>
        </Disclosure>
      </div>
    </div>
  );
}
