import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PilgrimageSection } from "@/components/PilgrimageSection";
import { DestinationsCarousel } from "@/components/DestinationsCarousel";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactCtaStrip } from "@/components/ContactCtaStrip";
import { ContactSection } from "@/components/ContactSection";
// import { WaveDivider } from "@/components/WaveDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <WaveDivider /> */}
      <div id="main-content">
        <StatsBar />
        <AboutSection />
        <ServicesSection />
        <PilgrimageSection />
        <DestinationsCarousel />
        <WhyChooseSection />
        <TestimonialSection />
        <ContactCtaStrip />
        <ContactSection />
      </div>
    </>
  );
}
