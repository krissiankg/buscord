import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { company, contact, navLinks, phoneHref, whatsappHref } from '@/data/buscord';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100 px-4 pb-6 pt-16 sm:px-6 md:pt-20">
      <div className="max-w-7xl mx-auto gs-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-buscord.png" alt={company.name} width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <p className="text-xl font-bold text-primary">{company.name}</p>
                <p className="text-xs text-gray-500 max-w-xs">{company.fullName}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">{company.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3 md:gap-8">
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Navigation</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Services</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
                <li><Link href="/services/conception-projets" className="hover:text-accent transition">Conception de projets</Link></li>
                <li><Link href="/services/suivi-controle" className="hover:text-accent transition">Suivi & contrôle</Link></li>
                <li><Link href="/services/construction-ouvrages" className="hover:text-accent transition">Construction</Link></li>
                <li><Link href="/services/intermediation-sociale" className="hover:text-accent transition">Intermédiation sociale</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Réalisations</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
                <li><Link href="/case-study/lycee-yamwaya" className="hover:text-accent transition">Lycée Yamwaya</Link></li>
                <li><Link href="/case-study/ecole-bissou" className="hover:text-accent transition">École de Bissou</Link></li>
                <li><Link href="/case-study/ecole-ezaca" className="hover:text-accent transition">École Ezaca B</Link></li>
                <li><Link href="/case-study" className="hover:text-accent transition font-medium text-primary">Voir tout →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 border-t border-gray-100 mb-6">
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1">E-mail</p>
            <a href={`mailto:${contact.email}`} className="font-bold hover:text-accent transition text-sm md:text-base break-all">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1">Téléphone</p>
            {contact.phones.map((phone) => (
              <a key={phone} href={phoneHref(phone)} className="block font-bold hover:text-accent transition text-sm md:text-base">
                {phone}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1">WhatsApp</p>
            <a href={whatsappHref(contact.whatsapp)} className="font-bold hover:text-accent transition text-sm md:text-base">
              {contact.whatsapp}
            </a>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1">Localisation</p>
            <p className="font-bold text-sm md:text-base">{contact.location}</p>
          </div>
        </div>

        <div className="bg-primary text-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xl md:text-2xl font-bold uppercase tracking-tight">{company.name}</div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-medium">
            <Link href="/terms" className="hover:text-accent transition">Mentions légales</Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 px-2 text-center md:flex-row md:items-center md:justify-between md:gap-4 md:text-left">
          <p className="text-[10px] text-gray-400 md:text-xs">
            {company.fullName} — {company.country}
          </p>
          <p className="text-[10px] text-gray-400 md:text-xs">
            &copy; {new Date().getFullYear()} {company.name}. Tous droits réservés.
            <span className="mx-2 text-gray-300" aria-hidden="true">
              ·
            </span>
            <a
              href="https://mail.buscord.online/roundcube/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-gray-600"
            >
              Webmail
            </a>
          </p>
          <p className="text-[10px] text-gray-400 md:text-xs">
            Site conçu par{' '}
            <a
              href="https://guelichweb.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold tracking-wide text-gray-500 transition hover:text-accent"
            >
              GUELICHWEB
              <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
