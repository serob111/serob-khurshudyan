import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-(--color-border) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-sm text-(--color-accent)">02</span>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg)">Tech Stack</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-(--color-border) bg-(--color-surface) p-5"
            >
              <h3 className="mb-3.5 font-mono text-xs uppercase tracking-wider text-(--color-muted)">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-(--color-border) bg-(--color-bg) px-2.5 py-1 text-xs text-(--color-fg)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
