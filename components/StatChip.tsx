import type { StatChip as StatChipType } from "@/lib/content/types";

export function StatChip({ value, label, sublabel }: StatChipType) {
  return (
    <div className="flex min-w-[9rem] flex-col gap-0.5 rounded-lg border border-black/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
      <span className="font-mono text-2xl font-semibold tabular-nums tracking-tight text-black dark:text-white">
        {value}
      </span>
      <span className="text-xs text-black/60 dark:text-white/60">{label}</span>
      {sublabel ? (
        <span className="text-xs text-black/40 dark:text-white/40">{sublabel}</span>
      ) : null}
    </div>
  );
}

export function StatChipRow({ stats }: { stats: StatChipType[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {stats.map((stat) => (
        <StatChip key={`${stat.label}-${stat.value}`} {...stat} />
      ))}
    </div>
  );
}
