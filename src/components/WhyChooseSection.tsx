"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt, FaGem, FaPlane } from "react-icons/fa";
import type { IconType } from "react-icons";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { FadeUp } from "./FadeUp";

const features: {
  icon: IconType;
  num: string;
  title: string;
  body: string;
  accent: "sky" | "orange";
}[] = [
    {
      icon: FaPlane,
      num: "01",
      title: "Flight Booking",
      body: "Domestic & international flights secured at the best fares — handled end-to-end so you can focus on the journey.",
      accent: "sky",
    },
    {
      icon: FaCalendarAlt,
      num: "02",
      title: "Complete Arrangements",
      body: "Hotels, cars, minibuses, buses, and local sightseeing — every detail coordinated under one roof.",
      accent: "orange",
    },
    {
      icon: FaGem,
      num: "03",
      title: "Best Value, Always",
      body: "3-star comfort to 7-star luxury — we match the right experience to your budget without compromise.",
      accent: "sky",
    },
  ];

export function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy py-14 sm:py-16"
    >
      {/* Background texture dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-sky/10 blur-[80px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <FadeUp>
          <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Why Us
                </span>
              </div>
              <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-white md:text-[40px]">
                Why Choose{" "}
                <span className="text-sky">Salve Maria</span>
              </h2>
            </div>
            <p className="font-body max-w-sm text-sm font-light leading-relaxed text-white/50 lg:text-right">
              Faithful planning, premium partners, and care at every step of your journey.
            </p>
          </div>
        </FadeUp>

        {/* ── Feature cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-5 md:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            const isSky = f.accent === "sky";

            return (
              <motion.article
                key={f.title}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7 transition-all duration-400 hover:bg-white/10 hover:border-white/15"
              >
                {/* Number — large faded bg */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-3 font-heading text-[80px] font-bold not-italic leading-none text-white/[0.04] select-none"
                >
                  {f.num}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${isSky
                    ? "bg-sky/15 text-sky group-hover:bg-sky group-hover:text-white"
                    : "bg-orange/15 text-orange group-hover:bg-orange group-hover:text-white"
                    }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                {/* Num label */}
                <span
                  className={`font-body mb-3 text-[10px] font-bold uppercase tracking-[0.25em] ${isSky ? "text-sky/60" : "text-orange/60"
                    }`}
                >
                  {f.num}
                </span>

                <h3 className="font-body text-base font-bold uppercase tracking-[0.1em] text-white">
                  {f.title}
                </h3>
                <p className="font-body mt-3 flex-1 text-sm font-light leading-relaxed text-white/55">
                  {f.body}
                </p>

                {/* Bottom accent line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${isSky ? "bg-sky" : "bg-orange"
                    }`}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Bottom stat strip ── */}
        <FadeUp delay={0.3}>
          <div className="mt-14 grid grid-cols-3 gap-0 rounded-2xl border border-white/8 bg-white/5 px-8 py-7">
            {[
              { val: "2,000+", lbl: "Happy Pilgrims" },
              { val: "15+", lbl: "Years Experience" },
              { val: "40+", lbl: "Sacred Routes" },
            ].map((s, i) => (
              <div
                key={s.lbl}
                className="flex flex-col items-center text-center"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <span className="font-heading text-2xl font-bold not-italic text-sky sm:text-3xl">
                  {s.val}
                </span>
                <span className="font-body mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}