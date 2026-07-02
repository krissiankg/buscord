import SeoHead from '@/components/seo/SeoHead';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import ContactFAQ from '@/components/contact/ContactFAQ';

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Contactez BUSCORD par téléphone, WhatsApp ou e-mail. Ouagadougou, Burkina Faso."
        path="/contact"
      />
      <main className="selection:bg-accent selection:text-white">
        <ContactHero />
        <ContactForm />
        <ContactMap />
        <ContactFAQ />
      </main>
    </>
  );
}
