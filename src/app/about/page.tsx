import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaHeart, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Salve Maria Tours & Travels — our story, mission, and commitment to Catholic pilgrimage and travel from Gurgaon, India.",
};

const heroImage =
  "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=2000&q=80";

const values = [
  {
    icon: FaHeart,
    title: "Faith",
    body: "Every itinerary is planned with reverence for the sacramental life of the Church.",
    accent: "orange" as const,
  },
  {
    icon: FaShieldAlt,
    title: "Trust",
    body: "Clear communication, honest pricing, and dependable partners you can count on.",
    accent: "sky" as const,
  },
  {
    icon: FaStar,
    title: "Excellence",
    body: "Meticulous logistics, vetted hotels, and guides who love what they do.",
    accent: "orange" as const,
  },
  {
    icon: FaUsers,
    title: "Care",
    body: "We journey with you — attentive to seniors, families, and first-time pilgrims alike.",
    accent: "sky" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title="About Us"
        subtitle="Faith-led journeys with global care and a personal touch."
        imageSrc={heroImage}
        imageAlt="Historic church architecture"
        tag="Our Story"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* ── Our Story ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">

            {/* Left — section label + pull quote */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-orange" />
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                    Our Story
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy md:text-4xl">
                  Rooted in Faith,<br />
                  <span className="text-sky">Built on Trust</span>
                </h2>
                {/* Decorative block quote */}
                <div className="mt-10 border-l-2 border-orange/30 pl-5">
                  <p className="font-heading text-lg font-bold not-italic leading-snug text-navy/60 italic">
                    &quot;Travel should draw people closer to God, to one another, and to the beauty of the world He made.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Right — body copy */}
            <div className="space-y-6 lg:col-span-8">
              {[
                "Salve Maria Tours & Travels began with a simple conviction: travel should draw people closer to God, to one another, and to the beauty of the world He made. From our base in Gurgaon, we have served pilgrims, families, and organizations with itineraries that balance prayer, rest, and discovery.",
                "Over the years, our team has built trusted partnerships across India and abroad — from boutique hotels and reliable transport partners to parish communities and experienced spiritual guides. Whether you are walking the shores of Vellankani or planning a corporate retreat in the hills, we listen first, then design every detail around your needs.",
                "Today, Salve Maria continues to grow as a Catholic pilgrimage and travel agency known for integrity, warmth, and seamless execution. We are grateful for every pilgrim who invites us into their journey — and we look forward to serving you with the same care that has defined us from the beginning.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base font-light leading-[1.95] text-gray-500 md:text-lg"
                >
                  {para}
                </p>
              ))}

              {/* Inline stat strip */}
              <div className="mt-10 grid grid-cols-3 gap-0 rounded-2xl border border-gray-100 bg-light-blue/50 px-6 py-6">
                {[
                  { val: "2,000+", lbl: "Pilgrims Served" },
                  { val: "15+", lbl: "Years of Service" },
                  { val: "40+", lbl: "Sacred Routes" },
                ].map((s, i) => (
                  <div
                    key={s.lbl}
                    className="flex flex-col items-center text-center"
                    style={{
                      borderRight: i < 2 ? "1px solid rgba(27,58,107,0.08)" : "none",
                    }}
                  >
                    <span className="font-heading text-2xl font-bold not-italic text-sky sm:text-3xl">
                      {s.val}
                    </span>
                    <span className="font-body mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/40">
                      {s.lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-light-blue py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          {/* Section header */}
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-8 bg-orange" />
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
              What Drives Us
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Mission */}
            <article className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1 sm:p-10">
              <span className="pointer-events-none absolute -top-2 right-4 select-none font-heading text-[100px] font-bold not-italic leading-none text-navy/[0.03]">
                M
              </span>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange/10 flex items-center justify-center">
                  <span className="font-body text-xs font-bold text-orange">01</span>
                </div>
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-orange">
                  Mission
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold not-italic text-navy">
                Why We Exist
              </h3>
              <p className="font-body mt-4 text-base font-light leading-relaxed text-gray-500">
                To craft prayerful, well-organized travel experiences that honour
                Catholic faith and hospitality — serving every guest with
                excellence, transparency, and joy.
              </p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-500 group-hover:w-full" />
            </article>

            {/* Vision */}
            <article className="group relative overflow-hidden rounded-2xl bg-navy p-8 shadow-soft transition-all duration-400 hover:shadow-[0_28px_70px_rgba(27,58,107,0.28)] hover:-translate-y-1 sm:p-10">
              <span className="pointer-events-none absolute -top-2 right-4 select-none font-heading text-[100px] font-bold not-italic leading-none text-white/[0.04]">
                V
              </span>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-sky/15 flex items-center justify-center">
                  <span className="font-body text-xs font-bold text-sky">02</span>
                </div>
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-sky/70">
                  Vision
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold not-italic text-white">
                Where We&apos;re Headed
              </h3>
              <p className="font-body mt-4 text-base font-light leading-relaxed text-white/65">
                To be India&apos;s most trusted Catholic pilgrimage partner —
                connecting communities to sacred places, cultural heritage, and
                encounters of grace across the globe.
              </p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky transition-all duration-500 group-hover:w-full" />
            </article>
          </div>
        </div>
      </section>

      {/* ── Founder / Leadership ── */}
      <section className="overflow-hidden bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid items-center gap-14  lg:gap-20">
            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Our Founder
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy md:text-[40px]">
                A Heart for{" "}
                <span className="text-sky">Pilgrims</span>
              </h2>
              <div className="mt-6 space-y-4">
                <p className="font-body text-base font-light leading-[1.9] text-gray-500 md:text-lg">
                  Anjali leads Salve Maria with a deep love for the Church and a
                  passion for meaningful travel. Her leadership blends operational
                  rigour with pastoral sensitivity — ensuring that every group
                  feels supported, informed, and spiritually nourished from the
                  first conversation to the journey home.
                </p>
                <p className="font-body text-base font-light leading-[1.9] text-gray-500 md:text-lg">
                  Under her guidance, the team has expanded pilgrimage offerings
                  across India while strengthening partnerships that uphold
                  safety, comfort, and authentic Catholic hospitality.
                </p>
              </div>

              {/* Signature-style detail */}
              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 font-heading text-base font-bold not-italic text-orange">
                  AS
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-navy">Anjali Simon</p>
                  <p className="font-body text-xs font-light text-gray-400">
                    Founder & CEO, Salve Maria Tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
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
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky/10 blur-[90px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
                  Our Values
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-white md:text-[40px]">
                What We Stand For
              </h2>
            </div>
            <p className="font-body max-w-xs text-sm font-light leading-relaxed text-white/45 lg:text-right">
              The principles that guide every itinerary, every call, every journey.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              const isOrange = v.accent === "orange";
              return (
                <article
                  key={v.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7 transition-all duration-300 hover:bg-white/10 hover:border-white/15"
                >
                  {/* Faded bg number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-2 select-none font-heading text-[72px] font-bold not-italic leading-none text-white/[0.04]"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${isOrange
                      ? "bg-orange/15 text-orange group-hover:bg-orange group-hover:text-white"
                      : "bg-sky/15 text-sky group-hover:bg-sky group-hover:text-white"
                      }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  <h3 className="font-body text-base font-bold uppercase tracking-[0.1em] text-white">
                    {v.title}
                  </h3>
                  <p className="font-body mt-3 flex-1 text-sm font-light leading-relaxed text-white/55">
                    {v.body}
                  </p>

                  {/* Bottom accent line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${isOrange ? "bg-orange" : "bg-sky"
                      }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}