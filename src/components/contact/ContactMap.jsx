import { contact } from '@/data/buscord';

export default function ContactMap() {
  return (
    <section className="px-4 pb-10 md:px-6 gs-reveal">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[40px]">
        <iframe
          title={`Localisation ${contact.location}`}
          src="https://www.google.com/maps?q=Cit%C3%A9+Azimmo+Ouaga+2000+Petro+OR+Ouagadougou&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[300px] w-full md:h-[400px]"
        />
      </div>
    </section>
  );
}
