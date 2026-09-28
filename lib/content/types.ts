export interface StatChip {
  value: string;
  label: string;
  sublabel?: string;
}

export interface CaseStudyMedia {
  src: string;
  alt: string;
  caption: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  priority: 1 | 2 | 3;
  company: string;
  companyBlurb: string;
  roleTitle: string;
  dateRange: string;
  hook: string;
  heroStats: StatChip[];
  narrative: {
    problem: string;
    approach: string;
  };
  technicalCall: {
    title: string;
    body: string;
  };
  leadershipFraming: {
    team: string;
    scope: string;
    stakeholders: string;
  };
  outcomeStats: StatChip[];
  stack: string[];
  media?: CaseStudyMedia[];
  externalLinks?: ExternalLink[];
}

export interface OtherWorkItem {
  title: string;
  company: string;
  oneLiner: string;
  metric?: string;
}
