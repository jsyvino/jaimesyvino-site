import type { CaseStudy } from "@/lib/content/types";

export function LeadershipFraming({
  leadershipFraming,
}: {
  leadershipFraming: CaseStudy["leadershipFraming"];
}) {
  const rows: [string, string][] = [
    ["Team", leadershipFraming.team],
    ["Scope", leadershipFraming.scope],
    ["Stakeholders", leadershipFraming.stakeholders],
  ];

  return (
    <div className="rounded-xl border border-black/10 bg-black/[.02] p-6 dark:border-white/10 dark:bg-white/[.03]">
      <p className="text-xs font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
        As the person leading it
      </p>
      <dl className="mt-3 flex flex-col gap-2 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-black/60 dark:text-white/60">
              {label}
            </dt>
            <dd className="text-black/80 dark:text-white/80">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
