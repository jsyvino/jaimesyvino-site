import Link from "next/link";
import type { CaseStudy } from "@/lib/content/types";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-black/10 p-6 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-black/45 dark:text-white/45">
        {caseStudy.company}
      </p>
      <h3 className="text-lg font-semibold transition group-hover:underline">
        {caseStudy.hook}
      </h3>
      <p className="text-sm text-black/60 dark:text-white/60">
        {caseStudy.roleTitle} · {caseStudy.dateRange}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {caseStudy.heroStats.slice(0, 2).map((stat) => (
          <span
            key={stat.label}
            className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/10"
          >
            {stat.value} {stat.label}
          </span>
        ))}
      </div>
    </Link>
  );
}
