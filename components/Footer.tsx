import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center text-xs text-(--color-muted) sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
