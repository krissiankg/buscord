import PartnerGrid from '@/components/shared/PartnerGrid';

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-16 text-center sm:px-6 md:py-24">
      <h2 className="gs-reveal mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
        Ils nous font <span className="font-serif-italic text-accent">confiance</span>
      </h2>
      <p className="gs-reveal mx-auto mb-10 max-w-2xl text-sm text-gray-500 md:mb-16 md:text-base">
        Bailleurs internationaux, ONG et institutions publiques nous confient la conception, le suivi et la réalisation
        de leurs projets de développement.
      </p>

      <div className="mx-auto max-w-5xl">
        <PartnerGrid />
      </div>
    </section>
  );
}
