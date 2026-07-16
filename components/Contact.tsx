import { profile } from "@/lib/data";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  CopyIcon,
  CheckIcon,
} from "@/components/icons";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-sm text-(--color-accent)">05</span>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg)">Contact</h2>
        </div>

        <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-8 sm:p-10">
          <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-(--color-fg)">
            Let&apos;s talk about your backend, API, or AI integration project.
          </h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <CopyEmailButton
              className="flex items-center justify-between gap-2 rounded-md border border-(--color-border) bg-(--color-bg) px-4 py-3 text-left text-sm text-(--color-fg) transition-colors hover:border-(--color-accent)"
              idle={
                <>
                  <span className="flex items-center gap-2.5">
                    <MailIcon className="size-4 text-(--color-accent)" />
                    {profile.email}
                  </span>
                  <CopyIcon className="size-4 shrink-0 text-(--color-muted)" />
                </>
              }
              copied={
                <>
                  <span className="flex items-center gap-2.5">
                    <MailIcon className="size-4 text-(--color-accent)" />
                    {profile.email}
                  </span>
                  <CheckIcon className="size-4 shrink-0 text-(--color-accent)" />
                </>
              }
            />

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 rounded-md border border-(--color-border) bg-(--color-bg) px-4 py-3 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent)"
            >
              <PhoneIcon className="size-4 text-(--color-accent)" />
              {profile.phone}
            </a>

            <div className="flex items-center gap-2.5 rounded-md border border-(--color-border) bg-(--color-bg) px-4 py-3 text-sm text-(--color-fg)">
              <MapPinIcon className="size-4 text-(--color-accent)" />
              {profile.location}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-(--color-border) bg-(--color-bg) px-4 py-3 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-(--color-border) bg-(--color-bg) px-4 py-3 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
