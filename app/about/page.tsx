import type { Metadata } from "next";
import Image from "next/image";
import { Disclosure } from "@/components/Disclosure";
import { FunFacts } from "@/components/FunFacts";
import { LeadershipPrinciples } from "@/components/LeadershipPrinciples";
import { originStory } from "@/lib/content/origin-story";
import { funFacts } from "@/lib/content/fun-facts";
import { leadershipPrinciples } from "@/lib/content/leadership-principles";
import { siteConfig } from "@/lib/content/site-config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: siteConfig.summary.blurb,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-black/80 dark:text-white/80">
        <p>{siteConfig.summary.blurb}</p>
        <p>
          I&apos;m an engineering leader passionate about finding clean, simple solutions to complex problems. I’ve 
          spent the last several years building and scaling product engineering teams across AI-native edtech, 
          sustainability data, and enterprise SaaS.
        </p>
        <p>
          I’m a strong believer in finding the highest-leverage problem, building the simplest thing that solves 
          it, and measuring whether it actually made a difference. I care deeply about the customer and get 
          excited about making products—and people’s lives—meaningfully easier. I’m equally comfortable setting 
          a team’s direction and roadmap as I am opening Datadog to figure out why something is slow and shipping the fix.
        </p>
        <p>
          As a leader, I focus on building high-trust teams where people are willing to teach and learn from each other, 
          raise problems early, and hold one another accountable. I aim to be decisive without being territorial, 
          create clarity in ambiguity, and build a culture where people can do their best work while continuing to grow.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/45 dark:text-white/45">
          How I lead
        </h2>
        <div className="mt-4">
          <LeadershipPrinciples principles={leadershipPrinciples} />
        </div>
      </div>

      <div className="mt-10">
        <Disclosure summary={originStory.teaser}>
          <div className="flex flex-col gap-4">
            <p>{originStory.paragraph}</p>
            <blockquote className="border-l-2 border-black/20 pl-4 italic text-black/70 dark:border-white/20 dark:text-white/70">
              &ldquo;{originStory.quote}&rdquo;
              <span className="mt-1 block text-sm not-italic text-black/50 dark:text-white/50">
                - {originStory.quoteAttribution}
              </span>
            </blockquote>
            <p>{originStory.closingLine}</p>
            <figure>
              <Image
                src={originStory.image.src}
                alt={originStory.image.alt}
                width={1435}
                height={965}
                className="w-full rounded-xl border border-black/10 dark:border-white/10"
              />
              <figcaption className="mt-2 text-xs text-black/45 dark:text-white/45">
                {originStory.image.caption}
              </figcaption>
            </figure>
            <ul className="flex flex-col gap-1 text-sm">
              {originStory.externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Disclosure>
      </div>

      <div className="mt-4">
        <Disclosure summary="A few fun facts">
          <FunFacts facts={funFacts} />
        </Disclosure>
      </div>
    </div>
  );
}
