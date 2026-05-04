import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DestinationsGrid } from "@/components/DestinationsGrid";
import { DESTINATION_PAGE_CARDS } from "@/lib/destinations-page";
import { PrimaryButtonLink } from "@/components/PremiumButtons";

export const metadata: Metadata = {
  title: "India Destinations",
  description:
    "Discover Golden Triangle, Kerala, Goa, hill stations, and more — curated India destinations with Salve Maria Tours & Travels.",
};

const heroImage =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80";

const regions = [
  { label: "North India", count: 2, color: "navy" as const },
  { label: "South India", count: 1, color: "sky" as const },
  { label: "West India", count: 1, color: "orange" as const },
  { label: "Hill Stations", count: 1, color: "sky" as const },
  { label: "Adventure", count: 1, color: "navy" as const },
];

export default function DestinationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title="India Destinations"
        subtitle="Heritage cities, sacred shores, and mountain retreats — crafted with care for pilgrims and travellers alike."
        imageSrc={heroImage}
        imageAlt="Scenic travel destination in India"
        tag="Explore India"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />

      {/* ── Intro + Region pills ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">

            {/* Left — copy */}
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Curated for You
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                Find Your Perfect{" "}
                <span className="text-sky">India Journey</span>
              </h2>
              <p className="font-body mt-5 text-base font-light leading-[1.9] text-gray-500 md:text-lg">
                Whether you long for the Taj at sunrise, the backwaters of
                Kerala, or the quiet chapels of the Himalayas — our destination
                specialists design balanced itineraries with reverence, comfort,
                and authentic local encounters.
              </p>
              <div className="mt-8">
                <PrimaryButtonLink href="/contact">
                  Plan My Trip
                </PrimaryButtonLink>
              </div>
            </div>

            {/* Right — region pills + stat */}
            <div className="lg:max-w-xs xl:max-w-sm">
              <p className="font-body mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Browse by Region
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r.label}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs font-semibold transition-all duration-200 hover:-translate-y-px ${r.color === "sky"
                      ? "border-sky/20 bg-sky/8 text-sky hover:bg-sky/15"
                      : r.color === "orange"
                        ? "border-orange/20 bg-orange/8 text-orange hover:bg-orange/15"
                        : "border-navy/15 bg-navy/5 text-navy hover:bg-navy/10"
                      }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${r.color === "sky"
                        ? "bg-sky"
                        : r.color === "orange"
                          ? "bg-orange"
                          : "bg-navy"
                        }`}
                    />
                    {r.label}
                  </span>
                ))}
              </div>

              {/* Mini stat block */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-100 bg-light-blue/50 p-4 text-center">
                  <p className="font-heading text-2xl font-bold not-italic text-sky">
                    {DESTINATION_PAGE_CARDS.length}+
                  </p>
                  <p className="font-body mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/40">
                    Destinations
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-light-blue/50 p-4 text-center">
                  <p className="font-heading text-2xl font-bold not-italic text-orange">
                    100%
                  </p>
                  <p className="font-body mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/40">
                    Customisable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-light-blue/40">
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-12 sm:px-8 lg:px-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
              All Destinations
            </span>
          </div>
        </div>
        <DestinationsGrid items={DESTINATION_PAGE_CARDS} />
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-navy py-14 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky/10 blur-[80px]" />
        <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-orange/8 blur-[70px]" />
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-sky to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Custom Packages
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-white md:text-[42px]">
                Don&apos;t See Your{" "}
                <span className="text-sky">Ideal Destination?</span>
              </h2>
              <p className="font-body mt-5 text-base font-light leading-relaxed text-white/55">
                We craft bespoke travel across all of India and beyond —
                international tours, honeymoon packages, corporate retreats, and
                group pilgrimages tailored to your exact vision.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButtonLink href="/contact">
                Plan a Custom Trip
              </PrimaryButtonLink>
              <a
                href="tel:+919958815430"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15"
              >
                Call Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}