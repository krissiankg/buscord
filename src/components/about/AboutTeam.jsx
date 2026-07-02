import { expertiseAreas } from '@/data/buscord';

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
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
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
      </div>
    </section>
  );
}
