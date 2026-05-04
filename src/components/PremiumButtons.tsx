"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { HiArrowRight } from "react-icons/hi2";

type LinkProps = ComponentProps<typeof Link>;

/* ─────────────────────────────────────────
   Primary — orange fill, always visible CTA
───────────────────────────────────────── */
export function PrimaryButtonLink({
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all duration-300 hover:-translate-y-px hover:shadow-cta-glow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ─────────────────────────────────────────
   Ghost — transparent border, on dark bg
───────────────────────────────────────── */
export function GhostButtonLink({
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/8 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-white/55 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ─────────────────────────────────────────
   Secondary Navy — navy fill, on light bg
───────────────────────────────────────── */
export function SecondaryNavyLink({
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <Link
      className={`group inline-flex items-center gap-2.5 rounded-full bg-navy px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ─────────────────────────────────────────
   Outline Navy — bordered, on light bg
───────────────────────────────────────── */
export function OutlineNavyLink({
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <Link
      className={`group inline-flex items-center gap-2.5 rounded-full border border-navy/25 bg-transparent px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}