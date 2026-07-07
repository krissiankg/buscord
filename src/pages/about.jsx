import SeoHead from '@/components/seo/SeoHead';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import AboutCommitments from '@/components/about/AboutCommitments';
import AboutTeam from '@/components/about/AboutTeam';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutClients from '@/components/about/AboutClients';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
  return (
    <>
      <SeoHead
        title="À propos"
        description="Découvrez BUSCORD : notre histoire, notre mission, nos engagements pour la protection de l'enfance et de l'environnement au Burkina Faso."
        path="/about"
      />
      <main className="selection:bg-accent selection:text-white">
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutCommitments />
        <AboutTeam />
        <AboutTimeline />
        <AboutClients />
        <AboutCTA />
      </main>
    </>
  );
}
