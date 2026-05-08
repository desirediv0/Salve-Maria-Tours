import Link from "next/link";
import Image from "next/image";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FacebookIcon, InstagramIcon } from "./brand-icons";
import { NewsletterSignup } from "./NewsletterSignup";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pilgrimages", label: "Pilgrimages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Complete Travel Assistance",
  "Accommodation",
  "Transport",
  "Customized Packages",
  "Catholic Pilgrimages",
  "Medical Tourism",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-dark text-white">

      {/* ── Background texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Sky glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky/8 blur-[80px]"
      />
      {/* Orange glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange/5 blur-[70px]"
      />

      {/* ── Top accent bar ── */}
      <div className="h-[2px] bg-gradient-to-r from-orange via-sky to-transparent" />

      {/* ── Main grid ── */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Col 1 — Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="group inline-block max-w-full">
              <Image
                src="/logo2.png"
                alt="Salve Maria Tours & Travels"
                width={320}
                height={90}
                className="h-12 w-auto max-h-[52px] max-w-full rounded-lg shadow-lg ring-1 ring-white/10 transition-all group-hover:ring-sky/40 sm:max-h-14"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </Link>

            <p className="font-body text-sm font-light leading-relaxed text-white/55">
              Journey With Grace — Catholic pilgrimage and travel experiences
              rooted in faith, comfort, and care.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/salvemariatoursandtravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-sky/50 hover:bg-sky/15 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-sky/50 hover:bg-sky/15 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919958815430"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-5 bg-orange" />
              <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 py-1.5 font-body text-sm font-light text-white/60 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-sky transition-all duration-300 group-hover:w-3 shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-5 bg-orange" />
              <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Services
              </h3>
            </div>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 py-1.5 font-body text-sm font-light text-white/60 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-sky transition-all duration-300 group-hover:w-3 shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Newsletter */}
          <div className="space-y-6">
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-px w-5 bg-orange" />
                <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                  Reach Us
                </h3>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <HiLocationMarker className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky/70" aria-hidden />
                  <span className="font-body text-sm font-light leading-snug text-white/55">
                    Adaani Oyester Grande, Sector 102<br />Dwarka Express Way, Gurgaon 122005
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919958815430"
                    className="flex items-center gap-3 font-body text-sm font-light text-white/55 transition-colors hover:text-white"
                  >
                    <HiPhone className="h-3.5 w-3.5 shrink-0 text-sky/70" aria-hidden />
                    +91 9958815430
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@salvemariatours.com"
                    className="flex items-center gap-3 font-body text-sm font-light text-white/55 transition-colors hover:text-white"
                  >
                    <HiMail className="h-3.5 w-3.5 shrink-0 text-sky/70" aria-hidden />
                    info@salvemariatours.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl border border-white/8 bg-white/4 p-4">
              <p className="font-body mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Newsletter
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8 lg:px-14">
          <p className="font-body text-xs font-light text-white/35">
            Copyright © 2026 Salve Maria Tours — All Rights Reserved
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange/60" />
            <p className="font-body text-xs font-light text-white/30">
              Gurgaon, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}