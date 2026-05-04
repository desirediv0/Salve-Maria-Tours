"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { SiWhatsapp } from "react-icons/si";
import { FadeUp } from "./FadeUp";

export function ContactCtaStrip() {
  return (
    <section className="relative overflow-hidden bg-footer-dark py-14 sm:py-16">

      {/* ── Background layers ── */}
      {/* Subtle diagonal stripe texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 18px,
            rgba(255,255,255,0.6) 18px,
            rgba(255,255,255,0.6) 19px
          )`,
        }}
      />
      {/* Left navy glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky/10 blur-[80px]"
      />
      {/* Right orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-orange/8 blur-[70px]"
      />
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-sky to-transparent" />

      {/* ── Content ── */}
      <FadeUp className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

          {/* Left: Headline */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                Start Today
              </span>
            </div>
            <h2 className="font-heading text-4xl font-bold not-italic leading-[1.1] text-white md:text-5xl lg:text-[52px]">
              Ready to Begin Your{" "}
              <br className="hidden sm:block" />
              <span className="text-sky">Sacred Journey?</span>
            </h2>
            <p className="font-body mt-5 text-base font-light leading-relaxed text-white/50">
              Our team is ready to craft a pilgrimage or tour that fits your soul and your schedule.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
            {/* Primary */}
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2.5 rounded-full bg-orange px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all duration-300 hover:shadow-cta-glow-hover hover:-translate-y-px"
            >
              Book Your Tour
              <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/919958815430"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366]"
            >
              <SiWhatsapp className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* ── Bottom stat row ── */}
        <div className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/8 pt-10 sm:gap-12">
          {[
            { val: "2,000+", lbl: "Pilgrims Served" },
            { val: "15+", lbl: "Years of Trust" },
            { val: "< 24h", lbl: "Response Time" },
          ].map((s, i) => (
            <div key={s.lbl} className="flex items-center gap-4">
              {i > 0 && <div className="h-8 w-px bg-white/10 hidden sm:block" />}
              <div>
                <p className="font-heading text-2xl font-bold not-italic text-sky">
                  {s.val}
                </p>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {s.lbl}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}