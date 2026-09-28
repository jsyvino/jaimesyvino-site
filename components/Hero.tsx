import Image from "next/image";
import { siteConfig } from "@/lib/content/site-config";
import { StatChipRow } from "@/components/StatChip";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 text-center sm:py-24">
      <Image
        src="/images/headshot.jpg"
        alt={`${siteConfig.name} holding a lamb outdoors`}
        width={630}
        height={840}
        priority
        className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
      />
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-3 text-lg text-black/60 dark:text-white/60">
          {siteConfig.subLine}
        </p>
        <p className="mt-1 text-sm text-black/45 dark:text-white/45">
          {siteConfig.currentRole.title}, {siteConfig.currentRole.company} · {siteConfig.location} ({siteConfig.pronouns})
        </p>
      </div>
      <StatChipRow stats={siteConfig.careerStats} />
    </section>
  );
}
