import SeoHead from '@/components/seo/SeoHead';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function Services() {
  return (
    <>
      <SeoHead
        title="Services"
        description="Conception de projets, suivi-contrôle des travaux, construction d'ouvrages publics et intermédiation sociale au Burkina Faso."
        path="/services"
      />
      <main className="selection:bg-accent selection:text-white">
        <ServicesHero />
        <ServicesOverview />
        <ServicesProcess />
        <ServicesCTA />
      </main>
    </>
  );
}
