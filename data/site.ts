export type NavItem = {
  id: string;
  to: string;
  text: string;
};

export type SocialProfile = {
  name: string;
  url: string;
  icon: string;
};

export type SelectedWorkLink = {
  label: string;
  url: string;
};

export type SelectedWorkItem = {
  organization: string;
  organizationHighlight?: boolean;
  category: string;
  title: string;
  paragraphs: string[];
  links?: SelectedWorkLink[];
  tags: string[];
  featured?: boolean;
};

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type ExperienceCompany = {
  name: string;
  url?: string;
  highlight?: boolean;
};

export type ExperienceItem = {
  role: string;
  companies: ExperienceCompany[];
  current?: boolean;
  description: string;
};

export type SpeakingItem = {
  format: string;
  venue: string;
  detail: string;
  url?: string;
};

export const siteConfig = {
  name: "Trey Botard",
  role: "Director of Developer Relations",
  company: "Atomic",
  companyUrl: "https://atomic.financial",
  location: "Raleigh, North Carolina",
  url: "https://www.treybotard.com/",
  ogImage: "https://www.treybotard.com/og.png",
  title: "Trey Botard",
  description:
    "Director of Developer Relations at Atomic. Building developer experience, customer operations systems, and AI workflows.",
  ogDescription:
    "Director of Developer Relations at Atomic. Developer experience, customer operations systems, and AI workflows.",
  twitterDescription:
    "Director of Developer Relations at Atomic. Developer experience, customer systems, and AI workflows.",
  linkedinUrl: "https://www.linkedin.com/in/treybotard",
  githubUrl: "https://github.com/tr3yb0",
} as const;

export const navItems: NavItem[] = [
  { id: "work", to: "/#work", text: "Work" },
  { id: "approach", to: "/#approach", text: "Approach" },
  { id: "experience", to: "/#experience", text: "Experience" },
  { id: "speaking", to: "/#speaking", text: "Speaking" },
  { id: "connect", to: "/#connect", text: "Connect" },
];

export const socialProfiles: SocialProfile[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/treybotard",
    icon: "line-md:linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/tr3yb0",
    icon: "line-md:github",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/tr3yb0.bsky.social",
    icon: "line-md:bluesky",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tr3yb0/",
    icon: "line-md:instagram",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@treybotard",
    icon: "line-md:youtube",
  },
];

export const selectedWorkItems: SelectedWorkItem[] = [
  {
    organization: "Atomic",
    organizationHighlight: true,
    category: "Customer Operations",
    title: "Customer operations in Pylon",
    paragraphs: [
      "Customer requests were scattered across calls, Slack, email, spreadsheets, and issue trackers. I centralized intake in Pylon, connected requests to customer context, and defined ownership and escalation paths across implementation, support, reporting, and engineering.",
    ],
    tags: ["Workflow discovery", "Systems design", "Cross-functional adoption"],
  },
  {
    organization: "Atomic",
    organizationHighlight: true,
    category: "Developer Experience",
    title: "Executable developer experience",
    paragraphs: [
      "Built and connected API guidance, quickstarts, Postman workflows, demos, videos, SDK and webhook enablement, and release notes so developers and internal teams have working paths through Atomic’s platform.",
    ],
    links: [
      {
        label: "Public Postman Workspace",
        url: "https://www.postman.com/atomicfi/atomic-financial-public-workspace/overview",
      },
      {
        label: "Atomic Docs",
        url: "https://docs.atomicfi.com/reference/api",
      },
      {
        label: "Atomic YouTube",
        url: "https://www.youtube.com/@atomic.financial",
      },
    ],
    tags: ["Developer adoption", "Docs & quickstarts", "Self-service enablement"],
  },
  {
    organization: "Personal Lab",
    category: "Applied AI",
    title: "AI operating layer for everyday work",
    paragraphs: [
      "Testing a local-first AI workflow layer for personal and household ops across Linear, Calendar, a local Markdown knowledge graph, and selected shared Notion pages, focused on explicit sources of truth, draft-first safeguards, and staying useful over time.",
    ],
    tags: ["AI workflows", "Tool routing", "Safeguards"],
    featured: true,
  },
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Start with real friction",
    description:
      "Look across tickets, handoffs, docs, and customer calls for what actually repeats, not just the loudest one-off ask.",
  },
  {
    number: "02",
    title: "Build the smallest useful fix",
    description:
      "Wire up the workflow, tool, queue, or doc needed to move the work without over-engineering it.",
  },
  {
    number: "03",
    title: "Hand it off cleanly",
    description:
      "Document the pattern, set clear owners, and measure what changed so it runs without a permanent bottleneck.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Director of Developer Relations",
    companies: [
      { name: "Atomic", url: "https://atomic.financial", highlight: true },
    ],
    current: true,
    description:
      "Leading developer experience and technical adoption, covering public docs and API enablement, customer implementation, internal operating systems, enterprise delivery, and AI workflows.",
  },
  {
    role: "Developer Advocate",
    companies: [
      { name: "Fluree" },
      { name: "Atomic", url: "https://atomic.financial", highlight: true },
    ],
    description:
      "Rearchitected documentation platforms, interviewed developers, created technical content, ran office hours, and migrated an 800-plus-member developer community from Slack to Discord and GitHub Discussions.",
  },
  {
    role: "Software Developer",
    companies: [
      { name: "Lincoln Financial" },
      { name: "Volvo" },
      { name: "Bank of America" },
    ],
    description:
      "Built enterprise software across Angular web apps, natural-language understanding for chatbots, automated testing, CI/CD pipelines, and data integrations.",
  },
];

export const speakingItems: SpeakingItem[] = [
  {
    format: "Article",
    venue: "The Future of Open Finance: Navigating the Seas of Change",
    detail: "Atomic Blog",
    url: "https://atomic.financial/insights/the-future-of-open-finance-navigating-the-seas-of-change/",
  },
  {
    format: "Writing",
    venue: "DEV Community",
    detail: "Technical guides on Fluree, Docker, and developer communities",
    url: "https://dev.to/treybotard",
  },
  {
    format: "Speaker",
    venue: "Financial Data Exchange (FDX)",
    detail: "Speaker at the 2024 and 2025 Spring Global Summits",
  },
  {
    format: "Speaker",
    venue: "FinovateSpring",
    detail: "Featured speaker",
    url: "https://finovate.com/videos/finovatespring-2024-atomic/",
  },
  {
    format: "Talk",
    venue: "The Knowledge Graph Conference",
    detail: "“Bringing Time and Truth to Semantic Data”",
    url: "https://www.knowledgegraph.tech/speakers/trey-botard/",
  },
  {
    format: "Podcast",
    venue: "Fireside with Voxgig, Episode 238",
    detail: "“Head of Developer Relations at Atomic”",
    url: "https://open.spotify.com/episode/6WeXJStHxl2Lx1DF45rmMP",
  },
  {
    format: "Podcast",
    venue: "The State of Developer Education",
    detail: "“Which Department Does DevRel Really Belong to?”",
    url: "https://www.youtube.com/watch?v=0fJMkx7y3XY",
  },
  {
    format: "Podcast",
    venue: "Whose Bottom Line Is It Anyway?",
    detail: "“Intimacy with finance: making taxes a year-round affair” (with april)",
  },
  {
    format: "Advisory",
    venue: "DevNetwork",
    detail: "Developer Evangelist/Advocate Advisory Board",
  },
];

export const connectTopics = [
  "Developer experience & adoption",
  "Customer-facing operating systems",
  "AI workflows",
] as const;
