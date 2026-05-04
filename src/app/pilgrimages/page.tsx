import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PilgrimagesExplorer } from "@/components/PilgrimagesExplorer";
import { PrimaryButtonLink } from "@/components/PremiumButtons";

export const metadata: Metadata = {
  title: "India Catholic Pilgrimages",
  description:
    "Sacred journeys across South, West, and North India — cathedrals, basilicas, and shrines with Salve Maria Tours & Travels.",
};

const heroImage =
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=2000&q=80";

const pillars = [
  { num: "01", title: "Daily Holy Mass", body: "Every itinerary includes arrangements for Holy Mass at each sacred site." },
  { num: "02", title: "Spiritual Guides", body: "Experienced guides who understand both the faith and the logistics." },
  { num: "03", title: "Comfortable Stays", body: "Vetted AC accommodation close to each pilgrimage destination." },
  { num: "04", title: "All-Inclusive", body: "Transport, meals, and entry fees wrapped into one clear package." },
];

export default function PilgrimagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title="India Catholic Pilgrimages"
        subtitle="Walk in the footsteps of saints — daily Mass, trusted guides, and prayerful companionship."
        imageSrc={heroImage}
        imageAlt="Pilgrimage church in India"
        tag="Sacred Journeys"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pilgrimages" },
        ]}
      />

      {/* ── Intro + Pillars ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Left — intro copy */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-orange" />
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                    Our Pilgrimages
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                  Sacred Journeys,{" "}
                  <span className="text-sky">Seamlessly Organized</span>
                </h2>
                <p className="font-body mt-5 text-base font-light leading-[1.9] text-gray-500 md:text-lg">
                  Our India pilgrimage programmes unite seamless travel
                  coordination, comfortable accommodation, daily Holy Mass, and
                  rich spiritual formation. Each site is offered as part of a
                  curated group itinerary or a tailor-made private pilgrimage.
                </p>
                <div className="mt-8">
                  <PrimaryButtonLink href="/contact">
                    Plan My Pilgrimage
                  </PrimaryButtonLink>
                </div>

                {/* Decorative pull quote */}
                <div className="mt-10 border-l-2 border-sky/30 pl-5">
                  <p className="font-heading text-base font-bold not-italic  leading-snug text-navy/50">
                    &quot;Every soul deserves a journey worth remembering.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Right — pillars */}
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  What&apos;s Included
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((p, i) => (
                  <div
                    key={p.num}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    {/* Faded bg number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-2 right-3 select-none font-heading text-[72px] font-bold not-italic leading-none text-navy/[0.04]"
                    >
                      {p.num}
                    </span>
                    <span
                      className={`font-body mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] ${i % 2 === 0 ? "text-orange" : "text-sky"
                        }`}
                    >
                      {p.num}
                    </span>
                    <h3 className="font-body text-sm font-bold uppercase tracking-[0.1em] text-navy">
                      {p.title}
                    </h3>
                    <p className="font-body mt-2 text-sm font-light leading-relaxed text-gray-500">
                      {p.body}
                    </p>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${i % 2 === 0 ? "bg-orange" : "bg-sky"
                        }`}
                    />
                  </div>
                ))}
              </div>

              {/* Inline stat strip */}
              <div className="mt-6 grid grid-cols-3 gap-0 rounded-2xl border border-gray-100 bg-light-blue/50 px-6 py-5">
                {[
                  { val: "40+", lbl: "Sacred Sites" },
                  { val: "15+", lbl: "Years Experience" },
                  { val: "2,000+", lbl: "Pilgrims Served" },
                ].map((s, i) => (
                  <div
                    key={s.lbl}
                    className="flex flex-col items-center text-center"
                    style={{
                      borderRight: i < 2 ? "1px solid rgba(27,58,107,0.08)" : "none",
                    }}
                  >
                    <span className="font-heading text-xl font-bold not-italic text-sky sm:text-2xl">
                      {s.val}
                    </span>
                    <span className="font-body mt-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-navy/40">
                      {s.lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explorer (tabbed pilgrimages grid) ── */}
      <section className="bg-light-blue">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-4 sm:px-8 lg:px-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
              Explore by Region
            </span>
          </div>
          <h2 className="font-heading mt-3 text-2xl font-bold not-italic text-navy md:text-3xl">
            Choose Your{" "}
            <span className="text-sky">Sacred Destination</span>
          </h2>
        </div>
        <PilgrimagesExplorer />
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
                  Private Pilgrimages
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-white md:text-[42px]">
                Don&apos;t See Your{" "}
                <span className="text-sky">Destination?</span>
              </h2>
              <p className="font-body mt-5 text-base font-light leading-relaxed text-white/55">
                We design private and custom pilgrimage itineraries across India
                and Europe — Fatima, Lourdes, Rome, Holy Land & beyond. Tell us
                where your heart is called.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButtonLink href="/contact">
                Plan a Custom Pilgrimage
              </PrimaryButtonLink>
              <a
                href="tel:+919958815430"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}