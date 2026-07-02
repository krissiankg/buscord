import SeoHead from '@/components/seo/SeoHead';
import { useRouter } from 'next/router';
import CaseStudyDetailHero from '@/components/casestudy/CaseStudyDetailHero';
import CaseStudyDetailContent from '@/components/casestudy/CaseStudyDetailContent';
import CaseStudyGallery from '@/components/casestudy/CaseStudyGallery';
import CaseStudyDetailRelated from '@/components/casestudy/CaseStudyDetailRelated';
import { getCaseStudyBySlug } from '@/data/buscord';

export default function CaseStudyDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">Réalisation introuvable</h1>
          <p className="mb-6 text-gray-500">La réalisation demandée n&apos;existe pas.</p>
          <a href="/case-study" className="text-accent font-semibold hover:underline">← Retour aux réalisations</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={study.title}
        description={study.subtitle || study.desc}
        path={`/case-study/${study.slug}`}
        image={study.img}
        type="article"
      />
      <main className="selection:bg-accent selection:text-white">
        <CaseStudyDetailHero study={study} />
        <CaseStudyDetailContent study={study} />
        <CaseStudyGallery study={study} />
        <CaseStudyDetailRelated currentSlug={slug} />
      </main>
    </>
  );
}
