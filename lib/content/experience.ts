export interface ExperienceRole {
  title: string;
  company?: string;
  location?: string;
  dateRange: string;
  subtitle?: string;
  stack?: string;
  bullets: string[];
}

export interface ExperienceSection {
  slug: string;
  heading: string;
  defaultOpen: boolean;
  roles: ExperienceRole[];
}

export const experience: ExperienceSection[] = [
  {
    slug: "magicschool",
    heading: "MagicSchool AI",
    defaultOpen: true,
    roles: [
      {
        title: "Engineering Manager - Enterprise, Chatbot, Internal Tools",
        dateRange: "Mar 2026 – Present",
        subtitle: "AI-native edtech platform · 7M+ educators",
        bullets: [
          "Led launch of a personalized recommendations engine for 7M+ educators, replacing 4 static tool suggestions with 9 subject-ranked ones — 23% CTR and 78% click-to-use conversion among new users.",
          "Led a multi-phase quality initiative on Raina's clarifying-question behavior and response verbosity, using a dedicated eval harness to validate prompt changes before they shipped.",
          "Built and applied a cross-platform (Linear/GitHub) engineering activity model to inform EPD squad consolidation following a significant, multi-person leadership departure.",
          "Owned technical delivery of Unified Enterprise Tools, consolidating three fragmented admin surfaces (tool access, org tools, district settings) into a single interface.",
          "Led per-user, per-grade/subject tool access management for MagicStudent — replacing an all-or-nothing access model with granular controls for district admins.",
          "Build psychological safety and inclusive team culture; servant-leader approach focused on knowing individual strengths and challenging each engineer to grow.",
        ],
      },
      {
        title: "Tech Lead Manager, Staff Engineer - Growth",
        dateRange: "Jul 2025 – Mar 2026",
        bullets: [
          "Shipped Free Tier Generation Limits end-to-end: projected $150K+ annual savings (~27% LLM cost reduction) and structured upgrade trigger for 5–8% of WAU.",
          "Delivered Admin Outreach campaign achieving 50% landing page conversion (vs. 10% goal), generating ~$112K in first product-led pipeline.",
          "Launched User Referral A/B test across ~56K eligible free users, the squad's first statistically significant growth experiment; provisioned ~300K user trials for a reactivation campaign.",
          "Implemented Amplitude Experiments + Feature Flags infrastructure end-to-end; shipped org-wide documentation and ran a lunch & learn enabling full EPD-wide adoption.",
        ],
      },
      {
        title: "Tech Lead, Senior Engineer - Enterprise & Integrations",
        dateRange: "Sep 2024 – Jul 2025",
        bullets: [
          "Promoted to Tech Lead within one month; led on-time Back to School delivery with admin tooling, onboarding, and Schoology/Canvas integrations while absorbing added scope mid-project and keeping team morale strong.",
          "Championed creation of a dedicated Design System team — advocated for the investment, resulting in 3 dedicated engineers and a full initiative to build standardized shared UI components.",
        ],
      },
    ],
  },
  {
    slug: "howgood",
    heading: "HowGood",
    defaultOpen: true,
    roles: [
      {
        title: "Engineering Manager",
        dateRange: "Oct 2022 – Sep 2024",
        bullets: [
          "Continued work as Frontend Engineer.",
          "Partnered with product teams to establish strategic objectives, priorities, and mission for various projects.",
          "Developed a technical roadmap to highlight key areas of improvement critical for the team to invest in internally to maximize future velocity.",
          "Led and managed the team to foster a culture of continuous improvement and innovation.",
          "Led the team in achieving a 40% reduction in frontend application bundle size, resulting in improved load times and enhanced user experience.",
          "Promoted and enforced high coding standards to ensure the team's adherence to best practices in software development.",
        ],
      },
      {
        title: "Frontend Engineer",
        dateRange: "Jul 2022 – Oct 2022",
        stack: "React, Redux, Vite, MUI, ElasticSearch, Sentry, Contentful, Storybook",
        bullets: [
          "Implemented new 'MVP' features prioritizing code maintainability and extensibility.",
          "Demonstrated proactive problem-solving skills by promptly addressing bugs, repairing code, and implementing preventive measures.",
          "Provided active feedback to product managers to ensure clear ticket writing that minimizes surprises.",
        ],
      },
    ],
  },
  {
    slug: "knowledgehound",
    heading: "KnowledgeHound",
    defaultOpen: true,
    roles: [
      {
        title: "Lead Engineer",
        location: "Chicago, IL",
        dateRange: "Oct 2020 – Jul 2022",
        stack: "React, Redux, Django, Express, HTML, CSS, AWS, Docker, ElasticSearch, PostgreSQL",
        bullets: [
          "Led a cross-functional team to an on-time delivery of the largest grossing upgrade feature in over 3 years.",
          "Consulted with product management to design the product roadmap.",
          "Maintained big-picture view of product vision and guided teammates in strategic implementations of new features.",
          "Managed multiple large-scale projects, including a complete rewrite and architectural overhaul of the main data analytics portion of the application.",
          "Hiring manager for open engineering positions.",
          "Subject matter expert for the application's front end and multiple backend services (Django and Express).",
          "Continued to perform all responsibilities required as a Software Engineer.",
        ],
      },
      {
        title: "Software Engineer / Junior Engineer",
        location: "Chicago, IL",
        dateRange: "Jul 2018 – Oct 2020",
        bullets: [
          "Full stack engineer on an enterprise-level RESTful web application that allows users to quickly search and analyze survey data, unveiling unique insights.",
          "Implemented new, user-facing features end-to-end, including video media integrations, dynamic visual charts, analysis export to native PowerPoint, and much more.",
          "Practiced test driven development.",
          "Wrote product feature help articles for general users to help fuel user engagement.",
        ],
      },
    ],
  },
  {
    slug: "earlier-career",
    heading: "Earlier career — process & production engineering",
    defaultOpen: false,
    roles: [
      {
        title: "Senior Production Engineer",
        company: "Nosco Inc",
        location: "Waukegan, IL",
        dateRange: "Jul 2016 – Feb 2018",
        bullets: [
          "Developed a fully automated production report for the Carton Value Stream, saving over 10 man-hours each week.",
          "Developed an optimized process for job closure procedure that reduced customer documentation errors by 75%.",
          "Managed purchase, installation, and start-up of a brand new $2MM Komori Press, completing the project on time and on budget.",
        ],
      },
      {
        title: "Production Engineer (Acting Production Manager, Nov 2015 – Jul 2016)",
        company: "Vantage Specialty Chemicals",
        location: "Gurnee, IL",
        dateRange: "Feb 2015 – Jul 2016",
        bullets: [
          "Developed and implemented an automated production performance incident reporting process.",
          "Project manager for multiple capital projects with budgets up to $125K.",
          "Direct manager of Production Cooperative Engineers.",
          "Responsible for programming and troubleshooting of the Foxboro distributed control system and Allen Bradley programmable logic computers.",
        ],
      },
      {
        title: "Manager of Blending and Process Engineering",
        company: "Safety-Kleen",
        location: "East Chicago, IN",
        dateRange: "Mar 2014 – Feb 2015",
        bullets: [
          "Managed an operation that blends and ships over 15MM gallons of finished product annually with zero quality incidents in 2014.",
          "Designed and executed installation and commissioning of a mass load-out custody transfer system to decrease truck loading time by 40%.",
          "Responsible for identification and replacement of a control valve bottleneck, allowing a 15% reduction in blend time.",
        ],
      },
      {
        title: "Process Engineer, I&E Manager",
        company: "Safety-Kleen",
        location: "East Chicago, IN",
        dateRange: "Mar 2012 – Mar 2014",
        bullets: [
          "Manager of the Instrumentation and Electrical department.",
          "Responsible for selection and procurement of all facility instrumentation while maintaining a $1MM annual budget.",
          "Responsible for all maintenance, troubleshooting, and programming of the facility's Honeywell distributed control system and Allen Bradley programmable logic computers.",
          "Hiring and direct manager of the Cooperative Engineering department.",
          "Project manager of multiple capital projects with budgets up to $2.5MM.",
          "Developed an Alarm Management Program and implemented a rationalization plan for continuous improvement and effectiveness of operations alarms — 83% reduction in standing alarms, 37% reduction in alarm rate.",
          "Eliminated compliance violations of SO2 emissions through an automated, proactive monitoring program utilizing the distributed control system.",
          "Led commissioning of a newly installed $15MM blend plant with brand new programmable logic computers and Wonderware human-machine interface.",
        ],
      },
      {
        title: "Process Engineer",
        company: "Sunoco",
        location: "Marcus Hook, PA",
        dateRange: "Oct 2011 – Mar 2012",
        bullets: [
          "Ensured safe and efficient operation of two processing units in collaboration with unit operation teams until the refinery was shut down in December 2011.",
          "Improved catalyst performance, health, and longevity through creation and implementation of unit monitoring tools.",
        ],
      },
      {
        title: "High School Chemistry Teacher",
        company: "NYC Teaching Fellows · Henry Street School",
        location: "New York, NY",
        dateRange: "Summer 2010 – Summer 2011",
        bullets: [
          "Led student achievement data team in implementation of a data analysis process, effectively cutting processing time by a third.",
          "Developed unique study materials and lesson plans to facilitate student learning.",
        ],
      },
      {
        title: "Process Engineer",
        company: "Shell",
        location: "Anacortes, WA",
        dateRange: "Aug 2008 – Jul 2010",
        bullets: [
          "Eliminated environmental SO2 emission exceedances during startup by developing and implementing an alternate catalyst activation process procedure.",
          "Conducted cost/benefit analyses to justify performing regeneration processes, and coordinated and supervised execution of the procedures.",
        ],
      },
    ],
  },
];
