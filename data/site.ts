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
  title: "Trey Botard — Developer Experience, Customer Systems, and Applied AI",
  description:
    "Trey Botard turns fragmented developer and customer work into systems that help teams ship, learn, and scale. Director of Developer Relations at Atomic Financial.",
  ogDescription:
    "Developer experience, customer systems, and practical AI workflows built from real operational friction and turned into reusable tools, playbooks, and operating systems.",
  twitterDescription:
    "Developer experience, customer systems, and practical AI workflows built from real operational friction.",
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
    title: "From scattered customer requests to a customer-operations system",
    paragraphs: [
      "Customer work was spread across calls, Slack, email, spreadsheets, direct messages, and issue trackers. I centralized intake, connected requests to customer context, clarified ownership and escalation paths, and rebuilt the operating model in Pylon.",
      "The resulting system supports customer context, implementation tracking, support work, reporting, and engineering escalation. From February through July 15, 2026, 235 of 277 issues assigned to me reached a closed or completed state.",
    ],
    tags: [
      "Workflow discovery",
      "Systems design",
      "Cross-functional adoption",
      "Durable operating boundaries",
    ],
  },
  {
    eyebrow: "Atomic Financial · Developer Experience",
    title: "From documentation to an executable developer experience",
    paragraphs: [
      "Developers need more than explanations. They need working paths through a product. At Atomic, I built and connected API guidance, quickstarts, Postman workflows, demos, videos, SDK and webhook enablement, and release communications so developers and internal teams could exercise and troubleshoot a complex financial-connectivity platform.",
      "I contributed 439 commits across 24 repositories, including 224 commits to public documentation.",
    ],
    tags: [
      "Developer adoption",
      "Reusable technical assets",
      "Self-service enablement",
      "Platform thinking",
    ],
  },
  {
    eyebrow: "Current Lab · Applied AI",
    title: "An AI-native operating layer for real work",
    paragraphs: [
      "I’m building and testing an AI-enabled operating layer for personal and household work across Linear, Calendar, and a local Markdown knowledge graph, with Notion used for selected shared pages. It routes commitments, time, context, and durable handoffs while preserving explicit sources of truth, draft-first safeguards, and human control.",
      "The goal is not a clever demo. It is a system people can understand, trust, correct, and keep using.",
    ],
    tags: [
      "AI workflow design",
      "Tool routing",
      "Safeguards",
      "Evaluation",
      "Real-user adoption",
    ],
    featured: true,
  },
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Start with work as it actually happens",
    description:
      "I look across conversations, tickets, documents, dashboards, handoffs, and customer interactions to find repeated friction, not just the loudest request.",
  },
  {
    number: "02",
    title: "Build the smallest useful operating system",
    description:
      "I connect the context, ownership, workflow, and tools needed to move the work. The result might be a prototype, integration, queue, technical asset, or operating model.",
  },
  {
    number: "03",
    title: "Turn the solution into a reusable pattern",
    description:
      "I document the pattern, define boundaries and ownership, measure what changed, and help long-term owners adopt it so I do not remain the permanent escalation path.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Director of Developer Relations",
    company: "Atomic Financial",
    companyUrl: "https://atomic.financial",
    current: true,
    description:
      "I lead developer experience and technical adoption for a financial-connectivity platform. My work spans public documentation and API enablement, customer implementation, cross-functional operating systems, enterprise delivery, and emerging AI-enabled workflows.",
  },
  {
    role: "Developer Advocate",
    company: "Fluree",
    description:
      "I helped developers adopt semantic graph database technology by rearchitecting documentation, interviewing users, creating technical content, operating office hours, and moving an 800-plus-member community from Slack into Discord and GitHub Discussions.",
  },
  {
    role: "Software Developer",
    company: "Lincoln Financial · Volvo · Bank of America",
    description:
      "I built enterprise software across web development, natural-language understanding, automation, and data integrations. That engineering foundation still shapes how I investigate technical friction and work with product and engineering teams today.",
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
