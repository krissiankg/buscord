import SeoHead from '@/components/seo/SeoHead';
import { useRouter } from 'next/router';
import { ClipboardList, HardHat, Building2, Handshake } from 'lucide-react';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDetailContent from '@/components/services/ServiceDetailContent';
import ServiceDetailProcess from '@/components/services/ServiceDetailProcess';
import ServiceDetailCTA from '@/components/services/ServiceDetailCTA';
import { getServiceBySlug } from '@/data/buscord';

const iconMap = {
  'conception-projets': ClipboardList,
  'suivi-controle': HardHat,
  'construction-ouvrages': Building2,
  'intermediation-sociale': Handshake,
};

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const base = getServiceBySlug(slug);

  if (!base) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">Service introuvable</h1>
          <p className="mb-6 text-gray-500">Le service demandé n&apos;existe pas.</p>
          <a href="/services" className="text-accent font-semibold hover:underline">← Retour aux services</a>
        </div>
      </div>
    );
  }

  const Icon = iconMap[slug];
  const service = {
    ...base,
    icon: <Icon className="h-6 w-6 text-accent" />,
    heroImg: base.img,
  };

  return (
    <>
      <SeoHead
        title={service.title}
        description={service.heroDesc || service.desc}
        path={`/services/${service.slug}`}
        image={service.img}
      />
      <main className="selection:bg-accent selection:text-white">
        <ServiceDetailHero service={service} />
        <ServiceDetailContent service={service} />
        <ServiceDetailProcess service={service} />
        <ServiceDetailCTA />
      </main>
    </>
  );
}
