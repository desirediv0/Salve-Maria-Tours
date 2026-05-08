"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiClock,
  HiGlobeAlt,
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "./ContactForm";
import { slideInLeft, slideInRight } from "@/lib/motion";
import { FadeUp } from "./FadeUp";
import { SectionLabel } from "./SectionLabel";

const contactItems = [
  {
    icon: HiLocationMarker,
    label: "Address",
    value: "Adaani Oyester Grande, Sector 102, Dwarka Express Way, Gurgaon 122005",
    href: undefined,
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 9958815430",
    href: "tel:+919958815430",
  },
  {
    icon: HiMail,
    label: "Email",
    value: "info@salvemariatours.com",
    href: "mailto:info@salvemariatours.com",
  },
  {
    icon: HiGlobeAlt,
    label: "Website",
    value: "www.salvemariatours.com",
    href: "https://www.salvemariatours.com",
  },
  {
    icon: HiClock,
    label: "Hours",
    value: "Monday–Saturday: 9:00 AM – 5:00 PM",
    href: undefined,
  },
];

export function ContactSection({ showIntro = true }: { showIntro?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Intro header ── */}
        {showIntro && (
          <FadeUp>
            <div className="mb-16 flex flex-col items-center text-center">
              <SectionLabel text="Contact" />
              <h2 className="font-heading mt-4 text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                Let&apos;s Plan Your{" "}
                <span className="text-sky">Next Journey</span>
              </h2>
              <p className="font-body mt-4 max-w-md text-base font-light leading-relaxed text-gray-500">
                We&apos;d love to help you plan your next pilgrimage or getaway.
                Reach out — we respond within one business day.
              </p>
            </div>
          </FadeUp>
        )}

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">

          {/* ── Left: Navy info panel ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="relative overflow-hidden rounded-2xl bg-navy p-8 lg:col-span-2 sm:p-10"
          >
            {/* Dot texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-sky/15 blur-[60px]"
            />

            <div className="relative">
              {/* Panel header */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-orange" />
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-orange">
                  Our Office
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold not-italic leading-tight text-white">
                Contact Information
              </h3>
              <p className="font-body mt-2 text-sm font-light leading-relaxed text-white/50">
                Gurgaon office — always happy to hear from you.
              </p>

              {/* Contact items */}
              <ul className="mt-8 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="group flex items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-sky transition-colors group-hover:bg-sky group-hover:text-white">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                      </div>
                      <div>
                        <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                          {item.label}
                        </p>
                        <p className="font-body mt-0.5 text-sm font-light leading-snug text-white/80 transition-colors group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("https") ? "_blank" : undefined}
                          rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Divider */}
              <div className="my-8 h-px bg-white/8" />

              {/* Social + WhatsApp */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919958815430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 px-4 py-3 transition-all hover:bg-[#25D366]/20"
                >
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  <span className="font-body text-sm font-medium text-[#25D366]">
                    Chat on WhatsApp
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/salvemariatoursandtravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 transition-all hover:bg-white/10"
                >
                  <FaInstagram className="h-4 w-4 text-pink-400" />
                  <span className="font-body text-sm font-medium text-white/70">
                    @salvemariatoursandtravels
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInRight}
            className=" lg:col-span-3"
          >
            <h3 className="font-heading mb-1 text-xl font-bold not-italic text-navy">
              Send Us a Message
            </h3>
            <p className="font-body mb-8 text-sm font-light text-gray-400">
              Fill in the details and we&apos;ll get back to you shortly.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}