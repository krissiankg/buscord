import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-5 w-5 text-accent" />,
    title: 'Notre mission',
    desc: 'Concevoir, suivre et réaliser des projets de développement qui améliorent concrètement les conditions de vie des communautés vulnérables au Burkina Faso.',
  },
  {
    icon: <Eye className="h-5 w-5 text-accent" />,
    title: 'Notre vision',
    desc: 'Être le partenaire de référence des bailleurs et ONG pour des projets humanitaires durables, conformes et à fort impact social sur tout le territoire.',
  },
  {
    icon: <Heart className="h-5 w-5 text-accent" />,
    title: 'Nos valeurs',
    desc: 'Rigueur technique, transparence envers les financeurs, inclusion des bénéficiaires et engagement terrain au service du développement national.',
  },
];

export default function AboutMission() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Ce qui nous <span className="font-serif-italic text-accent">anime</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            Chaque projet BUSCORD est guidé par l&apos;impact sur les bénéficiaires et la confiance des partenaires.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-100 bg-white p-6 transition hover:shadow-md md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition group-hover:bg-accent/20 md:mb-6">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
