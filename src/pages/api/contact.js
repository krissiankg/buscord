import nodemailer from 'nodemailer';

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const rejectUnauthorized = process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false';

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user, pass },
    tls: { rejectUnauthorized },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const transporter = getTransporter();
  if (!transporter) {
    return res.status(500).json({ error: 'Configuration e-mail manquante sur le serveur.' });
  }

  const { prenom, nom, email, telephone, service, message } = req.body || {};

  if (!prenom?.trim() || !nom?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Adresse e-mail invalide.' });
  }

  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const from = process.env.SMTP_USER;
  const fullName = `${prenom.trim()} ${nom.trim()}`;

  const serviceLabel = service
    ? service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Non précisé';

  const text = [
    `Nouveau message depuis le site BUSCORD`,
    ``,
    `Nom : ${fullName}`,
    `E-mail : ${email.trim()}`,
    `Téléphone : ${telephone?.trim() || 'Non renseigné'}`,
    `Service : ${serviceLabel}`,
    ``,
    `Message :`,
    message.trim(),
  ].join('\n');

  const html = `
    <h2>Nouveau message depuis le site BUSCORD</h2>
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>E-mail :</strong> ${email.trim()}</p>
    <p><strong>Téléphone :</strong> ${telephone?.trim() || 'Non renseigné'}</p>
    <p><strong>Service :</strong> ${serviceLabel}</p>
    <p><strong>Message :</strong></p>
    <p>${message.trim().replace(/\n/g, '<br>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Site BUSCORD" <${from}>`,
      to,
      replyTo: email.trim(),
      subject: `[BUSCORD] Message de ${fullName}`,
      text,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur envoi e-mail:', error);
    return res.status(500).json({ error: 'Impossible d\'envoyer le message. Réessayez ou contactez-nous par téléphone.' });
  }
}
