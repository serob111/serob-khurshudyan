"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Props = {
  className?: string;
  idle: React.ReactNode;
  copied: React.ReactNode;
};

export default function CopyEmailButton({ className, idle, copied: copiedContent }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {copied ? copiedContent : idle}
    </button>
  );
}
