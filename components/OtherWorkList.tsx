import type { OtherWorkItem } from "@/lib/content/types";

export function OtherWorkList({ items }: { items: OtherWorkItem[] }) {
  return (
    <ul className="flex flex-col divide-y divide-black/5 dark:divide-white/10">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
          <div className="w-full shrink-0 sm:w-56">
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-black/45 dark:text-white/45">{item.company}</p>
          </div>
          <p className="text-sm text-black/65 dark:text-white/65">{item.oneLiner}</p>
        </li>
      ))}
    </ul>
  );
}
