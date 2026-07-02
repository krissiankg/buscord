import SeoHead from '@/components/seo/SeoHead';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutClients from '@/components/about/AboutClients';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
  return (
    <>
      <SeoHead
        title="À propos"
        description="Découvrez BUSCORD : notre histoire, notre mission et notre engagement pour le développement des communautés au Burkina Faso."
        path="/about"
      />
      <main className="selection:bg-accent selection:text-white">
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutTeam />
        <AboutTimeline />
        <AboutClients />
        <AboutCTA />
      </main>
    </>
  );
}
