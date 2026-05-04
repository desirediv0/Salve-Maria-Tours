"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3195391/3195391-hd_1280_720_25fps.mp4";

const STATS = [
  { value: "2,000+", label: "Happy Pilgrims" },
  { value: "40+", label: "Sacred Routes" },
  { value: "15 Yrs", label: "Trusted Service" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen min-h-[100svh] flex-col overflow-hidden bg-[#080C14]"
      id="hero"
    >
      {/* ── Video ── */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=90"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlay stack — less saturated, not vivid blue ── */}
      {/* Base: dark charcoal */}
      <div className="absolute inset-0 bg-[#080C14]/58" />
      {/* Vignette: gentle edges only */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 140% 110% at 50% 50%, transparent 30%, rgba(4,6,14,0.72) 100%)",
        }}
      />
      {/* Left warmth: stops at 60% so video breathes on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(6,8,18,0.85) 0%, rgba(10,14,30,0.45) 100%, transparent 50%)",
        }}
      />
      {/* Bottom: stats strip legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52"
        style={{
          background: "linear-gradient(to top, rgba(5,7,15,0.9) 0%, transparent 100%)",
        }}
      />
      {/* Grain */}
      <div className="grain-overlay absolute inset-0 opacity-[0.10]" />

      {/* ── Top accent bar ── */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange via-sky to-transparent" />

      {/* ── Content — vertically centered ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-14">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-orange" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.28em] text-orange">
              Sacred Journeys Await
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              className="m-0 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01 }}
            >
              {/* Line 1 */}
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <span className="font-heading block leading-[1.08] tracking-tight text-white"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}>
                  Journey With
                </span>
              </motion.span>

              {/* Line 2 — sky accent */}
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                <span className="font-heading block leading-[1.08] tracking-tight text-sky"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}>
                  Grace & Purpose
                </span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Sub-copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="font-body max-w-xs text-sm font-light leading-relaxed text-white sm:max-w-sm sm:text-[15px]">
              Explore the world with Salve Maria Tours & Travels. Every sacred
              pilgrimage curated with devotion — a journey your soul will
              always remember.
            </p>

            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white shadow-cta-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta-glow-hover sm:py-3.5"
              >
                Start Your Journey
                <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center rounded-full border border-white/25 px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-sky/60 hover:text-white sm:py-3.5"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Stats strip — pinned to bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14"
      >
        <div className="flex items-stretch gap-0 border-t border-white/10 pt-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-1 flex-col"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                paddingRight: i < STATS.length - 1 ? "clamp(0.75rem, 3vw, 2.5rem)" : 0,
                paddingLeft: i > 0 ? "clamp(0.75rem, 3vw, 2.5rem)" : 0,
              }}
            >
              <span className="font-heading text-2xl font-bold not-italic leading-none text-white sm:text-3xl">
                {s.value}
              </span>
              <span className="font-body mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll cue — hidden on mobile ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-10 right-6 z-20 hidden flex-col items-center gap-2 sm:flex sm:right-10 lg:right-14"
      >
        <span className="font-body [writing-mode:vertical-rl] rotate-180 text-[8px] font-bold uppercase tracking-[0.3em] text-white/25">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.div
            className="absolute top-0 h-1/2 w-full bg-sky"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}