import Image from "next/image";
import Link from "next/link";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { TechnicalCallCallout } from "@/components/TechnicalCallCallout";
import { LeadershipFraming } from "@/components/LeadershipFraming";
import { StatChipRow } from "@/components/StatChip";
import { siteConfig } from "@/lib/content/site-config";
import type { CaseStudy } from "@/lib/content/types";

export function CaseStudyPageBody({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-black/50 underline-offset-4 hover:underline dark:text-white/50"
      >
        ← Back home
      </Link>

      <div className="mt-8">
        <CaseStudyHero caseStudy={caseStudy} />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <p className="text-base leading-relaxed text-black/80 dark:text-white/80">
          {caseStudy.narrative.problem}
        </p>
        <p className="text-base leading-relaxed text-black/80 dark:text-white/80">
          {caseStudy.narrative.approach}
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <TechnicalCallCallout technicalCall={caseStudy.technicalCall} />
        <LeadershipFraming leadershipFraming={caseStudy.leadershipFraming} />
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-black/45 dark:text-white/45">
          Outcome
        </p>
        <div className="mt-3">
          <StatChipRow stats={caseStudy.outcomeStats} />
        </div>
      </div>

      {caseStudy.media?.length ? (
        <div className="mt-10 flex flex-col gap-4">
          {caseStudy.media.map((item) => (
            <figure key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                className="w-full rounded-xl border border-black/10 dark:border-white/10"
              />
              <figcaption className="mt-2 text-xs text-black/45 dark:text-white/45">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {caseStudy.externalLinks?.length ? (
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {caseStudy.externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-2">
        {caseStudy.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-black/5 pt-8 text-sm dark:border-white/10">
        <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
          Download resume
        </a>
        <a href={`mailto:${siteConfig.email}`} className="underline-offset-4 hover:underline">
          Get in touch
        </a>
        <Link href="/" className="underline-offset-4 hover:underline">
          See other case studies
        </Link>
      </div>
    </div>
  );
}
