import { Folder, Star, Users, Lightbulb } from 'lucide-react';
import { stats } from '@/data/buscord';

const icons = [
  <Folder key="f" className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />,
  <Star key="s" className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />,
  <Users key="u" className="text-indigo-600 w-5 h-5 md:w-6 md:h-6" />,
  <Lightbulb key="l" className="text-orange-600 w-5 h-5 md:w-6 md:h-6" />,
];

const backgrounds = ['bg-blue-50', 'bg-purple-50', 'bg-indigo-50', 'bg-orange-50'];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto mb-6 gs-reveal leading-tight">
          Des résultats concrets pour les{' '}
          <span className="font-serif-italic text-accent">bénéficiaires</span> et les bailleurs
        </h2>
        <p className="text-gray-500 mb-12 md:mb-16 max-w-2xl mx-auto gs-reveal text-sm md:text-base">
          Écoles construites, lycées réhabilités, projets de santé communautaire : BUSCORD transforme les financements
          en impact mesurable sur le terrain.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl text-left shadow-sm border border-gray-100 gs-reveal">
              <div className={`${backgrounds[i]} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-6`}>
                {icons[i]}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">{stat.number}</h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
