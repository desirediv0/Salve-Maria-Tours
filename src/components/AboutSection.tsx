"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";
import { SecondaryNavyLink } from "./PremiumButtons";

const mainImg =
  "/travel-2.jpeg";
const overlayImg =
  "/travel.jpg";

const pillars = [
  {
    num: "01",
    title: "Global Connections",
    text: "Trusted partners worldwide for flights, stays, and ground support.",
  },
  {
    num: "02",
    title: "Personalised Care",
    text: "Itineraries shaped around your pace, budget, and spiritual goals.",
  },
  {
    num: "03",
    title: "Integrity First",
    text: "Transparent pricing and responsive support before and during travel.",
  },
  {
    num: "04",
    title: "Memorable Journeys",
    text: "Sacred sites, cultural depth, and comfort woven into every detail.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-14">

        {/* ── Left: Image composition ── */}
        <FadeUp>
          <div className="relative mx-auto max-w-xl lg:mx-0">
            {/* Main image */}
            <div className="relative h-[440px] overflow-hidden rounded-2xl sm:h-[520px]">
              <Image
                src={mainImg}
                alt="Sacred architecture"
                fill
                quality={90}
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              {/* Navy-to-transparent overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating overlay image — top right */}
            <div className="absolute -right-5 top-8 hidden h-[200px] w-[44%] overflow-hidden rounded-2xl shadow-soft ring-4 ring-white md:block lg:-right-10 lg:top-12 lg:h-[240px]">
              <Image
                src={overlayImg}
                alt="Pilgrimage site"
                fill
                quality={90}
                className="object-cover transition-transform duration-700 hover:scale-[1.06]"
                sizes="240px"
              />
            </div>

            {/* Trust badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-7 left-4 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-soft ring-1 ring-gray-100 sm:left-6"
            >
              {/* Orange accent dot */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                <span className="font-heading text-lg font-bold not-italic text-orange">15</span>
              </div>
              <div>
                <p className="font-body text-[9px] font-bold uppercase tracking-[0.25em] text-orange">
                  Years Trusted
                </p>
                <p className="font-heading mt-0.5 text-sm font-bold not-italic text-navy">
                  2,000+ Happy Pilgrims
                </p>
              </div>
            </motion.div>

            {/* Decorative corner lines */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-sky/30 rounded-tl-lg"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-orange/25 rounded-br-lg hidden md:block"
            />
          </div>
        </FadeUp>

        {/* ── Right: Content ── */}
        <div className="space-y-10 pt-8 lg:pt-0">
          <FadeUp delay={0.1}>
            <SectionLabel text="Who We Are" />
            <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-navy md:text-4xl lg:text-[42px]">
              More Than Just a<br />
              <span className="text-sky">Travel Agency</span>
            </h2>
            <p className="font-body mt-5 text-base font-light leading-[1.9] text-gray-500 md:text-lg">
              Salve Maria Tours epitomizes seamless travel for individuals and
              groups alike. With global connections and deeply personal care,
              we go beyond logistics — crafting journeys that nourish the soul.
            </p>
          </FadeUp>

          {/* Pillars — numbered list */}
          <div className="space-y-0 divide-y divide-gray-100">
            {pillars.map((p, i) => (
              <FadeUp key={p.num} delay={0.18 + i * 0.07}>
                <div className="group flex items-start gap-5 py-4 transition-all duration-300 hover:pl-1">
                  {/* Number */}
                  <span className="font-body mt-0.5 w-7 shrink-0 text-[11px] font-bold tabular-nums text-orange/70 group-hover:text-orange transition-colors">
                    {p.num}
                  </span>
                  {/* Text */}
                  <div className="flex-1">
                    <p className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-navy/90 group-hover:text-navy transition-colors">
                      {p.title}
                    </p>
                    <p className="font-body mt-1 text-sm font-light leading-relaxed text-gray-500">
                      {p.text}
                    </p>
                  </div>
                  {/* Hover arrow */}
                  <span className="mt-0.5 shrink-0 text-sky opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.42}>
            <SecondaryNavyLink href="/about">Discover Our Story</SecondaryNavyLink>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}