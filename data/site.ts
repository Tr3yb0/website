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

export type SelectedWorkItem = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  tags: string[];
  featured?: boolean;
};

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
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
  company: "Atomic Financial",
  companyUrl: "https://atomic.financial",
  location: "Raleigh, North Carolina",
  url: "https://www.treybotard.com/",
  ogImage: "https://www.treybotard.com/og.png",
  title: "Trey Botard",
  description:
    "Director of Developer Relations at Atomic Financial. Building developer experience, customer operations systems, and practical AI workflows.",
  ogDescription:
    "Director of Developer Relations at Atomic Financial — developer experience, customer operations systems, and practical AI workflows.",
  twitterDescription:
    "Director of Developer Relations at Atomic Financial — developer experience, customer systems, and practical AI workflows.",
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
    eyebrow: "Atomic Financial · Customer Operations",
    title: "Customer operations in Pylon",
    paragraphs: [
      "Customer requests were scattered across calls, Slack, email, spreadsheets, and issue trackers. I centralized intake in Pylon, connected requests to customer context, and defined ownership and escalation paths across implementation, support, reporting, and engineering.",
      "From February through July 15, 2026, 235 of 277 issues assigned to me reached a closed or completed state.",
    ],
    tags: ["Workflow discovery", "Systems design", "Cross-functional adoption"],
  },
  {
    eyebrow: "Atomic Financial · Developer Experience",
    title: "Executable developer experience",
    paragraphs: [
      "Built and connected API guidance, quickstarts, Postman workflows, demos, videos, SDK and webhook enablement, and release notes so developers and internal teams have working paths through Atomic’s platform.",
      "439 commits across 24 repositories, including 224 commits to public documentation.",
    ],
    tags: ["Developer adoption", "Docs & quickstarts", "Self-service enablement"],
  },
  {
    eyebrow: "Personal Lab · Applied AI",
    title: "AI operating layer for everyday work",
    paragraphs: [
      "Testing a local-first AI workflow layer for personal and household ops across Linear, Calendar, a local Markdown knowledge graph, and selected shared Notion pages—focused on explicit sources of truth, draft-first safeguards, and staying useful over time.",
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
      "Look across tickets, handoffs, docs, and customer calls for what actually repeats—not just the loudest one-off ask.",
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
    company: "Atomic Financial",
    companyUrl: "https://atomic.financial",
    current: true,
    description:
      "Leading developer experience and technical adoption—covering public docs and API enablement, customer implementation, internal operating systems, enterprise delivery, and practical AI workflows.",
  },
  {
    role: "Developer Advocate",
    company: "Fluree",
    description:
      "Rearchitected documentation, interviewed users, created technical content, ran office hours, and migrated an 800-plus-member developer community from Slack to Discord and GitHub Discussions.",
  },
  {
    role: "Software Developer",
    company: "Lincoln Financial · Volvo · Bank of America",
    description:
      "Built enterprise software across web apps, natural-language understanding, automation, and data integrations.",
  },
];

export const speakingItems: SpeakingItem[] = [
  {
    format: "Talk",
    venue: "The Knowledge Graph Conference",
    detail: "“Bringing Time and Truth to Semantic Data”",
    url: "https://www.knowledgegraph.tech/speakers/trey-botard/",
  },
  {
    format: "Speaker",
    venue: "FinovateSpring",
    detail: "Featured speaker",
  },
  {
    format: "Podcast",
    venue: "Fireside with Voxgig, Episode 238",
    detail: "“Head of Developer Relations at Atomic”",
    url: "https://open.spotify.com/episode/6WeXJStHxl2Lx1DF45rmMP",
  },
  {
    format: "Advisory",
    venue: "DevNetwork",
    detail: "Developer Evangelist/Advocate Advisory Board",
  },
];
