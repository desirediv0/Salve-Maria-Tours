"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Our Kerala pilgrimage was prayerful and perfectly organized. Every hotel and Mass arrangement felt thoughtful.",
    name: "Mary & Joseph Thomas",
    place: "Kerala Pilgrimage",
    initials: "MJ",
    rating: 5,
  },
  {
    quote:
      "Salve Maria handled our Golden Triangle tour with grace — professional guides and seamless transport throughout.",
    name: "Anita D'Souza",
    place: "Golden Triangle",
    initials: "AD",
    rating: 5,
    featured: true,
  },
];

export function TestimonialSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-light-blue py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <FadeUp>
          <div className="mb-14 flex flex-col items-center text-center">
            <SectionLabel text="Testimonials" />
            <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
              What Our{" "}
              <span className="text-sky">Pilgrims Say</span>
            </h2>
          </div>
        </FadeUp>

        {/* ── Cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 sm:p-8 ${t.featured
                ? "bg-navy shadow-soft hover:shadow-[0_28px_70px_rgba(27,58,107,0.28)]"
                : "bg-white shadow-card hover:shadow-card-hover border border-gray-100"
                }`}
            >
              {/* Large decorative quote mark */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -top-2 right-6 select-none font-heading text-[96px] font-bold not-italic leading-none ${t.featured ? "text-white/[0.06]" : "text-navy/[0.05]"
                  }`}
              >
                &quot;
              </span>

              {/* Stars */}
              <div
                className="mb-5 flex gap-1"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-3.5 w-3.5 ${t.featured ? "text-orange" : "text-orange"
                      }`}
                    aria-hidden
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className={`font-body flex-1 text-base font-light leading-[1.85] ${t.featured ? "text-white/80" : "text-gray-600"
                  }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className={`my-6 h-px ${t.featured ? "bg-white/10" : "bg-gray-100"
                  }`}
              />

              {/* Attribution */}
              <figcaption className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-body text-xs font-bold ${t.featured
                    ? "bg-sky/20 text-sky"
                    : "bg-navy/8 text-navy"
                    }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className={`font-body text-sm font-semibold leading-tight ${t.featured ? "text-white" : "text-navy"
                      }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`font-body mt-0.5 text-[11px] font-light ${t.featured ? "text-white/45" : "text-gray-400"
                      }`}
                  >
                    {t.place}
                  </p>
                </div>

                {/* Verified badge */}
                <div
                  className={`ml-auto rounded-full px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-[0.15em] ${t.featured
                    ? "bg-white/10 text-white/50"
                    : "bg-sky/8 text-sky/70"
                    }`}
                >
                  Verified
                </div>
              </figcaption>

              {/* Bottom accent — only on non-featured */}
              {!t.featured && (
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky transition-all duration-500 group-hover:w-full" />
              )}
            </motion.figure>
          ))}
        </motion.div>

        {/* ── Trust strip ── */}
        <FadeUp delay={0.35}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <div className="flex -space-x-2">
              {["MJ", "AD", "SR", "KA"].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy font-body text-[9px] font-bold text-sky shadow-sm"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="font-body text-sm font-light text-gray-500">
              Trusted by{" "}
              <span className="font-semibold text-navy">2,000+ pilgrims</span>{" "}
              across India
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}