import Link from 'next/link';
import { ArrowUpRight, Check, ClipboardList, HardHat, Building2, Handshake } from 'lucide-react';
import { services } from '@/data/buscord';

const iconMap = {
  'conception-projets': ClipboardList,
  'suivi-controle': HardHat,
  'construction-ouvrages': Building2,
  'intermediation-sociale': Handshake,
};

export default function ServicesOverview() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Ce que nous <span className="font-serif-italic text-accent">proposons</span>
          </h2>
          <p className="max-w-2xl text-sm text-gray-500 md:text-base">
            Quatre piliers d&apos;intervention pour couvrir l&apos;intégralité du cycle de vie de vos projets.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {services.map((service, i) => {
            const Icon = iconMap[service.slug];
            return (
              <div
                key={service.slug}
                className={`gs-reveal group grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 transition hover:shadow-lg md:gap-0 lg:grid-cols-2`}
              >
                <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[300px] lg:h-[380px]"
                  />
                </div>

                <div className={`p-6 md:p-10 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 md:mb-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500 md:mb-6 md:text-base">{service.desc}</p>

                  <ul className="mb-6 space-y-2 md:mb-8 md:space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-primary sm:gap-3 sm:text-sm md:text-base">
                        <Check className="h-4 w-4 shrink-0 text-accent md:h-5 md:w-5" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group/btn inline-flex items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-primary"
                  >
                    En savoir plus
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover/btn:text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
