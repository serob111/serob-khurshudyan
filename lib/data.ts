export const profile = {
  name: "Serob Khurshudyan",
  title: "Senior Full Stack Engineer",
  tagline: "Backend-Focused · AI Integrations",
  location: "Gyumri, Armenia",
  email: "khurshudyans111@gmail.com",
  phone: "+374 94 998 222",
  linkedin: "https://www.linkedin.com/in/serob-khurshudyan/",
  github: "https://github.com/serob111/",
};

export const about =
  "5+ years of experience designing, building, and owning production SaaS platforms for U.S.-based companies, with a strong backend focus. Specializes in Node.js/NestJS API design, PostgreSQL data modeling, payment infrastructure (Stripe, Chargebee), and production AI integrations (Claude, OpenAI). Comfortable owning a feature from architecture through deployment.";

export const techStack = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "WebSockets", "BullMQ"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Shadcn UI"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Supabase", "Redis"],
  },
  {
    label: "Auth",
    items: ["JWT", "OAuth", "RBAC", "Supabase Auth", "Magic Links"],
  },
  {
    label: "Payments",
    items: ["Stripe", "Chargebee"],
  },
  {
    label: "AI / LLM",
    items: [
      "Claude API",
      "OpenAI API",
      "Prompt Engineering",
      "LLM Integrations",
      "AI Agents",
      "Provider Abstraction",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: ["Docker", "AWS", "Vercel", "Nginx", "Linux", "GitHub", "CI/CD"],
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
    role: "Senior Full Stack Engineer",
    org: "Confidential US PropTech SaaS Client",
    note: "via Toptal",
    employment: "Contract",
    period: "Apr 2026 – Present",
    bullets: [
      "Own backend architecture for a real estate SaaS platform built on NestJS APIs with PostgreSQL and Supabase.",
      "Implemented Magic Link authentication and billing across Stripe and Chargebee.",
      "Built AI-powered property analysis features using the Claude API.",
      "Integrated third-party services including Persona, Twilio, and DocuSeal.",
      "Delivered the customer-facing frontend with Next.js App Router.",
    ],
    tags: ["NestJS", "PostgreSQL", "Supabase", "Stripe", "Chargebee", "Claude API", "Next.js"],
  },
  {
    role: "Senior Full Stack Developer",
    org: "AppsGeyser",
    employment: "Full-time",
    period: "Jan 2024 – Present",
    bullets: [
      "Build backend services and REST APIs powering core product features.",
      "Handle async processing with BullMQ and Redis, plus a Redis caching layer.",
      "Develop automation and webhook services.",
      "Led a Next.js migration of legacy features.",
      "Maintain PostgreSQL/MySQL infrastructure on Nginx/Linux.",
    ],
    tags: ["Node.js", "BullMQ", "Redis", "Next.js", "PostgreSQL", "MySQL", "Nginx"],
  },
  {
    role: "Frontend Engineer",
    org: "Software Development Hub (SDH)",
    note: "Pharmacy-One project",
    employment: "Contract",
    period: "2025 – 2026",
    bullets: [
      "Built a healthcare dashboard with React, TypeScript, Vite, and Tailwind CSS.",
      "Integrated the frontend with a Django REST API backend.",
      "Implemented role-based access control (RBAC).",
      "Delivered analytics dashboards with real-time updates.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Django REST", "RBAC"],
  },
  {
    role: "Full Stack Developer",
    org: "Metacade",
    note: "Web3",
    employment: "Contract",
    period: "Jul 2023 – Dec 2023",
    bullets: [
      "Built a Web3 application with Next.js, React, and TypeScript.",
      "Implemented blockchain wallet integration.",
      "Built Web3 authentication flows.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Web3"],
  },
  {
    role: "Full Stack Developer",
    org: "Gauge Automotive",
    employment: "Full-time",
    period: "Jan 2023 – Jun 2023",
    bullets: [
      "Built automotive management software with React, Node.js, and PostgreSQL.",
      "Developed dashboards and scheduling tools.",
      "Built REST APIs with role-based access control.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs", "RBAC"],
  },
  {
    role: "AI App Builder Platform",
    org: "Independent Project",
    note: "Founder & Architect",
    employment: "Personal",
    period: "",
    bullets: [
      "Designed the system architecture for an AI-powered app builder.",
      "Built the backend with NestJS, PostgreSQL, and Prisma.",
      "Built a Docker-based build pipeline.",
      "Designed queue architecture for mobile build orchestration.",
    ],
    tags: ["NestJS", "PostgreSQL", "Prisma", "Docker", "Queues"],
  },
];

export const education = {
  degree: "Bachelor's Degree",
  school: "Armenian State University of Economics (ASUE)",
  period: "2018 – 2022",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
