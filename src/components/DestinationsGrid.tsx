"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import type { DestinationCard } from "@/lib/destinations-page";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function DestinationsGrid({ items }: { items: DestinationCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-14 sm:grid-cols-2 sm:px-8 md:py-20 lg:grid-cols-3 lg:px-14"
    >
      {items.map((d, i) => {
        /* Alternate card heights for editorial rhythm */
        const isTall = i % 3 === 0;
        return (
          <motion.div
            key={d.slug}
            role="article"
            variants={staggerItem}
            className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover ${isTall ? "min-h-[440px]" : "min-h-[360px]"
              }`}
          >
            {/* Background image */}
            <Image
              src={d.image}
              alt={d.title}
              fill
              quality={90}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Overlay stack */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/30 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,10,20,0.96) 0%, rgba(6,10,20,0.4) 50%, transparent 100%)",
              }}
            />

            {/* Tag — top left with eyebrow line */}
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="h-px w-3 bg-orange" />
              <span className="font-body text-[9px] font-bold uppercase tracking-[0.25em] text-white/75">
                {d.tag}
              </span>
            </div>

            {/* Enquire arrow — top right, shows on hover */}
            <Link
              href="/contact"
              aria-label={`Enquire about ${d.title}`}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-navy"
            >
              <HiArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Bottom content */}
            <div className="relative z-10 p-6">
              <h2 className="font-heading text-2xl font-bold not-italic leading-tight text-white md:text-[26px]">
                {d.title}
              </h2>

              {/* Highlights — inline with separators */}
              <p className="font-body mt-2 text-xs font-light leading-relaxed text-white/60">
                {d.highlights.join(" · ")}
              </p>

              {/* Highlight pills — slide up on hover */}
              <div className="mt-3 flex flex-wrap gap-1.5 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {d.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 font-body text-[10px] font-medium text-white/80 backdrop-blur-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-2.5 font-body text-xs font-bold uppercase tracking-[0.15em] text-white shadow-cta-glow transition-all duration-300 hover:shadow-cta-glow-hover"
              >
                Enquire Now
                <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}