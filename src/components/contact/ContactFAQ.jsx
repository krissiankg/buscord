import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs, contact, phoneHref } from '@/data/buscord';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="gs-reveal mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Questions <span className="font-serif-italic text-accent">fréquentes</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500 md:text-base">
            Tout ce qu&apos;il faut savoir avant de nous contacter.
          </p>
        </div>

        <div className="gs-reveal space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="rounded-2xl border border-gray-100 bg-white transition hover:border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold transition hover:text-accent md:p-6 md:text-lg"
              >
                {faq.question}
                {openIndex === i ? (
                  <Minus className="h-5 w-5 shrink-0 text-accent" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-accent" />
                )}
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500 md:px-6 md:pb-6 md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="gs-reveal mt-8 text-center text-sm text-gray-500">
          Besoin d&apos;une réponse immédiate ? Appelez le{' '}
          <a href={phoneHref(contact.phones[0])} className="font-semibold text-accent hover:underline">
            {contact.phones[0]}
          </a>
        </p>
      </div>
    </section>
  );
}
