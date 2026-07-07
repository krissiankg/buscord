import SeoHead from '@/components/seo/SeoHead';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import ContactFAQ from '@/components/contact/ContactFAQ';
import { contact } from '@/data/buscord';

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description={`Contactez BUSCORD par téléphone, WhatsApp ou e-mail. ${contact.location}`}
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
