import { StatChipRow } from "@/components/StatChip";
import type { CaseStudy } from "@/lib/content/types";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium text-black/50 dark:text-white/50">
          {caseStudy.company} · {caseStudy.companyBlurb}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {caseStudy.hook}
        </h1>
        <p className="mt-3 text-sm text-black/60 dark:text-white/60">
          {caseStudy.roleTitle} · {caseStudy.dateRange}
        </p>
      </div>
      <StatChipRow stats={caseStudy.heroStats} />
    </div>
  );
}
