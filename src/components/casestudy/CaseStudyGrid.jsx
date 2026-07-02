import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/buscord';

const categories = ['Tous', 'Éducation', 'Santé'];

export default function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    activeCategory === 'Tous' ? caseStudies : caseStudies.filter((c) => c.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-10 flex flex-wrap gap-2 md:mb-14 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition md:px-5 md:text-sm ${
                activeCategory === cat
                  ? 'bg-accent text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {visible.map((cs) => (
            <Link href={`/case-study/${cs.slug}`} key={cs.slug} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
                <img
                  src={cs.img}
                  alt={cs.title}
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/10 backdrop-blur rounded-xl p-3 md:p-4 text-white">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-accent/80 px-2.5 py-0.5 text-[10px] font-semibold">{cs.category}</span>
                    <span className="text-xs font-bold text-accent">{cs.result}</span>
                  </div>
                  <h3 className="mb-1 text-base font-bold leading-snug md:text-lg">{cs.title}</h3>
                  <p className="line-clamp-2 text-xs text-gray-200 md:text-sm">{cs.desc}</p>
                  <p className="mt-2 text-[10px] font-medium text-gray-300">Financeur : {cs.client}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="gs-reveal mt-10 flex justify-center md:mt-14">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="group inline-flex items-center gap-5 rounded-full bg-primary py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Voir plus de réalisations
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:text-accent">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
