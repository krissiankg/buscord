import SeoHead from '@/components/seo/SeoHead';
import CaseStudyHero from '@/components/casestudy/CaseStudyHero';
import CaseStudyGrid from '@/components/casestudy/CaseStudyGrid';
import CaseStudyStats from '@/components/casestudy/CaseStudyStats';
import CaseStudyCTA from '@/components/casestudy/CaseStudyCTA';

export default function CaseStudy() {
  return (
    <>
      <SeoHead
        title="Réalisations"
        description="Découvrez les projets réalisés par BUSCORD : écoles, lycées, santé communautaire et infrastructures au Burkina Faso."
        path="/case-study"
      />
      <main className="selection:bg-accent selection:text-white">
        <CaseStudyHero />
        <CaseStudyGrid />
        <CaseStudyStats />
        <CaseStudyCTA />
      </main>
    </>
  );
}
