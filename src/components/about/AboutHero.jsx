import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/buscord';

export default function AboutHero() {
  return (
    <section className="relative px-4 pb-10 pt-28 sm:px-6 md:pb-16 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            À propos
          </span>
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Au service du{' '}
            <span className="font-serif-italic font-normal text-accent">développement</span> du Burkina Faso
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base lg:text-lg">
            {company.fullName} — {company.description}
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/projects/equipe-buscord.jpg"
              alt="Équipe BUSCORD"
              className="h-[300px] w-full object-cover md:h-[400px] lg:h-[450px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-5 rounded-full bg-white py-3 pl-6 pr-3 text-sm font-bold text-primary transition hover:bg-accent hover:text-white"
              >
                Nous contacter
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition group-hover:bg-white group-hover:text-accent">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/projects/yamwaya-salle-reunion.jpg"
              alt="Salle de réunion réhabilitée — Lycée Yamwaya"
              className="h-[300px] w-full object-cover md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
