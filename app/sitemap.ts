import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content/case-studies";

const BASE_URL = "https://jaimesyvino.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resume`, changeFrequency: "monthly", priority: 0.7 },
    ...caseStudies.map((cs) => ({
      url: `${BASE_URL}/case-studies/${cs.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
