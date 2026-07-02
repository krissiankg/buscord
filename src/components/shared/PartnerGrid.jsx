import Image from 'next/image';
import { partners } from '@/data/buscord';

export default function PartnerGrid({ className = '' }) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 ${className}`}>
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="gs-reveal flex min-h-[110px] items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-accent/30 hover:shadow-sm md:min-h-[120px] md:p-8"
        >
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt={partner.alt || partner.name}
              width={200}
              height={80}
              className="max-h-14 w-auto max-w-[180px] object-contain md:max-h-16 md:max-w-[200px]"
            />
          ) : (
            <p className="text-center text-sm font-bold leading-snug text-primary md:text-base">{partner.name}</p>
          )}
        </div>
      ))}
    </div>
  );
}
