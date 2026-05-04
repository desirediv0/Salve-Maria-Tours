"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        setEmail("");
      }}
    >
      <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-white/90">
        Newsletter
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 font-body text-sm font-light text-white placeholder:text-white/45 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/40"
        />
        <button
          type="submit"
          className="shrink-0 rounded-2xl bg-orange px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-white shadow-cta-glow transition hover:shadow-cta-glow-hover"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

