import Link from 'next/link';
import { ArrowUpRight, Pin } from 'lucide-react';
import { expertiseAreas } from '@/data/buscord';

export default function AboutSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl gs-reveal">
        <h2 className="mb-10 max-w-5xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-primary sm:mb-12 sm:text-4xl md:mb-16 md:text-6xl lg:text-7xl">
          Une expertise terrain au service du{' '}
          <span className="font-serif-italic font-normal text-accent">développement</span> des communautés
        </h2>

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex h-full flex-col justify-between gap-12 lg:col-span-3">
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 md:text-base">
              Après plusieurs années en ONG et en bureau d&apos;études, le promoteur de BUSCORD met son expérience en
              montage de projets, suivi-contrôle et construction au profit des communautés pauvres et vulnérables du
              Burkina Faso.
            </p>

            <div className="border-l-2 border-accent pl-5">
              <h3 className="text-6xl font-bold leading-none tracking-[-0.05em] text-primary md:text-7xl">7+</h3>
              <p className="mt-2 text-sm font-bold text-primary">Projets structurants réalisés</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/buscord-promoteur.jpg"
              alt="Promoteur de BUSCORD — expertise terrain au Burkina Faso"
              className="h-[360px] w-full rounded-xl object-cover md:h-[420px] md:rounded-2xl"
            />
          </div>

          <div className="flex flex-col items-start gap-10 lg:col-span-4 lg:pl-10">
            <div className="w-full max-w-full rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:max-w-[260px] sm:p-6 md:max-w-[280px]">
              <Pin className="mb-6 h-5 w-5 rotate-45 fill-accent text-accent" />
              <ul className="space-y-4 text-sm font-medium text-primary">
                {expertiseAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-primary"
            >
              Découvrir BUSCORD
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
