import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-(--color-border) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-sm text-(--color-accent)">03</span>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg)">
            Experience &amp; Projects
          </h2>
        </div>

        <ol className="relative space-y-10 border-l border-(--color-border) pl-8">
          {experience.map((job) => (
            <li key={`${job.role}-${job.org}`} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-(--color-bg) bg-(--color-accent)" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-(--color-fg)">
                  {job.role}
                  <span className="font-normal text-(--color-muted)"> · {job.org}</span>
                </h3>
                {job.period && (
                  <span className="shrink-0 font-mono text-xs text-(--color-muted)">
                    {job.period}
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-xs text-(--color-muted)">
                {[job.employment, job.note].filter(Boolean).join(" · ")}
              </p>

              <ul className="mt-4 space-y-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-(--color-muted)"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-(--color-muted)" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-(--color-accent-soft) px-2.5 py-1 text-xs text-(--color-accent)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
