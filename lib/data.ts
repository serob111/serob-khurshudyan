export const profile = {
  name: "Serob Khurshudyan",
  title: "Senior Full-Stack Engineer",
  tagline: "Backend & AI Applications",
  location: "Armenia",
  email: "serobkhurshudyan111@gmail.com",
  phone: "+374 94 998 222",
  linkedin: "https://www.linkedin.com/in/serob-khurshudyan/",
  github: "https://github.com/serob111/",
};

export const about =
  "Senior Full-Stack Engineer with 6+ years of experience building SaaS platforms, marketplaces, and AI-powered applications. Strong backend expertise in Node.js, NestJS, TypeScript, PostgreSQL, API design, payments, and asynchronous processing. Delivers React and Next.js applications, RAG pipelines, and vector search, with ownership across system design, integrations, testing, deployment, and production reliability.";

export const techStack = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Webhooks",
      "Auth & Authorization",
      "Multi-Tenant Systems",
      "Async Processing",
    ],
  },
  {
    label: "Databases & Queues",
    items: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "Query Optimization",
      "Row Level Security (RLS)",
    ],
  },
  {
    label: "Frontend & Real-Time",
    items: [
      "React",
      "Next.js App Router",
      "React Server Components",
      "SSR",
      "SEO",
      "Redux",
      "React Query",
      "Context API",
      "Tailwind CSS",
      "i18next",
      "WebSockets",
    ],
  },
  {
    label: "AI & Search",
    items: [
      "Claude API",
      "OpenAI API",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Semantic Retrieval",
      "AI Provider Abstraction",
      "AI Usage Tracking",
    ],
  },
  {
    label: "Payments & Integrations",
    items: [
      "Stripe",
      "Chargebee",
      "Subscription Billing",
      "Idempotent Webhooks",
      "3D Secure",
      "Dunning",
      "Persona",
      "DocuSeal",
      "Twilio Lookup",
      "Slack API",
    ],
  },
  {
    label: "Cloud & Delivery",
    items: [
      "AWS",
      "Docker",
      "Linux",
      "Nginx",
      "Git / GitHub",
      "CI/CD",
      "Jenkins",
      "Firebase",
      "Supabase Auth & Storage",
    ],
  },
  {
    label: "Testing & Engineering",
    items: [
      "Jest",
      "Vitest",
      "Playwright",
      "Structured Logging",
      "Production Debugging",
      "Performance Optimization",
      "Code Review",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  note?: string;
  employment: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    org: "FelixSells.ai LLC",
    note: "via Toptal",
    employment: "Contract",
    period: "2026 – Present",
    bullets: [
      "Built a real estate platform with Next.js, TypeScript, Node.js, and Supabase, including multi-step seller onboarding, transaction workflows, pricing reports, and property uploads.",
      "Designed PostgreSQL data models for users, sellers, listings, transactions, and workflow events; applied Row Level Security to protect application data.",
      "Integrated Stripe activation payments and idempotent webhook processing, Persona identity verification, DocuSeal e-signatures, Twilio Lookup, and Slack notifications.",
      "Built RAG and vector retrieval pipelines for property and transaction context, with AI provider abstraction and usage tracking.",
      "Implemented Next.js App Router, React Server Components, SSR, and React Query to improve data fetching, performance, and SEO.",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Stripe", "Persona", "RAG"],
  },
  {
    role: "Senior Full-Stack Engineer",
    org: "AppsGeyser",
    employment: "Full-time",
    period: "2024 – Present",
    bullets: [
      "Developed SaaS features across Node.js, TypeScript, React, Next.js, MySQL, and Redis, including backend APIs and third-party billing integrations.",
      "Built and maintained Stripe and Chargebee subscription workflows covering purchases, recurring renewals, payment-state synchronization, and premium access.",
      "Implemented Redis and BullMQ queues for asynchronous and long-running operations outside request-response flows.",
      "Investigated failed payments, 3D Secure authentication, off-session renewals, and subscription lifecycle issues; improved retry and dunning workflows.",
      "Diagnosed production incidents across Node.js services, Nginx, MySQL replication, queues, and external APIs; optimized queries and refactored legacy backend components.",
    ],
    tags: ["Node.js", "TypeScript", "Stripe", "Chargebee", "Redis", "BullMQ", "MySQL"],
  },
  {
    role: "Senior Front-End Developer",
    org: "SDH-IT (Software Development Hub)",
    employment: "Contract",
    period: "2025 – 2026",
    bullets: [
      "Built a pharmacy aggregation platform with React and TypeScript, including medication search, pharmacy listings, pricing, and availability workflows.",
      "Integrated backend APIs and built real-time inventory and pricing tables, filters, sorting, and pagination without full-page reloads.",
      "Optimized rendering on data-heavy screens and managed shared application state with Context API and reusable component boundaries.",
      "Automated build, test, and deployment workflows with Jenkins CI/CD; supported release validation and production troubleshooting.",
    ],
    tags: ["React", "TypeScript", "Context API", "Jenkins CI/CD"],
  },
  {
    role: "Full-Stack Developer",
    org: "Gauge Automotive",
    employment: "Full-time",
    period: "2023 – 2024",
    bullets: [
      "Developed an automotive marketplace and bidding platform using React, TypeScript, Node.js, Express.js, and Redux.",
      "Built APIs for vehicle listings, auctions, bid submission, user activity, and dashboards; enforced server-side auction state and bid eligibility rules.",
      "Implemented real-time bidding updates and synchronized vehicle, auction, bid, and user states between frontend and backend.",
      "Refactored shared business logic and built responsive listing, search, bidding, and dashboard interfaces with validation and structured error handling.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "Redux"],
  },
  {
    role: "Senior Frontend Developer",
    org: "Metacade",
    note: "Web3",
    employment: "Contract",
    period: "2022 – 2023",
    bullets: [
      "Delivered production features for a Web3 gaming platform using Next.js, React, TypeScript, and Tailwind CSS.",
      "Built reusable UI components, multilingual experiences with i18next, and responsive interfaces from Figma designs.",
      "Implemented loading, empty, and validation states; resolved cross-browser issues and separated presentation, shared utilities, and page-level business logic.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18next"],
  },
  {
    role: "Backend Engineer",
    org: "Prof It",
    employment: "Full-time",
    period: "2021 – 2022",
    bullets: [
      "Delivered client projects from discovery through production, developing Node.js REST APIs with validation, error handling, and structured logging.",
      "Designed Prisma data layers and MySQL schemas; optimized queries and integrated third-party APIs with authentication, rate limits, and retries.",
      "Created Jest tests for business logic and refactored legacy code into modular architecture while supporting concurrent client projects.",
    ],
    tags: ["Node.js", "Prisma", "MySQL", "Jest"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Finance",
  school: "Armenian State University of Economics (ASUE)",
  period: "Yerevan, Armenia",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
