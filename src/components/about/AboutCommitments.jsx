import { Shield, Leaf } from 'lucide-react';
import { commitments } from '@/data/buscord';

const icons = {
  'child-protection': <Shield className="h-5 w-5 text-accent" />,
  environment: <Leaf className="h-5 w-5 text-accent" />,
};

export default function AboutCommitments() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            Responsabilité
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Nos <span className="font-serif-italic text-accent">engagements</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            Au-delà de la technique et de la conformité, BUSCORD s&apos;engage pour les enfants et pour
            l&apos;environnement dans chacune de ses interventions.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {commitments.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition hover:border-accent/20 hover:shadow-md md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition group-hover:bg-accent/20 md:mb-6">
                {icons[item.id]}
              </div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
