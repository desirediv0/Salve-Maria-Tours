"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { PILGRIMAGE_BY_REGION } from "@/lib/pilgrimages";

const tabs = [
  { id: "south" as const, label: "South India", count: 0 },
  { id: "west" as const, label: "West India", count: 0 },
  { id: "north" as const, label: "North India", count: 0 },
];

const regionAccent: Record<"south" | "west" | "north", {
  tag: string;
  tagText: string;
  dot: string;
}> = {
  south: { tag: "bg-sky/10", tagText: "text-sky", dot: "bg-sky" },
  west: { tag: "bg-orange/10", tagText: "text-orange", dot: "bg-orange" },
  north: { tag: "bg-navy/8", tagText: "text-navy", dot: "bg-navy" },
};

export function PilgrimagesExplorer() {
  const [region, setRegion] = useState<(typeof tabs)[number]["id"]>("south");
  const sites = PILGRIMAGE_BY_REGION[region];
  const accent = regionAccent[region];

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-14">

      {/* ── Region tabs ── */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {tabs.map((t) => {
            const active = region === t.id;
            const a = regionAccent[t.id];
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setRegion(t.id)}
                className={`relative rounded-full px-5 py-2.5 font-body text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${active
                    ? "bg-navy text-white shadow-card"
                    : "border border-gray-200 bg-white text-navy/65 hover:text-navy hover:border-gray-300 hover:-translate-y-px"
                  }`}
              >
                {/* Active region accent dot */}
                {active && (
                  <motion.span
                    layoutId="tab-dot"
                    className={`absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full ${a.dot}`}
                  />
                )}
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Count badge */}
        <motion.div
          key={region}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="h-px w-5 bg-orange" />
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
            {sites.length} sacred site{sites.length !== 1 ? "s" : ""}
          </span>
        </motion.div>
      </div>

      {/* ── Cards grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={region}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {sites.map((site, i) => (
            <motion.article
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group flex w-[82vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover sm:w-auto sm:max-w-none sm:shrink"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />

                {/* Region badge */}
                <span
                  className={`absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm ${accent.tag} ${accent.tagText}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                  {tabs.find((x) => x.id === region)?.label}
                </span>

                {/* Hover CTA — bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-400 group-hover:translate-y-0">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 bg-orange/90 py-3 font-body text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm"
                  >
                    Enquire Now
                    <HiArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-sky">
                  {site.location}
                </p>
                <h2 className="font-heading mt-1.5 text-lg font-bold not-italic leading-tight text-navy md:text-xl">
                  {site.name}
                </h2>
                <p className="font-body mt-3 flex-1 text-sm font-light leading-relaxed text-gray-500">
                  {site.description}
                </p>

                {/* Footer row */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <Link
                    href="/contact"
                    className="font-body text-xs font-bold uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:text-orange"
                  >
                    View Details →
                  </Link>
                  {/* Enquire pill */}
                  <Link
                    href="/contact"
                    className="rounded-full bg-navy/5 px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-navy transition-all hover:bg-navy hover:text-white"
                  >
                    Book
                  </Link>
                </div>
              </div>

              {/* Bottom accent line */}
              <span
                className={`h-[2px] w-0 transition-all duration-500 group-hover:w-full ${region === "south" ? "bg-sky" : region === "west" ? "bg-orange" : "bg-navy"
                  }`}
              />
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}