import type { CaseStudy } from "@/lib/content/types";

export function TechnicalCallCallout({
  technicalCall,
}: {
  technicalCall: CaseStudy["technicalCall"];
}) {
  return (
    <div className="rounded-xl border border-amber-900/15 bg-amber-50 p-6 dark:border-amber-200/15 dark:bg-amber-500/5">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800/70 dark:text-amber-200/70">
        The technical call I made
      </p>
      <h3 className="mt-2 text-lg font-semibold">{technicalCall.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
        {technicalCall.body}
      </p>
    </div>
  );
}
