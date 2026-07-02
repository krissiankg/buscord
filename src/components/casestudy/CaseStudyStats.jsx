import { stats } from '@/data/buscord';
import { Folder, Star, Users, Lightbulb } from 'lucide-react';

const icons = [
  <Folder key="f" className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />,
  <Star key="s" className="h-5 w-5 text-purple-600 md:h-6 md:w-6" />,
  <Users key="u" className="h-5 w-5 text-indigo-600 md:h-6 md:w-6" />,
  <Lightbulb key="l" className="h-5 w-5 text-orange-600 md:h-6 md:w-6" />,
];

const backgrounds = ['bg-blue-50', 'bg-purple-50', 'bg-indigo-50', 'bg-orange-50'];

export default function CaseStudyStats() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            L&apos;impact en <span className="font-serif-italic text-accent">chiffres</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            Des résultats tangibles pour les bénéficiaires et une exécution conforme pour les bailleurs.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={stat.number} className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm md:p-8">
              <div className={`${backgrounds[i]} mb-4 flex h-10 w-10 items-center justify-center rounded-lg md:mb-6 md:h-12 md:w-12`}>
                {icons[i]}
              </div>
              <h3 className="mb-2 text-3xl font-bold md:mb-3 md:text-4xl">{stat.number}</h3>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
