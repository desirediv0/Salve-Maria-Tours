import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryView } from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Photo Gallery | Salve Maria Tours & Travels",
  description:
    "Explore beautiful moments, faith-led group fellowship, and historic sanctuary views from our Catholic pilgrimages globally.",
};

// Use the first beautiful gallery image as the high-resolution hero background
const heroImage =
  "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/salve-maria/gal-%20(1).jpeg";

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero section matching other pages ── */}
      <PageHero
        title="Photo Gallery"
        subtitle="A visual chronicle of faith, grace, and community in our global travel and sacred pilgrimages."
        imageSrc={heroImage}
        imageAlt="Scenic candlelight pilgrimage gathering"
        tag="Memories in Faith"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* ── Interactive Gallery Section ── */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        {/* Subtle background graphics */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-light-blue/20 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-light-blue/40 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-orange" />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-orange">
                Shared Moments
              </span>
              <span className="h-px w-6 bg-orange" />
            </div>
            <h2 className="font-heading text-3xl font-bold not-italic leading-tight text-navy sm:text-4xl md:text-[44px]">
              Capturing the <span className="text-sky">Spirit of Journey</span>
            </h2>
            <p className="font-body mt-4 text-base font-light leading-relaxed text-gray-500 md:text-lg">
              Explore snapshots of historic cathedrals, holy landmarks, and the warm, smiling fellowships of our pilgrimage tour groups.
            </p>
          </div>

          <GalleryView />
        </div>
      </section>
    </>
  );
}
