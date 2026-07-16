"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/data";
import { MenuIcon, CloseIcon } from "@/components/icons";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-(--color-fg)"
        >
          <span className="text-(--color-accent)">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-(--color-muted) transition-colors hover:text-(--color-fg)"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <CopyEmailButton
          className="hidden rounded-md border border-(--color-border) px-3.5 py-1.5 text-sm text-(--color-fg) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) md:inline-block"
          idle="Get in touch"
          copied="Copied!"
        />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-(--color-fg) md:hidden"
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-(--color-border) px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-(--color-muted) hover:text-(--color-fg)"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <CopyEmailButton
                className="block text-sm text-(--color-accent)"
                idle="Get in touch"
                copied="Copied!"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
