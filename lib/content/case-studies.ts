import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "magicschool-growth-engine",
    priority: 1,
    company: "MagicSchool AI",
    companyBlurb: "AI-native edtech platform, 7M+ educators",
    roleTitle: "Tech Lead, Staff Software Engineer — Growth",
    dateRange: "2025",
    hook: "Built the admin-outreach engine that turned raw teacher usage data into MagicSchool's first product-led pipeline.",
    heroStats: [
      { value: "50%", label: "landing page conversion", sublabel: "vs. a 10% goal" },
      { value: "$112K", label: "in first product-led pipeline" },
      { value: "23%", label: "CTR on the recommendations engine", sublabel: "7M+ educators" },
    ],
    narrative: {
      problem:
        "Thousands of schools were using MagicSchool without a contract, but nobody had a systematic way to find the ones actually ready to buy, or to reach them with something more useful than a cold sales email. Separately, our tool-recommendation surface was a flat, unranked list of 4 suggestions, doing nothing to help teachers discover the tools most relevant to their subject.",
      approach:
        "I led a small squad — a PM, three engineers, and a data scientist — to build a product-qualified-lead (PQL) engine end to end. We defined PQL criteria (three or more active teachers, a minimum generation threshold, no existing contract), built the data pipeline and weekly refresh job that scored schools against it, and shipped an admin-outreach landing page that surfaced a school's own aggregated usage data and testimonials back to them. On the recommendations side, I led the team that replaced the static 4-suggestion list with a subject-ranked set of 9 tools, personalized per teacher.",
    },
    technicalCall: {
      title: "Validating the pipeline before trusting it",
      body: "A lead-scoring pipeline is only as good as its data quality, and bad matches burn trust with sales and with schools fast. I built an LLM-based validation step into the pipeline that sanity-checked scored leads before they ever reached an outreach email, and set up monitoring so we'd catch drift in the underlying usage data early. That let us re-surface non-responders on a 2-week cycle with confidence instead of guesswork.",
    },
    leadershipFraming: {
      team: "1 PM, 3 engineers, 1 data scientist",
      scope: "New lead-scoring pipeline, outreach surface, and a parallel recommendations-engine rebuild",
      stakeholders: "Sales, marketing, and the core Growth pod at MagicSchool AI",
    },
    outcomeStats: [
      { value: "50%", label: "landing page conversion", sublabel: "10% was the goal" },
      { value: "50%", label: "of email click-throughs", sublabel: "requested a demo or created an account" },
      { value: "$112K", label: "first product-led pipeline generated" },
      { value: "78%", label: "click-to-use conversion", sublabel: "on the new recommendations engine" },
    ],
    stack: ["Python", "LLM Integration", "PostgreSQL", "Amplitude", "React", "Next.js"],
  },
  {
    slug: "howgood-frontend-platform",
    priority: 2,
    company: "HowGood",
    companyBlurb: "Sustainability data platform",
    roleTitle: "Engineering Manager (hands-on) / Senior Frontend Engineer",
    dateRange: "Jul 2022 – Sep 2024",
    hook: "Rebuilt HowGood's frontend foundations, then chased a 30–50 second page load down to under 10.",
    heroStats: [
      { value: "25%", label: "LCP reduction" },
      { value: "40%", label: "bundle size reduction" },
      { value: "30–50s → <10s", label: "procurement page load time" },
    ],
    narrative: {
      problem:
        "HowGood's procurement reporting page was pulling thousands of records and aggregating them client-side (and in Postgres) just to render 100 rows on screen. Loads regularly took 30 to 50 seconds, and sometimes timed out entirely — for the exact page enterprise customers relied on to evaluate suppliers.",
      approach:
        "As the engineer who owned the platform's frontend foundations, I'd already led a broader push — a Redux Sagas to Redux Thunks migration, Sentry-based observability, and enforced TDD and pair programming across the team — that cut LCP 25% and bundle size 40% and improved cycle time 30% through tighter PM/engineering feedback loops. The procurement page needed something more targeted: I used Datadog to isolate exactly which endpoint was slow, then moved the aggregation off client-side/Postgres and onto an existing Elasticsearch mirror I hadn't previously worked with.",
    },
    technicalCall: {
      title: "Reusing infrastructure instead of building new",
      body: "Rather than stand up new aggregation infrastructure, I learned the Elasticsearch aggregation patterns the mirror already supported and re-pointed the procurement page at it. I validated the change behind a feature flag against a range of real customer data before rolling it out fully, since aggregation logic that's correct for one customer's data shape can silently break for another's.",
    },
    leadershipFraming: {
      team: "4-person frontend team spanning 3 squads by the end of this role",
      scope: "Frontend platform architecture, observability, and the procurement reporting page",
      stakeholders: "Enterprise customers depending on procurement reports, plus the wider product/eng org",
    },
    outcomeStats: [
      { value: "<10s", label: "procurement page load", sublabel: "down from 30–50s, sometimes timing out" },
      { value: "25%", label: "LCP reduction" },
      { value: "40%", label: "bundle size reduction" },
      { value: "10%+", label: "test coverage increase" },
    ],
    stack: ["React", "Redux", "Vite", "ElasticSearch", "Datadog", "Sentry", "Storybook"],
  },
  {
    slug: "knowledgehound-rapid-reports",
    priority: 3,
    company: "KnowledgeHound",
    companyBlurb: "Market research SaaS platform",
    roleTitle: "Lead Engineer",
    dateRange: "Jul 2018 – Jul 2022",
    hook: "Shipped the largest-grossing upgrade feature in company history — and a same-week fix for the export format sales actually needed.",
    heroStats: [
      { value: "#1", label: "grossing upgrade feature", sublabel: "in company history" },
      { value: "2 days", label: "to prototype native PowerPoint export" },
    ],
    narrative: {
      problem:
        "Rapid Reports let users build chart \"stories\" out of survey data inside The Hound, KnowledgeHound's core search-and-insights product. The initial export approach took a screenshot of the chart and dropped it into a PDF — but the customers who actually paid for this feature lived in PowerPoint, and a static image wasn't good enough.",
      approach:
        "I led the cross-functional team that shipped Rapid Reports as part of the largest-grossing upgrade feature in the company's history at that point, then owned the technical redesign of its export path. Rather than reimplement the frontend's chart-calculation logic a second time in Python for the export pipeline, I built a standalone Node/Express service that exposed that shared calculation logic as an npm package — consumed by both the React client and the Python-based export pipeline. I prototyped native PowerPoint export in 2 days, then brought on a second engineer to help ship it on the original deadline.",
    },
    technicalCall: {
      title: "One source of truth for chart math, in two runtimes",
      body: "Duplicating the chart-calculation logic in Python would have meant two implementations drifting apart over time. Exposing the existing JS logic as an npm package consumed by a small Node/Express service let the Python export pipeline call the exact same calculations the client used — a deliberate trade-off of a bit of added latency and a second service to version, in exchange for one source of truth for what a chart's numbers actually meant.",
    },
    leadershipFraming: {
      team: "Cross-functional delivery team, plus one additional engineer brought on for the PowerPoint export push",
      scope: "The Hound's Rapid Reports feature, and a full rewrite/architectural overhaul of the app's main data-analytics surface",
      stakeholders: "Enterprise customers, sales (this was the company's largest-grossing upgrade), and product leadership",
    },
    outcomeStats: [
      { value: "#1", label: "grossing upgrade feature in company history" },
      { value: "2 days", label: "from prototype to working PowerPoint export" },
      { value: "On time", label: "shipped to the original deadline" },
    ],
    stack: ["React", "Redux", "Django", "Express", "Node.js", "AWS", "Docker", "ElasticSearch", "PostgreSQL"],
    externalLinks: [
      { label: "See the product", href: "https://insights.knowledgehound.co/home" },
      {
        label: "Read: how Rapid Reports continues to improve",
        href: "https://knowledgehound.com/blog/knowledgehounds-rapid-reports-continues-to-improve/",
      },
    ],
  },
];
