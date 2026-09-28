import Image from "next/image";
import type { FunFact } from "@/lib/content/fun-facts";

export function FunFacts({ facts }: { facts: FunFact[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {facts.map((fact) => (
        <figure
          key={fact.text}
          className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
        >
          <Image
            src={fact.image.src}
            alt={fact.image.alt}
            width={400}
            height={300}
            unoptimized={fact.image.src.endsWith(".gif")}
            className="h-40 w-full object-cover"
          />
          <figcaption className="p-3 text-sm text-black/70 dark:text-white/70">{fact.text}</figcaption>
        </figure>
      ))}
    </div>
  );
}
