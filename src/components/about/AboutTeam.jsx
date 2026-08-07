import { expertiseAreas, team } from '@/data/buscord';
import { User, ImageOff } from 'lucide-react';

const competencies = [
  {
    title: 'Montage de projets',
    desc: 'Dossiers techniques et financiers conformes aux exigences des bailleurs (APL, contrepartie, appels à projets).',
  },
  {
    title: 'Supervision de chantiers',
    desc: 'Suivi-contrôle rigoureux validé par les superviseurs nationaux et les maîtres d\'ouvrage.',
  },
  {
    title: 'Réalisation & production',
    desc: 'Construction d\'infrastructures et fabrication de mobilier scolaire, de bureau et d\'équipements divers.',
  },
  {
    title: 'Approche communautaire',
    desc: 'Intermédiation sociale, sensibilisation et implication des acteurs locaux dans chaque projet.',
  },
];

export default function AboutTeam() {
  const leader = team.find((m) => m.isLeader);
  const members = team.filter((m) => !m.isLeader);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Compétences */}
        <div className="gs-reveal mb-10 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Notre <span className="font-serif-italic text-accent">expertise</span>
          </h2>
          <p className="max-w-xl text-sm text-gray-500 md:text-base">
            Une équipe ancrée sur le terrain, avec une expérience cumulée en ONG, bureaux d&apos;études et travaux publics.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {competencies.map((item) => (
            <div key={item.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8 hover:shadow-md transition">
              <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="gs-reveal mt-10 flex flex-wrap gap-3">
          {expertiseAreas.map((area) => (
            <span key={area} className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              {area}
            </span>
          ))}
        </div>

        {/* Section Les membres de l'équipe */}
        <div className="gs-reveal mt-20 mb-10">
          <h3 className="text-2xl font-bold leading-tight text-primary md:text-3xl lg:text-4xl">
            Les visages de <span className="font-serif-italic text-accent">BUSCORD</span>
          </h3>
          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Les professionnels qui conduisent nos missions de suivi-contrôle et de réalisation.
          </p>
        </div>

        {/* Leader PDG */}
        {leader && (
          <div className="gs-reveal mb-12">
            <div className="overflow-hidden rounded-3xl bg-primary text-white shadow-xl lg:grid lg:grid-cols-12 lg:items-center">
              <div className="p-8 sm:p-10 lg:col-span-7">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-3">
                  {leader.badge}
                </span>
                <h4 className="text-2xl font-bold text-white sm:text-3xl">{leader.name}</h4>
                <p className="mt-1 font-medium text-accent">{leader.role}</p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{leader.desc}</p>
              </div>
              <div className="h-[280px] lg:col-span-5 lg:h-full">
                <img
                  src={encodeURI(leader.image)}
                  alt={leader.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}

        {/* Autres membres */}
        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition"
            >
              <div>
                <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
                  {member.image ? (
                    <img
                      src={encodeURI(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 p-4 text-center">
                      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <User className="h-7 w-7" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                        <ImageOff className="h-3 w-3" />
                        Photo à venir
                      </span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-primary/80 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    {member.badge}
                  </span>
                </div>
                <h5 className="font-bold text-primary">{member.name}</h5>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-0.5">{member.role}</p>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

