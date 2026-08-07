import React from 'react';
import { team } from '@/data/buscord';
import { User, UserCheck, ImageOff } from 'lucide-react';

export default function TeamSection() {
  const leader = team.find((m) => m.isLeader);
  const members = team.filter((m) => !m.isLeader);

  return (
    <section className="px-6 py-16 md:py-24 bg-gray-50/70 border-y border-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="gs-reveal mb-12 text-center md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <UserCheck className="h-3.5 w-3.5" />
            Notre Équipe
          </span>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Une équipe qualifiée et{' '}
            <span className="font-serif-italic font-normal text-accent">engagée</span> sur le terrain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Découvrez les femmes et les hommes qui pilotent la réalisation, la supervision technique, la gestion administrative et financière de BUSCORD au Burkina Faso.
          </p>
        </div>

        {/* PDG / Leadership Feature Card */}
        {leader && (
          <div className="gs-reveal mb-12 md:mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-primary text-white shadow-2xl lg:grid lg:grid-cols-12 lg:items-center">
              <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
                <span className="inline-block rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent border border-accent/30 mb-4">
                  {leader.badge}
                </span>
                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {leader.name}
                </h3>
                <p className="mt-1 text-base font-medium text-accent md:text-lg">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
                  {leader.desc}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent"></span>
                    <span>Directeur Général & Fondateur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span>Supervision globale BUSCORD</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[400px] lg:col-span-5 lg:h-full min-h-[380px]">
                <img
                  src={encodeURI(leader.image)}
                  alt={leader.name}
                  className="h-full w-full object-cover object-top filter brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        )}

        {/* Grille des membres d'équipe */}
        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Visual / Image container */}
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
                  {member.image ? (
                    <img
                      src={encodeURI(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Placeholder card for member without photo yet */
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6 text-center">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <User className="h-8 w-8" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-500/20">
                        <ImageOff className="h-3 w-3" />
                        Photo à venir
                      </span>
                    </div>
                  )}

                  {/* Badge position */}
                  <span className="absolute top-3 left-3 rounded-full bg-primary/80 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white">
                    {member.badge}
                  </span>
                </div>

                {/* Info Text */}
                <h4 className="text-lg font-bold leading-tight text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h4>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">
                  {member.desc}
                </p>
              </div>

              {/* Status indicator */}
              <div className="mt-5 border-t border-gray-100 pt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span>BUSCORD Burkina Faso</span>
                {member.pendingImage ? (
                  <span className="italic text-amber-600">Fiche actualisée</span>
                ) : (
                  <span className="font-medium text-emerald-600">Équipe active</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
