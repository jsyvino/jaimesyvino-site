import type { LeadershipPrinciple } from "@/lib/content/leadership-principles";

export function LeadershipPrinciples({ principles }: { principles: LeadershipPrinciple[] }) {
  return (
    <dl className="flex flex-col divide-y divide-black/5 dark:divide-white/10">
      {principles.map((principle) => (
        <div key={principle.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
          <dt className="w-full shrink-0 font-medium sm:w-56">{principle.title}</dt>
          <dd className="text-sm text-black/65 dark:text-white/65">{principle.description}</dd>
        </div>
      ))}
    </dl>
  );
}
