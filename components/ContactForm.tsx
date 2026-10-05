"use client";

import { useState, type FormEvent } from "react";
import { AlertIcon, CheckIcon, SendIcon, SpinnerIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-(--color-border) bg-(--color-bg) px-3.5 py-2.5 text-sm text-(--color-fg) placeholder:text-(--color-muted) transition-colors focus:border-(--color-accent) focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-2 rounded-md border border-(--color-border) bg-(--color-bg) px-5 py-6">
        <span className="flex items-center gap-2 text-sm font-medium text-(--color-accent)">
          <CheckIcon className="size-4" />
          Message sent
        </span>
        <p className="text-sm text-(--color-muted)">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 text-xs text-(--color-muted) underline-offset-2 hover:text-(--color-fg) hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      {/* Honeypot field — hidden from real users, bots tend to fill every input */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          maxLength={100}
          placeholder="Your name"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          maxLength={200}
          placeholder="Your email"
          className={inputClass}
        />
      </div>

      <textarea
        name="message"
        required
        maxLength={4000}
        rows={5}
        placeholder="What are you building?"
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertIcon className="size-4 shrink-0" />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-(--color-accent) px-4 py-2.5 text-sm font-medium text-[#04120c] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <SpinnerIcon className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <SendIcon className="size-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
