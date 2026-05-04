"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  /** Optional breadcrumb trail e.g. [{label:"Home",href:"/"},{label:"About"}] */
  breadcrumbs?: Crumb[];
  /** Optional small eyebrow tag above title */
  tag?: string;
};

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  breadcrumbs,
  tag,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden md:min-h-[58vh]">

      {/* ── Image ── */}
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Overlay stack ── */}
      {/* Base darkness */}
      <div className="absolute inset-0 bg-navy/65" />
      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 55% 50%, transparent 20%, rgba(15,30,61,0.8) 100%)",
        }}
      />
      {/* Left panel for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,30,61,0.92) 0%, rgba(27,58,107,0.55) 42%, transparent 70%)",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f1e3d]/70 to-transparent" />
      {/* Grain */}
      <div className="grain-overlay absolute inset-0 opacity-[0.15]" />

      {/* ── Top accent bar ── */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-sky to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow tag */}
          {tag && (
            <motion.div
              variants={fadeInUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-orange" />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                {tag}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl font-bold not-italic leading-tight tracking-tight text-white md:text-5xl lg:text-[58px]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl font-body text-base font-light leading-relaxed text-white/70 md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              variants={fadeInUp}
              aria-label="Breadcrumb"
              className="mt-7 flex items-center gap-1.5"
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <HiChevronRight className="h-3 w-3 text-white/30" aria-hidden />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="font-body text-xs font-medium text-white/50 transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-body text-xs font-semibold text-sky/90" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}
        </motion.div>
      </div>

      {/* ── Decorative corner bracket ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-8 hidden h-14 w-14 border-b-2 border-r-2 border-sky/20 lg:block"
      />
    </section>
  );
}