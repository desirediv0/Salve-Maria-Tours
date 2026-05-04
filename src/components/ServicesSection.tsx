"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBus,
  FaChurch,
  FaHeartbeat,
  FaHotel,
  FaMapMarkedAlt,
  FaPlane,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";

const services: {
  icon: IconType;
  title: string;
  description: string;
  tag: string;
  accent: "sky" | "orange" | "navy";
}[] = [
    {
      icon: FaPlane,
      title: "Complete Travel Assistance",
      description:
        "Flight booking, visa processing & full itinerary planning from first call to safe return.",
      tag: "Most Popular",
      accent: "sky",
    },
    {
      icon: FaHotel,
      title: "Accommodation",
      description:
        "Hotels & resorts for every budget — comfortable stays to luxury 5-star properties.",
      tag: "All Budgets",
      accent: "orange",
    },
    {
      icon: FaBus,
      title: "Transport Solutions",
      description:
        "Cabs, luxury minibus, trains & flights — seamless ground and air transport.",
      tag: "Door to Door",
      accent: "navy",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Customized Packages",
      description:
        "Tailor-made itineraries for families, groups, honeymoons & corporates.",
      tag: "Personalised",
      accent: "sky",
    },
    {
      icon: FaChurch,
      title: "Catholic Pilgrimages",
      description:
        "Sacred tours to India's cathedrals, shrines & European holy sites.",
      tag: "Signature Service",
      accent: "orange",
    },
    {
      icon: FaHeartbeat,
      title: "Medical Tourism",
      description:
        "Expert-guided medical travel with top hospitals and comfortable recovery stays.",
      tag: "Specialised",
      accent: "navy",
    },
  ];

const accentStyles = {
  sky: {
    iconBg: "bg-sky/10",
    iconText: "text-sky",
    iconHoverBg: "group-hover:bg-sky",
    tagBg: "bg-sky/10",
    tagText: "text-sky",
    borderHover: "group-hover:border-t-sky",
    arrow: "text-sky",
  },
  orange: {
    iconBg: "bg-orange/10",
    iconText: "text-orange",
    iconHoverBg: "group-hover:bg-orange",
    tagBg: "bg-orange/10",
    tagText: "text-orange",
    borderHover: "group-hover:border-t-orange",
    arrow: "text-orange",
  },
  navy: {
    iconBg: "bg-navy/8",
    iconText: "text-navy",
    iconHoverBg: "group-hover:bg-navy",
    tagBg: "bg-navy/8",
    tagText: "text-navy",
    borderHover: "group-hover:border-t-navy",
    arrow: "text-navy",
  },
};

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-light-blue py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <FadeUp>
          <div className="flex flex-col items-center text-center">
            <SectionLabel text="What We Offer" />
            <h2 className="font-heading mt-4 max-w-xl text-3xl font-bold not-italic leading-tight text-navy md:text-4xl lg:text-[44px]">
              Services Crafted for{" "}
              <span className="text-sky">Every Journey</span>
            </h2>
            <p className="font-body mt-4 max-w-lg text-base font-light leading-relaxed text-gray-500">
              From sacred pilgrimages to leisure getaways — comprehensive
              travel solutions, all under one roof.
            </p>
          </div>
        </FadeUp>

        {/* ── Cards grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const a = accentStyles[s.accent];

            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white bg-white p-7 shadow-card transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-card-hover border-t-2 border-t-transparent ${a.borderHover}`}
              >
                {/* Tag — top right */}
                <span
                  className={`absolute right-5 top-5 rounded-full px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-[0.2em] ${a.tagBg} ${a.tagText}`}
                >
                  {s.tag}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${a.iconBg} ${a.iconText} transition-colors duration-300 ${a.iconHoverBg} group-hover:text-white`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                {/* Text */}
                <h3 className="font-body text-base font-semibold leading-snug text-navy">
                  {s.title}
                </h3>
                <p className="font-body mt-2.5 flex-1 text-sm font-light leading-relaxed text-gray-500">
                  {s.description}
                </p>

                {/* CTA */}
                <Link
                  href="/services"
                  className={`font-body mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:gap-2.5 ${a.arrow}`}
                >
                  Learn more
                  <span aria-hidden className="text-sm">→</span>
                </Link>

                {/* Bottom accent line — reveals on hover */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${s.accent === "sky"
                    ? "bg-sky"
                    : s.accent === "orange"
                      ? "bg-orange"
                      : "bg-navy"
                    }`}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <FadeUp delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white bg-white px-8 py-8 shadow-card sm:flex-row sm:justify-between">
            <div>
              <p className="font-heading text-xl font-bold not-italic text-navy">
                Can&apos;t find what you need?
              </p>
              <p className="font-body mt-1 text-sm font-light text-gray-500">
                We build custom packages for groups, corporates & special occasions.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex shrink-0 items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all duration-300 hover:shadow-cta-glow-hover hover:-translate-y-px"
            >
              Talk to Us →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}