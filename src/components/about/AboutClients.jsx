import PartnerGrid from '@/components/shared/PartnerGrid';

export default function AboutClients() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Partenaires & financeurs</p>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Ils nous font <span className="font-serif-italic text-accent">confiance</span>
          </h2>
        </div>

        <PartnerGrid className="gs-reveal" />
      </div>
    </section>
  );
}
