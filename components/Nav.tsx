import Link from "next/link";
import { siteConfig } from "@/lib/content/site-config";

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="rounded-full border border-black/15 px-4 py-1.5 text-sm font-medium transition hover:border-black/40 dark:border-white/20 dark:hover:border-white/50"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
