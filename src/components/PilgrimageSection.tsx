"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SecondaryNavyLink } from "./PremiumButtons";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";

const places = [
  {
    name: "Vellankani Basilica",
    region: "Tamil Nadu",
    src: "/velankanni-tamilnadu.jpg",
  },
  {
    name: "Basilica of Bom Jesus",
    region: "Goa",
    src: "/basilica-of-bom-jesus-goa.webp",
  },
  {
    name: "Sacred Heart Cathedral",
    region: "Delhi",
    src: "/sacred-heart-of-cathedral-church1.jpg",
  },
  {
    name: "St. Alphonsa Church",
    region: "Kerala",
    src: "/st-alphonsa-tomb.jpg",
  },
];

const inclusions = [
  { num: "01", text: "Daily Holy Mass arrangements" },
  { num: "02", text: "Experienced spiritual guides" },
  { num: "03", text: "Comfortable AC accommodation" },
  { num: "04", text: "All-inclusive tour packages" },
];

function MosaicImage({
  place,
  className,
}: {
  place: (typeof places)[0];
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl ${className ?? ""}`}
    >
      <Image
        src={place.src}
        alt={place.name}
        fill
        quality={90}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        sizes="(max-width: 1024px) 50vw, 35vw"
      />
      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      {/* Label */}
      <div className="absolute bottom-3 left-3 right-3">
        <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-sky/90">
          {place.region}
        </p>
        <p className="font-body mt-0.5 text-xs font-semibold leading-tight text-white/95 md:text-sm">
          {place.name}
        </p>
      </div>
    </div>
  );
}

export function PilgrimageSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-14">

        {/* ── Left: Mosaic ── */}
        <FadeUp className="order-2 lg:order-1 lg:col-span-7">
          <div className="grid grid-cols-3 grid-rows-3 gap-2.5 sm:h-[540px] lg:h-[580px]">
            {/* Big cell — top-left 2×2 */}
            <MosaicImage
              place={places[0]}
              className="col-span-2 row-span-2 min-h-[200px] sm:min-h-0"
            />
            {/* Top-right */}
            <MosaicImage
              place={places[1]}
              className="col-start-3 row-start-1 min-h-[140px] sm:min-h-0"
            />
            {/* Mid-right */}
            <MosaicImage
              place={places[2]}
              className="col-start-3 row-start-2 min-h-[140px] sm:min-h-0"
            />
            {/* Bottom full-width */}
            <MosaicImage
              place={places[3]}
              className="col-span-3 row-start-3 min-h-[160px] sm:min-h-0"
            />
          </div>

          {/* Floating badge on mosaic */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="-mt-4 ml-4 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-soft ring-1 ring-gray-100"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange/10 font-body text-sm font-bold text-orange">
              40+
            </span>
            <span className="font-body text-xs font-semibold text-navy/75">
              Sacred sites across India & abroad
            </span>
          </motion.div>
        </FadeUp>

        {/* ── Right: Content ── */}
        <div className="order-1 space-y-8 lg:order-2 lg:col-span-5">
          <FadeUp delay={0.05}>
            <SectionLabel text="Sacred Journeys" />
            <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
              Cathedrals & Shrines{" "}
              <span className="text-sky">Across India</span>
            </h2>
            <p className="font-body mt-5 text-base font-light leading-[1.9] text-gray-500 md:text-lg">
              We provide comprehensive pilgrimages across India — seamless
              travel coordination, comfortable accommodation, daily Holy Mass,
              and experienced spiritual guides at every step.
            </p>
          </FadeUp>

          {/* Inclusions — numbered */}
          <div className="space-y-0 divide-y divide-gray-100">
            {inclusions.map((item, i) => (
              <FadeUp key={item.num} delay={0.12 + i * 0.07}>
                <div className="group flex items-center gap-4 py-3.5 transition-all duration-300 hover:pl-1">
                  <span className="font-body w-7 shrink-0 text-[11px] font-bold tabular-nums text-orange/65 transition-colors group-hover:text-orange">
                    {item.num}
                  </span>
                  <span className="font-body flex-1 text-sm font-medium text-navy/80 group-hover:text-navy transition-colors">
                    {item.text}
                  </span>
                  <span className="shrink-0 text-sky opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.38}>
            <SecondaryNavyLink href="/pilgrimages">
              Explore Pilgrimages
            </SecondaryNavyLink>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}