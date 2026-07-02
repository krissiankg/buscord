import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { faqs, contact, phoneHref } from '@/data/buscord';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        <div className="lg:col-span-5 gs-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 leading-tight">
            Questions <br />
            <span className="font-serif-italic text-accent">fréquentes</span>
          </h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
            <h3 className="font-bold text-lg md:text-xl mb-2">Une autre question ?</h3>
            <p className="text-gray-500 mb-4 md:mb-6 text-sm">Notre équipe est à votre écoute pour tout renseignement.</p>
            <Link
              href={phoneHref(contact.phones[0])}
              className="group inline-flex items-center gap-4 rounded-full bg-primary py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 font-bold text-white transition hover:bg-accent text-sm md:text-base"
            >
              Appeler le {contact.phones[0]}
              <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white text-accent transition">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 gs-reveal">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b border-gray-200 pb-3 md:pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-3 md:py-4 text-left font-bold text-base md:text-lg hover:text-accent transition gap-4"
                >
                  {faq.question}
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-accent shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent shrink-0" />
                  )}
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
                >
                  <p className="text-gray-600 pb-4 md:pb-6 pt-2 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
