"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import {
  FaChurch,
  FaCity,
  FaFortAwesome,
  FaLandmark,
  FaLeaf,
  FaMountain,
  FaPrayingHands,
  FaUmbrellaBeach,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";

const destinations: {
  icon: IconType;
  name: string;
  sub: string;
  tag: string;
  src: string;
}[] = [
    {
      icon: FaLandmark,
      name: "Golden Triangle",
      sub: "Delhi · Agra · Jaipur",
      tag: "North India",
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaLeaf,
      name: "Kerala Backwaters",
      sub: "God's Own Country",
      tag: "South India",
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc39c994?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaUmbrellaBeach,
      name: "Goa",
      sub: "Sun, Sand & Sacred Sites",
      tag: "West India",
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaChurch,
      name: "Vellankani",
      sub: '"Lourdes of the East"',
      tag: "South India",
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaMountain,
      name: "Shimla & Manali",
      sub: "Snow & Serenity",
      tag: "Hill Stations",
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaCity,
      name: "Mumbai",
      sub: "City of Dreams",
      tag: "West India",
      src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaPrayingHands,
      name: "Rishikesh",
      sub: "Spiritual Gateway",
      tag: "North India",
      src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=90",
    },
    {
      icon: FaFortAwesome,
      name: "Rajasthan",
      sub: "Royal Heritage",
      tag: "North India",
      src: "https://images.unsplash.com/photo-1595658658481-bbf7b8c1c6a5?auto=format&fit=crop&w=900&q=90",
    },
  ];

export function DestinationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="overflow-hidden bg-light-blue py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <FadeUp>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <SectionLabel text="Destinations" />
              <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                Explore{" "}
                <span className="text-sky">Breathtaking</span>{" "}
                Destinations
              </h2>
              <p className="font-body mt-4 text-base font-light leading-relaxed text-gray-500">
                From sacred shores to royal forts — curated journeys across India.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy shadow-card transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                aria-label="Previous destination"
              >
                <HiArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy bg-navy text-white shadow-card transition-all duration-300 hover:bg-navy/85"
                aria-label="Next destination"
              >
                <HiArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </FadeUp>

        {/* ── Carousel ── */}
        <div className="mt-12 overflow-visible" ref={emblaRef}>
          <div className="flex gap-4">
            {destinations.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.name}
                  className="min-w-0 shrink-0 grow-0 basis-[78vw] sm:basis-[280px] lg:basis-[300px]"
                >
                  <article className="group relative h-[400px] w-full overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                    {/* Image */}
                    <Image
                      src={d.src}
                      alt={d.name}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      sizes="(max-width: 640px) 78vw, 300px"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/30 to-transparent" />

                    {/* Tag — top left */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5">
                      <span className="h-px w-4 bg-orange" />
                      <span className="font-body text-[9px] font-bold uppercase tracking-[0.25em] text-white/80">
                        {d.tag}
                      </span>
                    </div>

                    {/* Enquire arrow — top right */}
                    <Link
                      href="/contact"
                      className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-navy"
                      aria-label={`Enquire about ${d.name}`}
                    >
                      <HiArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      {/* Icon circle */}
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </div>
                      <h3 className="font-heading text-xl font-bold not-italic leading-tight text-white">
                        {d.name}
                      </h3>
                      <p className="font-body mt-1 text-xs font-light text-white/70">
                        {d.sub}
                      </p>

                      {/* Enquire CTA — slides up on hover */}
                      <div className="mt-4 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        <Link
                          href="/contact"
                          className="font-body inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange transition hover:gap-2.5"
                        >
                          Enquire Now
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile nav dots hint */}
        <p className="mt-6 text-center font-body text-xs font-medium text-gray-400 sm:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}