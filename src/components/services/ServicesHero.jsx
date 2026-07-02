import { heroStats } from '@/data/buscord';

export default function ServicesHero() {
  return (
    <section className="relative px-4 pb-10 pt-28 sm:px-6 md:pb-16 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 max-w-3xl md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            Nos services
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Des solutions complètes pour vos{' '}
            <span className="font-serif-italic font-normal text-accent">projets de développement</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base lg:text-lg">
            De la conception à la réalisation, BUSCORD accompagne les bailleurs, ONG et institutions dans toutes les
            étapes de leurs projets au Burkina Faso.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center md:p-6">
              <h3 className="mb-1 text-2xl font-bold text-primary md:text-3xl">{stat.number}</h3>
              <p className="text-xs text-gray-500 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
