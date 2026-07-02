import SeoHead from '@/components/seo/SeoHead';
import { company, contact } from '@/data/buscord';

const sections = [
  {
    title: '1. Objet du site',
    content: `Le site ${company.name} présente les activités du ${company.fullName}, basé à ${contact.location}. L'utilisation de ce site implique l'acceptation des présentes mentions légales.`,
  },
  {
    title: '2. Services proposés',
    content:
      'BUSCORD intervient dans la conception de projets, le suivi-contrôle des travaux publics, la construction d\'ouvrages publics et l\'intermédiation sociale, principalement au profit de bailleurs, ONG, collectivités et institutions au Burkina Faso.',
  },
  {
    title: '3. Propriété intellectuelle',
    content:
      'Les textes, images, logos et éléments graphiques de ce site sont la propriété de BUSCORD ou de ses partenaires. Toute reproduction sans autorisation écrite préalable est interdite.',
  },
  {
    title: '4. Confidentialité',
    content:
      'Les informations transmises via le formulaire de contact ou dans le cadre d\'une collaboration sont traitées de manière confidentielle et utilisées uniquement pour répondre à votre demande ou exécuter une mission.',
  },
  {
    title: '5. Responsabilité',
    content:
      'BUSCORD s\'efforce de fournir des informations exactes et à jour. Toutefois, le contenu du site est donné à titre informatif et ne constitue pas un engagement contractuel sans accord écrit spécifique.',
  },
  {
    title: '6. Données personnelles',
    content:
      'Les données collectées (nom, e-mail, téléphone, message) servent uniquement à traiter vos demandes. Elles ne sont pas vendues à des tiers. Vous pouvez demander leur modification ou suppression en nous contactant.',
  },
  {
    title: '7. Droit applicable',
    content:
      'Les présentes mentions sont régies par le droit burkinabè. Tout litige relatif à l\'utilisation du site sera soumis aux juridictions compétentes du Burkina Faso.',
  },
  {
    title: '8. Contact',
    content: `Pour toute question : ${contact.email} — ${contact.phones.join(' / ')} — WhatsApp ${contact.whatsapp}.`,
  },
];

export default function Terms() {
  return (
    <>
      <SeoHead
        title="Mentions légales"
        description={`Mentions légales et conditions d'utilisation du site ${company.name}.`}
        path="/terms"
      />
      <main className="selection:bg-accent selection:text-white">
        <section className="px-4 pb-10 pt-28 sm:px-6 md:pb-16 md:pt-36 lg:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="gs-reveal">
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                Informations légales
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl">
                Mentions <span className="font-serif-italic font-normal text-accent">légales</span>
              </h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
                Dernière mise à jour : juillet 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="gs-reveal space-y-8 md:space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="mb-3 text-xl font-bold text-primary md:text-2xl">{section.title}</h2>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
