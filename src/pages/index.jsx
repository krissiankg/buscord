import SeoHead from "@/components/seo/SeoHead";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonLd";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { company } from "@/data/buscord";

export default function Home() {
  return (
    <>
      <SeoHead
        title={company.tagline}
        description={company.description}
        path="/"
        jsonLd={[organizationJsonLd(), websiteJsonLd()]}
      />
      <main className="selection:bg-accent selection:text-white">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PartnershipSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ScheduleSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}
