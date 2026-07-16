import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-b border-(--color-border) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-sm text-(--color-accent)">04</span>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg)">Education</h2>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-(--color-border) bg-(--color-surface) p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-(--color-fg)">{education.degree}</h3>
            <p className="mt-0.5 text-sm text-(--color-muted)">{education.school}</p>
          </div>
          <span className="mt-2 shrink-0 font-mono text-xs text-(--color-muted) sm:mt-0">
            {education.period}
          </span>
        </div>
      </div>
    </section>
  );
}
