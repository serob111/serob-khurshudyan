import { profile } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-(--color-border) pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-3.5 py-1.5 font-mono text-xs text-(--color-muted)">
            <span className="inline-block size-1.5 rounded-full bg-(--color-accent)" />
            {profile.title}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-(--color-fg) sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg text-(--color-muted)">{profile.tagline}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-(--color-muted)">
            Backend-focused engineer building production SaaS platforms&nbsp;—&nbsp;APIs, data
            modeling, payment infrastructure, and AI integrations&nbsp;—&nbsp;for U.S.-based
            companies.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-(--color-muted)">
            <MapPinIcon className="size-4 text-(--color-accent)" />
            {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-(--color-accent) px-4 py-2.5 text-sm font-medium text-[#04120c] transition-opacity hover:opacity-90"
            >
              <MailIcon className="size-4" />
              Contact me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-(--color-border) px-4 py-2.5 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-(--color-border) px-4 py-2.5 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="animate-fade-in-up rounded-xl border border-(--color-border) bg-(--color-surface) shadow-2xl shadow-black/40"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex items-center gap-1.5 border-b border-(--color-border) px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-(--color-muted)">whoami.sh</span>
          </div>
          <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
            <p className="text-(--color-muted)">
              <span className="text-(--color-accent)">$</span> whoami
            </p>
            <p className="text-(--color-fg)">serob-khurshudyan</p>
            <p className="mt-3 text-(--color-muted)">
              <span className="text-(--color-accent)">$</span> role
            </p>
            <p className="text-(--color-fg)">{profile.title}</p>
            <p className="mt-3 text-(--color-muted)">
              <span className="text-(--color-accent)">$</span> focus
            </p>
            <p className="text-(--color-fg)">Node.js · NestJS · AI Integrations</p>
            <p className="mt-3 text-(--color-muted)">
              <span className="text-(--color-accent)">$</span> location
            </p>
            <p className="text-(--color-fg)">{profile.location}</p>
            <p className="mt-3 flex items-center gap-1 text-(--color-muted)">
              <span className="text-(--color-accent)">$</span>
              <span className="inline-block h-3.5 w-2 translate-y-px bg-(--color-accent) animate-caret" />
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 max-w-5xl px-6">
        <a
          href="#about"
          className="inline-flex items-center gap-1 text-xs text-(--color-muted) hover:text-(--color-fg)"
        >
          Scroll to explore <ArrowUpRightIcon className="size-3.5 rotate-90" />
        </a>
      </div>
    </section>
  );
}
