import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/ServicesSection";
import { PrimaryButtonLink } from "@/components/PremiumButtons";
import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flights, hotels, transport, customized tours, Catholic pilgrimages, and medical tourism — comprehensive travel services from Salve Maria Tours & Travels.",
};

const heroImage =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90";

const process = [
  {
    num: "01",
    title: "Share Your Vision",
    body: "Tell us your destination, dates, group size, and any special requirements — sacred, leisure, or medical.",
  },
  {
    num: "02",
    title: "We Design It",
    body: "Our team crafts a tailored itinerary with flights, stays, transport, and guides — all vetted and costed.",
  },
  {
    num: "03",
    title: "Confirm & Travel",
    body: "Approve the plan, make a secure booking, and travel with confidence. We support you every step of the way.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title="Our Services"
        subtitle="From takeoff to homecoming — we handle every detail so you can focus on the journey."
        imageSrc={heroImage}
        imageAlt="Airplane wing above clouds"
        tag="What We Offer"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* ── Intro + How It Works ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">

            {/* Left — intro copy */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  End-to-End Travel
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                Everything You Need,{" "}
                <span className="text-sky">All Under One Roof</span>
              </h2>
              <p className="font-body mt-5 text-base font-light leading-[1.9] text-gray-500 md:text-lg">
                Salve Maria Tours & Travels offers end-to-end travel planning
                for individuals, families, parish groups, and corporate teams.
                Share your goals — sacred sites, cultural highlights, or
                restorative leisure — and we will shape a seamless itinerary
                around your schedule and budget.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButtonLink href="/contact">
                  Request a Custom Quote
                </PrimaryButtonLink>
              </div>

              {/* Contact mini-card */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gray-100 bg-light-blue/50 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                  <FaPhoneAlt className="h-3.5 w-3.5 text-orange" />
                </div>
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                    Speak Directly
                  </p>
                  <a
                    href="tel:+919958815430"
                    className="font-body text-sm font-semibold text-navy transition-colors hover:text-sky"
                  >
                    +91 9958815430
                  </a>
                  <span className="font-body ml-2 text-xs text-gray-400">
                    Monday–Saturday: 9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right — How it works */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  How It Works
                </span>
              </div>
              <div className="space-y-0">
                {process.map((step, i) => (
                  <div
                    key={step.num}
                    className="group relative flex gap-6 pb-10 last:pb-0"
                  >
                    {/* Connector line */}
                    {i < process.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-100" />
                    )}

                    {/* Number circle */}
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange/25 bg-white font-body text-xs font-bold text-orange transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                      {step.num}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="font-body text-sm font-bold uppercase tracking-[0.12em] text-navy transition-colors group-hover:text-orange">
                        {step.title}
                      </h3>
                      <p className="font-body mt-2 text-sm font-light leading-relaxed text-gray-500">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid (existing component) ── */}
      <ServicesSection />

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-navy py-14 sm:py-16">
        {/* Dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky/10 blur-[80px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange/8 blur-[70px]"
        />
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-sky to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Talk to Us
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-white md:text-[42px]">
                Need Help Choosing{" "}
                <span className="text-sky">the Right Package?</span>
              </h2>
              <p className="font-body mt-5 text-base font-light leading-relaxed text-white/55">
                Our travel consultants are available Monday–Saturday: 9:00 AM – 5:00 PM IST
                — ready to build something perfect for your group.
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButtonLink href="/contact">
                Speak With Us
              </PrimaryButtonLink>
              <a
                href="https://wa.me/919958815430"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/12 hover:text-[#25D366]"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}