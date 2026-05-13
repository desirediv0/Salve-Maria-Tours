import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Salve Maria Tours & Travels in Gurgaon — phone, email, and enquiry form for pilgrimages and travel.",
};

const heroImage =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80";

const quickContacts = [
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 9958815430",
    sub: "Monday–Saturday: 9:00 AM – 5:00 PM",
    href: "tel:+919958815430",
    color: "orange" as const,
  },
  {
    icon: "✉",
    label: "Email Us",
    value: "info@salvemariatours.com",
    sub: "Reply within 1 business day",
    href: "mailto:info@salvemariatours.com",
    color: "sky" as const,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat instantly",
    sub: "+91 9958815430",
    href: "https://wa.me/919958815430",
    color: "green" as const,
  },
  {
    icon: "📍",
    label: "Visit Us",
    value: "Sector 102, Dwarka Express Way, Gurgaon 122005",
    sub: "",
    href: undefined,
    color: "navy" as const,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title="Contact Us"
        subtitle="We are here to help you plan your next sacred journey or holiday."
        imageSrc={heroImage}
        imageAlt="Travel planning essentials"
        tag="Get in Touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* ── Quick contact strip ── */}
      <section className="bg-light-blue/60 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 gap-0 divide-x divide-gray-200 lg:grid-cols-4">
            {quickContacts.map((c) => {
              const colorMap = {
                orange: "text-orange bg-orange/10 group-hover:bg-orange",
                sky: "text-sky bg-sky/10 group-hover:bg-sky",
                green: "text-[#25D366] bg-[#25D366]/10 group-hover:bg-[#25D366]",
                navy: "text-navy bg-navy/8 group-hover:bg-navy",
              };
              const inner = (
                <div className="group flex items-center gap-4 px-5 py-6 transition-all duration-200 hover:bg-white lg:px-8">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-300 group-hover:text-white ${colorMap[c.color]}`}
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400">
                      {c.label}
                    </p>
                    <p className="font-body mt-0.5 truncate text-sm font-semibold text-navy group-hover:text-navy">
                      {c.value}
                    </p>
                    <p className="font-body text-[11px] font-light text-gray-400">
                      {c.sub}
                    </p>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main contact section (info panel + form) ── */}
      <ContactSection showIntro={false} />

      {/* ── Map embed strip ── */}
      <section className="bg-light-blue/40 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-orange" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
              Find Us
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-card lg:col-span-2">
              <iframe
                title="Salve Maria Tours office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.671042732733!2d76.97441607550346!3d28.48911007574513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e078028723%3A0x5e22934898124619!2sSector%20102%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1715160000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div className="flex flex-col justify-between gap-5">
              <div className="flex-1 rounded-2xl bg-navy p-7">
                {/* Dot texture */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <p className="font-body text-[9px] font-bold uppercase tracking-[0.28em] text-orange">
                  Our Location
                </p>
                <p className="font-heading mt-3 text-lg font-bold not-italic leading-snug text-white">
                  Salve Maria Tours<br />& Travels
                </p>
                <div className="mt-4 space-y-2.5">
                  {[
                    { label: "Address", value: "Sector 102, Dwarka Express Way, Gurgaon 122005" },
                    { label: "Hours", value: "Monday–Saturday: 9:00 AM – 5:00 PM" },
                    { label: "Phone", value: "+91 9958815430" },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                        {row.label}
                      </p>
                      <p className="font-body mt-0.5 text-sm font-light leading-snug text-white/75">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions CTA */}
              <a
                href="https://maps.google.com/?q=Sector+102+Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-4 font-body text-sm font-semibold text-navy shadow-card transition-all hover:border-sky/30 hover:shadow-card-hover"
              >
                <span>📍</span>
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}