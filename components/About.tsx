import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-(--color-border) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-sm text-(--color-accent)">01</span>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg)">About</h2>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-(--color-muted)">{about}</p>
      </div>
    </section>
  );
}
