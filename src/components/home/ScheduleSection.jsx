import Link from 'next/link';
import { Pin, ArrowUpRight } from 'lucide-react';
import { contact } from '@/data/buscord';

export default function ScheduleSection() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto mb-8 md:mb-10 gs-reveal">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
          Parlons de votre prochain{' '}
          <span className="font-serif-italic text-accent">projet</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 gs-reveal">
        <div className="lg:col-span-7">
          <img
            src="/images/projects/yamwaya-inauguration.jpg"
            alt="Projet de développement au Burkina Faso"
            className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-3xl"
          />
        </div>

        <div className="lg:col-span-5 bg-accent text-white p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-2xl" />
          <Pin className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 rotate-45" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Contactez-nous</h3>
          <p className="text-indigo-100 mb-8 md:mb-10 text-sm md:text-base">
            Notre équipe est disponible pour échanger sur vos besoins en conception, suivi-contrôle ou réalisation de
            projets.
          </p>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 font-medium text-sm md:text-base">
            <div className="flex flex-col gap-1 border-b border-indigo-500/50 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span>Téléphone</span>
              <span className="sm:text-right">{contact.phones[0]}</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-indigo-500/50 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span>WhatsApp</span>
              <span className="sm:text-right">{contact.whatsapp}</span>
            </div>
            <div className="flex flex-col gap-1 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span>E-mail</span>
              <span className="break-all sm:text-right">{contact.email}</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex justify-between items-center gap-4 rounded-full bg-white py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 font-bold text-primary transition hover:bg-gray-100 text-sm md:text-base"
          >
            Envoyer un message
            <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-accent text-white transition">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
