import { milestones } from '@/data/buscord';

export default function AboutTimeline() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Notre <span className="font-serif-italic text-accent">parcours</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            Les étapes clés de nos réalisations sur le terrain.
          </p>
        </div>

        <div className="gs-reveal relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-200 md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((item, i) => (
              <div
                key={item.year + item.title}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full pl-10 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md md:p-6">
                    <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">{item.year}</span>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute left-2.5 top-6 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-white md:left-1/2 md:top-1/2 md:h-4 md:w-4 md:-translate-x-1/2 md:-translate-y-1/2" />
                <div className="hidden w-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
