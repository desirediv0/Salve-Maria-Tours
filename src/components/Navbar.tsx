"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiPhone, HiXMark, HiBars3 } from "react-icons/hi2";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pilgrimages", label: "Pilgrimages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isGlass = !scrolled;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isGlass
          ? "bg-transparent"
          : "bg-white/96 shadow-nav-scrolled backdrop-blur-xl"
          }`}
      >
        {/* Top accent line — only on glass */}
        <div
          className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-sky to-transparent transition-opacity duration-500 ${isGlass ? "opacity-100" : "opacity-0"
            }`}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">

          {/* ── Logo ── */}
          {/* outline-none only — focus-visible:ring causes persistent orange box in Chrome */}
          <Link
            href="/"
            className="flex shrink-0 items-center outline-none"
            onClick={() => setOpen(false)}
          >
            <Image
              src={isGlass ? "/logo2.png" : "/logo.png"}
              alt="Salve Maria Tours & Travels"
              width={320}
              height={90}
              priority
              className={`h-10 w-auto max-h-12 max-w-[min(320px,calc(100vw-10rem))] rounded-lg sm:h-14 sm:max-h-14 ${isGlass ? "drop-shadow-md" : ""}`}
              sizes="(max-width: 1024px) min(320px, calc(100vw - 10rem)), 320px"
            />
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden items-center lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 font-body text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-md ${isGlass
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-navy/65 hover:text-navy"
                    }`}
                >
                  {l.label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-orange transition-all duration-300 ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    style={{ transformOrigin: "left" }}
                  />
                  {/* Hover underline */}
                  {!active && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-sky scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop right actions ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919958815430"
              className={`flex items-center gap-2 rounded-full border px-4 py-2 font-body text-sm font-semibold transition-all duration-300 ${isGlass
                ? "border-white/20 bg-white/8 text-white/85 hover:bg-white/16 hover:border-white/35 backdrop-blur-md"
                : "border-gray-200 bg-light-blue text-navy hover:bg-sky/10 hover:border-sky/30"
                }`}
            >
              <HiPhone className="h-3.5 w-3.5 text-orange" aria-hidden />
              +91 9958815430
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-orange px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all duration-300 hover:shadow-cta-glow-hover hover:-translate-y-px"
            >
              Book Now
            </Link>
          </div>

          {/* ── Mobile right cluster ── */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919958815430"
              aria-label="Call us"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-2 font-body text-xs font-semibold transition-all duration-300 ${isGlass
                ? "border-white/20 bg-white/10 text-white backdrop-blur-md"
                : "border-gray-200 bg-light-blue text-navy"
                }`}
            >
              <HiPhone className="h-3.5 w-3.5 text-orange" />
              <span className="hidden min-[380px]:inline">Call</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${isGlass
                ? "border-white/25 bg-white/12 text-white hover:bg-white/20 backdrop-blur-md"
                : "border-transparent bg-navy text-white hover:bg-navy/85"
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiXMark className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiBars3 className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence initial={false}>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(320px,90vw)] flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                <Link
                  href="/"
                  className="flex min-w-0 max-w-[calc(100%-3rem)] items-center"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="Salve Maria Tours & Travels"
                    width={320}
                    height={90}
                    className="h-9 w-auto max-h-10 rounded-lg sm:h-10"
                    sizes="280px"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <HiXMark className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-4 py-4">
                {links.map((l, i) => {
                  const active = pathname === l.href;
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-body text-sm font-semibold transition-all duration-200 ${active
                          ? "bg-light-blue text-navy"
                          : "text-gray-600 hover:bg-gray-50 hover:text-navy"
                          }`}
                      >
                        {l.label}
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="border-t border-gray-100 px-4 pb-8 pt-4">
                <a
                  href="tel:+919958815430"
                  className="mb-3 flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-light-blue py-3 font-body text-sm font-semibold text-navy transition-colors hover:bg-sky/10"
                >
                  <HiPhone className="h-4 w-4 text-orange" />
                  +91 9958815430
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-orange py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all hover:shadow-cta-glow-hover"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}