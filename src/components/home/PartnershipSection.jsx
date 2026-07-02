import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { partnershipTabs } from '@/data/buscord';

export default function PartnershipSection() {
  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative gs-reveal order-2 lg:order-1">
          <img
            src="/images/partnership-africa.jpg"
            alt="Équipe BUSCORD sur un chantier au Burkina Faso"
            className="h-[280px] w-full rounded-3xl object-cover sm:h-[350px] md:h-[500px]"
          />
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-primary/90 p-4 text-white backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:p-5 md:bottom-6 md:left-6 md:right-6 md:p-6">
            <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl md:mb-4 md:text-2xl">Un projet à monter ou à superviser ?</h3>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 md:py-2.5 md:pl-6 md:pr-2.5 text-xs md:text-sm font-bold text-primary transition hover:bg-gray-100"
            >
              Contactez BUSCORD
              <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-accent text-white transition">
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="gs-reveal order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Pourquoi nous faire <span className="font-serif-italic text-accent">confiance</span>
          </h2>
          <p className="text-gray-600 mb-8 md:mb-10 text-sm md:text-base">
            BUSCORD combine expertise technique, connaissance des procédures des bailleurs et ancrage communautaire pour
            livrer des projets conformes, durables et à fort impact social.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-3 md:pb-4 mb-4 md:mb-6">
            {partnershipTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2 py-1 text-sm md:text-base font-semibold transition ${
                  activeTab === tab.id ? 'text-primary' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <span
                  className={`inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent mr-1 md:mr-2 transition-opacity ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[120px] md:min-h-[100px]">
            {partnershipTabs.map((tab) => (
              <div
                key={tab.id}
                className={`text-gray-600 text-sm md:text-base transition-opacity duration-300 ${
                  activeTab === tab.id ? 'opacity-100 block' : 'hidden opacity-0'
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
