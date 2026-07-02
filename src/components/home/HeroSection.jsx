import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/buscord';

export default function HeroSection() {
  return (
    <section className="relative px-3 pb-10 pt-3 sm:px-4 sm:pb-12 md:px-6 md:pb-16 md:pt-4">
      <div className="relative min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[20px] sm:min-h-[calc(100svh-2rem)] sm:rounded-[28px] md:min-h-[calc(100vh-3rem)] md:rounded-[36px]">
        <img
          src="/images/hero-accueil-afrique.jpg"
          alt="Projets de développement BUSCORD au Burkina Faso"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-7xl items-center px-4 pt-20 pb-8 sm:min-h-[calc(100svh-2rem)] sm:px-6 sm:pt-28 sm:pb-10 md:px-10 md:pt-32 lg:px-12">
        <div className="relative w-full gs-reveal">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:gap-14">
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-white/80 sm:mb-4 sm:text-xs sm:tracking-[0.18em] md:text-sm">
                {company.fullName}
              </p>
              <h1 className="mb-4 text-[1.65rem] font-bold leading-[1.1] text-white sm:mb-5 sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-6xl xl:text-7xl">
                Des projets de développement{' '}
                <span className="font-serif-italic font-normal">conçus, suivis et réalisés</span> au Burkina Faso
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/90 sm:mb-8 sm:text-base md:text-lg">
                {company.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex max-w-full items-center gap-3 rounded-full bg-white py-2.5 pl-5 pr-2.5 text-xs font-bold text-primary transition hover:bg-accent hover:text-white sm:gap-5 sm:py-3 sm:pl-6 sm:pr-3 sm:text-sm"
              >
                <span className="min-w-0">Discutons de votre projet</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition group-hover:bg-white group-hover:text-accent sm:h-9 sm:w-9">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="w-full max-w-sm shrink-0 rounded-2xl border border-white/30 bg-white p-4 shadow-xl sm:p-5 md:p-6 lg:max-w-[340px]">
              <h3 className="mb-2 text-base font-bold leading-tight sm:text-lg md:text-xl">
                Partenaire de confiance des bailleurs & ONG
              </h3>
              <p className="mb-4 text-xs text-gray-500 sm:mb-5 sm:text-sm">
                Conception, suivi-contrôle et réalisation de projets humanitaires pour les communautés vulnérables.
              </p>
              <Link
                href="/case-study"
                className="group flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 transition hover:border-accent"
              >
                <span className="w-full bg-transparent px-3 text-xs font-medium text-primary sm:px-4 sm:text-sm">
                  Voir nos réalisations
                </span>
                <span className="shrink-0 rounded-full bg-accent p-2 text-white transition group-hover:bg-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
