import { Check } from 'lucide-react';

export default function CaseStudyDetailContent({ study }) {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <article className="gs-reveal">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Le contexte</h2>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
            {study.challenge}
          </p>

          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Notre approche</h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
            {study.approach}
          </p>

          <div className="my-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:my-10 md:p-8">
            <h3 className="mb-4 text-lg font-bold text-primary md:text-xl">Actions réalisées</h3>
            <ul className="space-y-3">
              {study.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-gray-600 md:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-8 overflow-hidden rounded-2xl md:my-10">
            <img
              src={study.midImg || study.img}
              alt={study.title}
              className="h-[200px] w-full object-cover sm:h-[280px] md:h-[350px]"
            />
          </div>

          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">La solution</h2>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
            {study.solution}
          </p>

          <div className="my-8 rounded-2xl border-l-4 border-accent bg-accent/5 p-6 md:my-10 md:p-8">
            <p className="text-base font-medium italic leading-relaxed text-primary md:text-lg">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-500">— {study.quote.author}</p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Les résultats</h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
            {study.results}
          </p>

          <div className="mt-10 rounded-2xl border border-accent/10 bg-accent/5 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-bold text-primary md:text-xl">Enseignement clé</h3>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
              {study.takeaway}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
