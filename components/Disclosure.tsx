export function Disclosure({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-black/10 p-5 dark:border-white/10">
      <summary className="cursor-pointer list-none text-sm font-medium text-black/70 marker:content-none dark:text-white/70">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">
          →
        </span>
        {summary}
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
        {children}
      </div>
    </details>
  );
}
