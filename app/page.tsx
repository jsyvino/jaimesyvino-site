import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { SkillsStrip } from "@/components/SkillsStrip";
import { caseStudies } from "@/lib/content/case-studies";
import { quotes } from "@/lib/content/quotes";
import { siteConfig } from "@/lib/content/site-config";

export default function Home() {
  const sortedCaseStudies = [...caseStudies].sort((a, b) => a.priority - b.priority);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <Hero />

      <section className="py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/45 dark:text-white/45">
          Highlighted Work
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {sortedCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <QuoteCarousel quotes={quotes} />
      </section>

      <section className="flex flex-col gap-8 py-12 sm:flex-row sm:gap-16">
        <SkillsStrip title="Technical" skills={siteConfig.skills.technical} />
        <SkillsStrip title="Leadership" skills={siteConfig.skills.leadership} />
      </section>
    </div>
  );
}
