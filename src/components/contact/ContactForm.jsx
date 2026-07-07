import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contact, phoneHref, whatsappHref, services, projectFolders, projectImage } from '@/data/buscord';

const initialForm = {
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Une erreur est survenue.');
      }

      setForm(initialForm);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-2 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Envoyez-nous un <span className="font-serif-italic text-accent">message</span>
            </h2>
            <p className="mb-8 text-sm text-gray-500 md:mb-10 md:text-base">
              Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone ou WhatsApp.
            </p>

            {status === 'success' && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {status === 'error' && error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {error}
              </div>
            )}

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                <div>
                  <label htmlFor="prenom" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white md:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white md:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white md:text-base"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="+226 XX XX XX XX"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white md:text-base"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Service concerné
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-accent focus:bg-white md:text-base"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white md:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center gap-5 rounded-full bg-accent py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent transition group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={projectImage(projectFolders.bissou, 'bissou-batiment.jpg')}
                alt="BUSCORD au Burkina Faso"
                className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[350px]"
              />
            </div>

            <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-3xl bg-accent p-8 text-white md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <h3 className="relative mb-3 text-2xl font-bold md:text-3xl">Contact direct</h3>
              <p className="relative mb-6 text-sm text-indigo-100 md:text-base">
                Pour une réponse rapide, appelez-nous ou écrivez-nous sur WhatsApp.
              </p>
              <div className="relative space-y-3 text-sm font-medium md:text-base">
                <div className="flex flex-col gap-1 border-b border-indigo-500/50 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span>Téléphone</span>
                  <a href={phoneHref(contact.phones[0])} className="hover:underline sm:text-right">
                    {contact.phones[0]}
                  </a>
                </div>
                <div className="flex flex-col gap-1 border-b border-indigo-500/50 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span>WhatsApp</span>
                  <a href={whatsappHref(contact.whatsapp)} className="hover:underline sm:text-right">
                    {contact.whatsapp}
                  </a>
                </div>
                <div className="flex flex-col gap-1 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span>E-mail</span>
                  <a href={`mailto:${contact.email}`} className="break-all hover:underline sm:text-right">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
