import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="gs-reveal px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-accent md:flex-row md:rounded-[40px]">
        <div className="flex flex-col justify-center p-6 text-white sm:p-8 md:p-12 lg:w-1/2 lg:p-16">
          <span className="mb-3 text-xs font-bold uppercase tracking-wider opacity-80 md:mb-4 md:text-sm">Partenariat</span>
          <h2 className="mb-5 text-2xl font-bold leading-tight sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
            Construisons ensemble des projets à{' '}
            <span className="font-serif-italic">fort impact</span>
          </h2>

          <Link
            href="/contact"
            className="group mb-6 inline-flex max-w-full items-center justify-between gap-3 self-start rounded-full bg-white py-2.5 pl-5 pr-2.5 text-xs font-bold text-primary transition hover:bg-gray-100 sm:mb-8 sm:gap-4 sm:py-3 sm:pl-6 sm:pr-3 sm:text-sm md:mb-10 md:pl-7 md:text-base"
          >
            <span className="min-w-0">Démarrer une collaboration</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition md:h-9 md:w-9">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <ul className="space-y-2 md:space-y-3 opacity-90 text-xs md:text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Conception de dossiers finançables
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Suivi-contrôle rigoureux des chantiers
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shrink-0" />
              Réalisation d&apos;ouvrages durables pour les communautés
            </li>
          </ul>
        </div>
        <div className="h-[240px] sm:h-[300px] md:h-auto md:min-h-[400px] lg:w-1/2">
          <img
            src="/images/cta-equipe-bureau.jpg"
            alt="Équipe BUSCORD en réunion de projet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
