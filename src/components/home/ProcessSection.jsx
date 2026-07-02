import { Puzzle, Rocket } from 'lucide-react';
import { processSteps } from '@/data/buscord';

const stepIcons = [
  <div key="1" className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent" />,
  <Puzzle key="2" className="w-4 h-4 md:w-5 md:h-5 text-accent -rotate-45" />,
  <Rocket key="3" className="w-4 h-4 md:w-5 md:h-5 text-accent" />,
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 gs-reveal leading-tight">
          Notre méthode pour des projets{' '}
          <span className="font-serif-italic text-accent">réussis</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gs-reveal">
          {processSteps.map((step, i) => (
            <div key={step.title} className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-white rounded-${i === 1 ? 'lg' : 'full'} flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-gray-100 ${i === 1 ? 'transform rotate-45' : ''}`}>
                <span className={i === 1 ? '-rotate-45' : ''}>{stepIcons[i]}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
