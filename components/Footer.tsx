import Link from "next/link";
import { siteConfig } from "@/lib/content/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 text-center">
        <p className="text-sm text-black/60 dark:text-white/60">
          Let&apos;s talk. I&apos;m open to both leadership and senior/staff IC roles.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            className="underline-offset-4 hover:underline"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <Link className="underline-offset-4 hover:underline" href="/resume">
            Resume
          </Link>
        </div>
        <p className="max-w-md text-xs text-black/35 dark:text-white/35">
          Most of my production work lives in private company repos. The case studies above are the real proof of work.
        </p>
      </div>
    </footer>
  );
}
