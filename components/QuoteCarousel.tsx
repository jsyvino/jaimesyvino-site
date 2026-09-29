"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/lib/content/quotes";

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [quotes.length]);

  const current = quotes[index];

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <div key={index} className="flex flex-col items-center gap-3" style={{ animation: "fadein 0.4s ease-out" }}>
        <blockquote className="text-lg leading-relaxed text-black/80 dark:text-white/80">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <p className="text-sm text-black/45 dark:text-white/45">- {current.role}</p>
      </div>
      <div className="flex gap-1.5">
        {quotes.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show quote ${i + 1} of ${quotes.length}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              i === index ? "bg-black/60 dark:bg-white/60" : "bg-black/15 dark:bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
