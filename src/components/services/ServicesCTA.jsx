import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="px-4 py-10 md:px-6 gs-reveal">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[40px]">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[250px] sm:h-[300px] lg:h-auto lg:min-h-[450px]">
            <img
              src="/images/services-cta-afrique.jpg"
              alt="Supervision de chantier par l'équipe BUSCORD au Burkina Faso"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative flex flex-col justify-center bg-primary p-8 md:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
            <span className="relative mb-4 inline-block text-xs font-bold uppercase tracking-wider text-white/60">
              Parlons de votre projet
            </span>
            <h2 className="relative mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Construisons votre dossier{' '}
              <span className="font-serif-italic font-normal">ensemble</span>
            </h2>
            <p className="relative mb-8 max-w-md text-sm text-white/70 md:text-base">
              Que vous soyez bailleur, ONG ou collectivité, notre équipe est prête à analyser votre besoin et vous
              proposer une approche adaptée.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex w-fit items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary"
            >
              Demander un échange
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover:bg-accent group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
