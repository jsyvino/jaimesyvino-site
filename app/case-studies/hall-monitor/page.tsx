import type { Metadata } from "next";
import { CaseStudyPageBody } from "@/components/CaseStudyPageBody";
import { caseStudies } from "@/lib/content/case-studies";

const caseStudy = caseStudies.find((cs) => cs.slug === "hall-monitor")!;

export const metadata: Metadata = {
  title: `${caseStudy.company} — ${caseStudy.hook}`,
  description: caseStudy.hook,
};

export default function Page() {
  return <CaseStudyPageBody caseStudy={caseStudy} />;
}
