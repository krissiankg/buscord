import { contact } from '@/data/buscord';

export default function ContactMap() {
  return (
    <section className="px-4 pb-10 md:px-6 gs-reveal">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[40px]">
        <iframe
          title={`Localisation ${contact.location}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255168.50499428832!2d-1.623101!3d12.342589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe85123e88d9e28d%3A0x417c1b18cb9e213!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sbf!4v1700000000000!5m2!1sfr!2sbf"
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
