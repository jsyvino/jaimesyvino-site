"use client";

import { useState } from "react";
import type { Quote } from "@/lib/content/quotes";

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + quotes.length) % quotes.length);
  const current = quotes[index];

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <div
        key={index}
        className="flex min-h-[34rem] w-full flex-col items-center justify-center gap-3 sm:min-h-[17rem]"
        style={{ animation: "fadein 0.4s ease-out" }}
      >
        <blockquote className="text-lg leading-relaxed italic text-black/80 dark:text-white/80">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <p className="text-sm text-black/45 dark:text-white/45">- {current.role}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous quote"
          onClick={() => goTo(index - 1)}
          className="shrink-0 rounded-full p-2 text-black/40 transition hover:text-black dark:text-white/40 dark:hover:text-white"
        >
          ←
        </button>
        <div className="flex gap-1.5">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show quote ${i + 1} of ${quotes.length}`}
              onClick={() => goTo(i)}
              className={`h-1.5 w-1.5 rounded-full transition ${
                i === index ? "bg-black/60 dark:bg-white/60" : "bg-black/15 dark:bg-white/15"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next quote"
          onClick={() => goTo(index + 1)}
          className="shrink-0 rounded-full p-2 text-black/40 transition hover:text-black dark:text-white/40 dark:hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
