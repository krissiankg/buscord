export const company = {
  name: 'BUSCORD',
  fullName:
    'Bureau de Suivi-Contrôle et de Réalisation pour le Développement',
  tagline: 'Conception, suivi et réalisation de projets de développement',
  description:
    'BUSCORD accompagne les bailleurs, ONG, collectivités et institutions dans la conception, le suivi-contrôle et la réalisation de projets humanitaires et de développement au Burkina Faso.',
  country: 'Burkina Faso',
  city: 'Ouagadougou',
};

export const contact = {
  email: 'contact@buscord.online',
  phones: ['+226 25 45 80 63', '+226 72 12 63 93', '+226 68 81 81 47'],
  whatsapp: '+226 77 16 24 63',
  location: 'Cité Azimmo, Ouaga 2000 — à proximité de la station Petro OR, Ouagadougou, Burkina Faso',
};

/** Dossiers d’images par projet (public/images/projects/) */
export const projectFolders = {
  yamwaya: 'Lycéé yamwaya',
  bissou: 'école primaire de Bissou',
  ezaca: 'école EZACA',
  oronkua: 'Lutte contre la malnutrition — Oronkua',
  sandogo: 'CEG de Sandogo B',
  silmiyiri: 'école Nemnin de Silmiyiri',
};

/** Chemin encodé vers une image dans public/images/projects/{dossier}/{fichier} */
export function projectImage(folder, file) {
  return `/images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

/** Lien tel: à partir d'un numéro affiché avec +226 */
export function phoneHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

/** Lien WhatsApp wa.me */
export function whatsappHref(phone) {
  const digits = phone.replace(/\D/g, '');
  const normalized = digits.startsWith('226') ? digits : `226${digits}`;
  return `https://wa.me/${normalized}`;
}

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/case-study', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
];

export const heroStats = [
  { number: '7+', label: 'Projets structurants livrés' },
  { number: '440M+', label: 'FCFA de projets montés' },
  { number: '1200+', label: 'Élèves impactés (Yamwaya)' },
  { number: '100%', label: 'Engagement terrain & conformité' },
];

export const stats = [
  {
    number: '7+',
    desc: 'Projets de conception, construction et réhabilitation livrés avec des partenaires internationaux.',
  },
  {
    number: '440M+',
    desc: 'Francs CFA de projets montés et suivis pour le compte de bailleurs et d’institutions.',
  },
  {
    number: '15+',
    desc: 'Années d’expérience cumulées en ONG, bureaux d’études et réalisation de travaux publics.',
  },
  {
    number: '100%',
    desc: 'Approche orientée résultats : conformité technique, reporting et inclusion des bénéficiaires.',
  },
];

export const expertiseAreas = [
  'Montage de projets',
  'Suivi & contrôle de chantiers',
  'Travaux publics & bâtiment',
  'Intermédiation sociale',
];

export const services = [
  {
    slug: 'conception-projets',
    number: '[01]',
    title: 'Conception de projets',
    img: projectImage(projectFolders.bissou, 'bissou-panneau.jpg'),
    desc: 'Élaboration de dossiers techniques et financiers pour des projets humanitaires et de développement, alignés sur les exigences des bailleurs.',
    items: [
      'Études de faisabilité et cadrage',
      'Montage de dossiers de financement',
      'Planification technique et budgétaire',
    ],
    tag: 'Ingénierie de projet',
    heroDesc:
      'Nous transformons vos ambitions de développement en projets structurés, finançables et prêts à être mis en œuvre sur le terrain.',
    overview:
      'Fort de nombreuses années d’expérience en ONG et bureaux d’études, BUSCORD conçoit des projets adaptés aux réalités locales et aux standards internationaux des bailleurs.',
    approach:
      'Nous partons de l’analyse des besoins des communautés, des contraintes techniques et des critères du financeur pour bâtir un dossier complet et crédible.',
    features: [
      {
        title: 'Cadrage & diagnostic',
        desc: 'Identification des besoins, des parties prenantes et des priorités d’intervention.',
        items: ['Analyse communautaire', 'Cartographie des acteurs', 'Définition des objectifs'],
      },
      {
        title: 'Dossiers de financement',
        desc: 'Préparation de propositions conformes aux appels à projets et procédures APL.',
        items: ['Budgets détaillés', 'Planning d’exécution', 'Indicateurs de suivi'],
      },
      {
        title: 'Ingénierie technique',
        desc: 'Dimensionnement des ouvrages et spécifications adaptées au contexte burkinabè.',
        items: ['Plans et devis', 'Spécifications matériaux', 'Estimation des coûts'],
      },
    ],
    process: [
      { title: 'Diagnostic', desc: 'Analyse du besoin et des contraintes du terrain.' },
      { title: 'Conception', desc: 'Élaboration du dossier technique et financier.' },
      { title: 'Validation', desc: 'Alignement avec le bailleur et les autorités locales.' },
      { title: 'Lancement', desc: 'Préparation du démarrage et du dispositif de suivi.' },
    ],
  },
  {
    slug: 'suivi-controle',
    number: '[02]',
    title: 'Suivi & contrôle des travaux',
    img: projectImage(projectFolders.yamwaya, 'yamwaya-supervision.jpg'),
    desc: 'Supervision rigoureuse des chantiers publics pour garantir la qualité, les délais et la conformité aux standards des financeurs.',
    items: [
      'Supervision de chantiers',
      'Rapports d’avancement',
      'Contrôle qualité & conformité',
    ],
    tag: 'Supervision',
    heroDesc:
      'Un suivi-contrôle de proximité pour sécuriser vos investissements et garantir des réalisations durables.',
    overview:
      'BUSCORD assure le suivi et le contrôle de travaux publics pour des ONG, des collectivités et des institutions, avec une expertise reconnue par les superviseurs nationaux.',
    approach:
      'Présence terrain, contrôle des quantités et de la qualité, coordination avec les entreprises et reporting régulier aux maîtres d’ouvrage.',
    features: [
      {
        title: 'Supervision de chantiers',
        desc: 'Présence permanente sur site pour piloter l’exécution des travaux.',
        items: ['Contrôle des entreprises', 'Réunions de chantier', 'Gestion des aléas'],
      },
      {
        title: 'Reporting & conformité',
        desc: 'Documentation transparente pour les bailleurs et les autorités.',
        items: ['Rapports périodiques', 'Photos & pièces justificatives', 'Suivi budgétaire'],
      },
      {
        title: 'Contrôle qualité',
        desc: 'Vérification des matériaux, des méthodes et des normes applicables.',
        items: ['Tests & réceptions', 'Levées de réserves', 'PV de réception'],
      },
    ],
    process: [
      { title: 'Prise en main', desc: 'Revue du dossier et installation sur le terrain.' },
      { title: 'Suivi continu', desc: 'Contrôle quotidien des travaux et des livrables.' },
      { title: 'Reporting', desc: 'Transmission régulière des rapports aux parties prenantes.' },
      { title: 'Réception', desc: 'Accompagnement jusqu’à la réception définitive des ouvrages.' },
    ],
  },
  {
    slug: 'construction-ouvrages',
    number: '[03]',
    title: 'Construction d’ouvrages publics',
    img: projectImage(projectFolders.silmiyiri, 'silmiyiri-fondations.jpg'),
    desc: 'Réalisation d’infrastructures scolaires, sanitaires et hydrauliques au service des communautés vulnérables.',
    items: [
      'Écoles & salles de classe',
      'Latrines & infrastructures WASH',
      'Forages & points d’eau',
    ],
    tag: 'Réalisation',
    heroDesc:
      'Des ouvrages publics durables qui améliorent concrètement l’accès à l’éducation, à l’eau et aux services essentiels.',
    overview:
      'BUSCORD réalise des bâtiments scolaires, des blocs sanitaires, des forages et des équipements sur mesure, avec une capacité de production de mobilier scolaire et de bureau.',
    approach:
      'De la fondation à la livraison, nous maîtrisons la chaîne de réalisation en mobilisant des équipes qualifiées et des matériaux adaptés.',
    features: [
      {
        title: 'Bâtiments scolaires',
        desc: 'Construction et réhabilitation d’écoles, CEG et lycées.',
        items: ['Salles de classe', 'Bureaux & magasins', 'Mobilier scolaire'],
      },
      {
        title: 'Infrastructures WASH',
        desc: 'Latrines, châteaux d’eau et aménagements sanitaires.',
        items: ['Blocs de latrines', 'Adduction d’eau', 'Kits d’hygiène'],
      },
      {
        title: 'Production & fournitures',
        desc: 'Fabrication de mobilier et équipements sur commande.',
        items: ['Tables-bancs', 'Armoires & bureaux', 'Grillages & équipements divers'],
      },
    ],
    process: [
      { title: 'Préparation', desc: 'Approvisionnement et installation du chantier.' },
      { title: 'Exécution', desc: 'Réalisation des gros œuvres et second œuvres.' },
      { title: 'Équipement', desc: 'Fourniture et installation du mobilier.' },
      { title: 'Livraison', desc: 'Réception et remise aux bénéficiaires.' },
    ],
  },
  {
    slug: 'intermediation-sociale',
    number: '[04]',
    title: 'Intermédiation sociale',
    img: projectImage(projectFolders.oronkua, 'oronkua-cuisine-communautaire.jpg'),
    desc: 'Accompagnement des communautés pour favoriser l’adhésion, l’inclusion et la durabilité des projets de développement.',
    items: [
      'Sensibilisation communautaire',
      'Mobilisation des acteurs locaux',
      'Suivi de l’impact social',
    ],
    tag: 'Développement social',
    heroDesc:
      'Mettre les communautés au cœur du projet pour garantir son acceptabilité, sa pérennité et son impact réel.',
    overview:
      'L’intermédiation sociale est au cœur de l’approche BUSCORD : sensibilisation, concertation avec les autorités locales et implication des bénéficiaires directs.',
    approach:
      'Nous facilitons le dialogue entre porteurs de projet, communautés, services déconcentrés et associations locales tout au long du cycle de vie du projet.',
    features: [
      {
        title: 'Sensibilisation',
        desc: 'Campagnes et séances d’information auprès des populations cibles.',
        items: ['Visites à domicile', 'Séances de sensibilisation', 'Supports pédagogiques'],
      },
      {
        title: 'Concertation locale',
        desc: 'Médiation entre acteurs institutionnels et communautés.',
        items: ['Comités locaux', 'Autorités coutumières', 'Associations de base'],
      },
      {
        title: 'Suivi d’impact',
        desc: 'Mesure de l’appropriation et de l’utilisation des ouvrages livrés.',
        items: ['Indicateurs sociaux', 'Retours terrain', 'Ajustements'],
      },
    ],
    process: [
      { title: 'Cartographie', desc: 'Identification des acteurs et dynamiques locales.' },
      { title: 'Mobilisation', desc: 'Sensibilisation et engagement des communautés.' },
      { title: 'Accompagnement', desc: 'Suivi de l’appropriation pendant et après le projet.' },
      { title: 'Capitalisation', desc: 'Retour d’expérience et recommandations.' },
    ],
  },
];

export const caseStudies = [
  {
    slug: 'lycee-yamwaya',
    img: projectImage(projectFolders.yamwaya, 'yamwaya-inauguration.jpg'),
    midImg: projectImage(projectFolders.yamwaya, 'yamwaya-salle-reunion.jpg'),
    gallery: [
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-inauguration.jpg'), caption: 'Inauguration du projet — Lycée Yamwaya de Ouahigouya' },
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-salle-reunion.jpg'), caption: 'Salle de réunion réhabilitée et équipée par BUSCORD' },
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-tables-bancs.jpg'), caption: 'Tables-bancs confectionnés par BUSCORD' },
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-supervision.jpg'), caption: 'Mission de supervision des travaux — Ministère de l’Économie et des Finances' },
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-visite-classe.jpg'), caption: 'Visite de suivi dans une salle de classe réhabilitée' },
      { src: projectImage(projectFolders.yamwaya, 'yamwaya-eleve-classe.jpg'), caption: 'Élèves dans une salle de classe réhabilitée — Lycée Yamwaya' },
    ],
    title: 'Réhabilitation du Lycée Yamwaya',
    desc: '24 salles de classes réhabilitées avec mobilier scolaire, réhabilitation et équipement de la salle de réunion — plus de 1 200 élèves impactés à Ouahigouya.',
    category: 'Éducation',
    client: 'Fonds de contrepartie Japon',
    result: '207M FCFA',
    year: '2024–2026',
    featured: true,
    subtitle:
      'Réhabilitation de 24 salles de classes avec mobilier scolaire, et réhabilitation complète de la salle de réunion (climatisation, mobilier, équipements audiovisuels).',
    stats: [
      { value: '24', label: 'Salles réhabilitées' },
      { value: '1200+', label: 'Élèves impactés' },
      { value: '207M', label: 'FCFA budget' },
      { value: '100%', label: 'Conformité bailleur' },
    ],
    challenge:
      'Le Lycée Yamwaya de Ouahigouya nécessitait une remise à niveau globale : salles de classes dégradées, absence de mobilier scolaire adapté et salle de réunion inutilisable pour les activités pédagogiques et institutionnelles.',
    approach:
      'BUSCORD a conçu et supervisé un projet de réhabilitation intégrée : remise en état des salles de classe avec fourniture de mobilier scolaire (tables-bancs), et réhabilitation complète de la salle de réunion avec climatisation, mobilier et équipements audiovisuels.',
    steps: [
      'Diagnostic technique et élaboration du dossier de financement.',
      'Réhabilitation de 24 salles de classes, 5 magasins et 4 bureaux.',
      'Équipement complet de la salle de réunion (climatiseurs, mobilier, projecteur).',
      'Fourniture de 315 tables-bancs et 10 bureaux pour enseignants.',
      'Supervision des travaux avec les agents du Ministère de l’Économie et des Finances.',
      'Réception et remise aux autorités éducatives.',
    ],
    solution:
      'Un lycée réhabilité avec des salles de classe équipées de mobilier scolaire et une salle de réunion fonctionnelle pour les conférences, les concertations et les rencontres institutionnelles.',
    quote: {
      text: 'Ce projet a permis à l’ensemble des bénéficiaires de se sentir inclus dans la politique actuelle en matière d’éducation et de s’impliquer dans le développement du pays.',
      author: 'Bénéficiaires du Lycée Yamwaya',
    },
    results:
      'Plus de 1 200 élèves poursuivent leur cursus dans des salles réhabilitées et équipées de mobilier scolaire. La salle de réunion réhabilitée accueille conférences, travaux de groupes et rencontres parents-élèves dans de bonnes conditions.',
    takeaway:
      'La réhabilitation intégrée d’un établissement scolaire transforme durablement les conditions d’apprentissage et renforce la confiance des communautés envers les politiques éducatives.',
  },
  {
    slug: 'ecole-bissou',
    img: projectImage(projectFolders.bissou, 'bissou-batiment.jpg'),
    midImg: projectImage(projectFolders.bissou, 'bissou-eleves.jpg'),
    gallery: [
      { src: projectImage(projectFolders.bissou, 'bissou-panneau.jpg'), caption: 'Panneau du projet — École primaire de Bissou (Commune de Godyr)' },
      { src: projectImage(projectFolders.bissou, 'bissou-batiment.jpg'), caption: 'Bâtiment des salles de classes à l’école de Bissou' },
      { src: projectImage(projectFolders.bissou, 'bissou-eleves.jpg'), caption: 'Élèves dans une salle de classe à l’école de Bissou' },
      { src: projectImage(projectFolders.bissou, 'bissou-inauguration.jpg'), caption: 'Cérémonie d’inauguration de l’école de Bissou' },
      { src: projectImage(projectFolders.bissou, 'bissou-visite.jpg'), caption: 'Visite du site — École de Bissou' },
    ],
    title: 'École primaire de Bissou',
    desc: 'Construction d’une école complète dans la commune rurale de Godyr (Sanguié).',
    category: 'Éducation',
    client: 'Ambassade du Japon (APL)',
    result: '43M FCFA',
    year: '2022',
    subtitle:
      '3 salles de classes, magasin, latrines et mobilier scolaire pour les enfants de Bissou et des villages environnants.',
    stats: [
      { value: '3', label: 'Salles de classe' },
      { value: '8', label: 'Latrines' },
      { value: '90', label: 'Tables-bancs' },
      { value: '2023', label: 'Ouverture' },
    ],
    challenge:
      'Les enfants du village de Bissou et des localités voisines n’avaient pas accès à une infrastructure scolaire adaptée pour poursuivre leur scolarité primaire.',
    approach:
      'BUSCORD a conçu et réalisé un projet intégré financé par l’Ambassade du Japon, incluant bâtiments, latrines et équipements pédagogiques.',
    steps: [
      'Montage du dossier APL et validation par le bailleur.',
      'Construction de 3 salles de classes et d’un magasin.',
      'Réalisation de 8 latrines.',
      'Fourniture de 90 tables-bancs, bureaux, armoires et tableaux.',
      'Réception et inauguration de l’école en 2023.',
    ],
    solution:
      'Une école primaire publique fonctionnelle, ouverte depuis 2023, qui accueille les enfants du village et des environs.',
    quote: {
      text: 'Cette école permet depuis son ouverture à des enfants du village et des localités environnantes d’aller à l’école.',
      author: 'Communauté de Bissou',
    },
    results:
      'Accès à l’éducation primaire pour une population rurale jusqu’alors mal desservie, avec des infrastructures sanitaires et du mobilier complet.',
    takeaway:
      'Un projet scolaire rural bien conçu change la trajectoire éducative d’une communauté entière.',
  },
  {
    slug: 'ecole-ezaca',
    img: projectImage(projectFolders.ezaca, '100854631.jpg'),
    midImg: projectImage(projectFolders.ezaca, 'ezaca-fondations.jpg'),
    gallery: [
      { src: projectImage(projectFolders.ezaca, '100854631.jpg'), caption: 'Chantier — École Ezaca B, Trame d’accueil' },
      { src: projectImage(projectFolders.ezaca, 'ezaca-fondations.jpg'), caption: 'Travaux de fondations — École Ezaca B' },
      { src: projectImage(projectFolders.ezaca, '100854632.jpg'), caption: 'Suivi de chantier — École Ezaca B' },
      { src: projectImage(projectFolders.ezaca, '100854633.jpg'), caption: 'Avancement des travaux — École Ezaca B' },
    ],
    title: 'École Ezaca B — Ouagadougou',
    desc: 'Extension de l’école Ezaca B à la Trame d’accueil : 675 élèves accueillis dans de nouvelles salles.',
    category: 'Éducation',
    client: 'Ambassade du Japon (APL)',
    result: '65M FCFA',
    year: '2025',
    subtitle:
      '03 salles de classe, magasin, bureau, salle de réunion, latrines et mobilier scolaire complet.',
    stats: [
      { value: '675', label: 'Élèves accueillis' },
      { value: '3', label: 'Salles construites' },
      { value: '65M', label: 'FCFA budget' },
      { value: 'Oct. 2025', label: 'Réception' },
    ],
    challenge:
      'La saturation des salles existantes limitait la capacité d’accueil de l’école Ezaca B dans un quartier en forte croissance démographique.',
    approach:
      'BUSCORD a conçu et supervisé un projet d’extension intégré, livré avec réception provisoire en octobre 2025.',
    steps: [
      'Conception du projet et montage du financement APL.',
      'Construction de 3 salles, magasin, bureau et salle de réunion.',
      'Réalisation de 2 blocs de latrines.',
      'Fourniture de mobilier scolaire complet.',
      'Réception provisoire le 28 octobre 2025.',
    ],
    solution:
      'Des infrastructures modernes permettant d’accueillir 675 élèves (326 garçons et 349 filles) dans de bonnes conditions.',
    quote: {
      text: '675 élèves poursuivent désormais leur cycle scolaire dans ces nouvelles salles de classe.',
      author: 'Direction de l’école Ezaca B',
    },
    results:
      'Renforcement significatif de la capacité d’accueil scolaire dans la Trame d’accueil à Ouagadougou.',
    takeaway:
      'L’extension ciblée d’un établissement urbain répond rapidement à la pression démographique et améliore l’équité d’accès à l’éducation.',
  },
  {
    slug: 'malnutrition-oronkua',
    img: projectImage(projectFolders.oronkua, 'oronkua-nutrition.jpg'),
    midImg: projectImage(projectFolders.oronkua, 'oronkua-cuisine-communautaire.jpg'),
    gallery: [
      { src: projectImage(projectFolders.oronkua, 'oronkua-nutrition.jpg'), caption: 'Accompagnement nutritionnel des enfants — Commune d’Oronkua' },
      { src: projectImage(projectFolders.oronkua, 'oronkua-cuisine-communautaire.jpg'), caption: 'Séance de sensibilisation communautaire — lutte contre la malnutrition' },
      { src: projectImage(projectFolders.oronkua, 'WhatsApp Image 2026-07-05 at 17.17.10.jpeg'), caption: 'Activité de terrain — lutte contre la malnutrition à Oronkua' },
    ],
    title: 'Lutte contre la malnutrition — Oronkua',
    desc: 'Projet de santé communautaire couvrant 7 villages sur les 14 de la commune d’Oronkua.',
    category: 'Santé',
    client: 'FSSN (France)',
    result: '3M FCFA',
    year: '2021',
    subtitle:
      'Sensibilisation, visites à domicile et équipements pour la lutte contre la malnutrition infantile dans 7 villages de la commune.',
    stats: [
      { value: '7', label: 'Villages couverts (sur 14)' },
      { value: '3M', label: 'FCFA budget' },
      { value: '2021', label: 'Année' },
      { value: 'VAD', label: 'Visites à domicile' },
    ],
    challenge:
      'La malnutrition infantile touchait de nombreux foyers dans la commune d’Oronkua, avec un besoin urgent de sensibilisation et d’accompagnement des mères.',
    approach:
      'BUSCORD a conçu un projet intégré mobilisant mères d’enfants, infirmiers, agents de santé communautaire et l’association Niban-Zoéré.',
    steps: [
      'Montage du dossier et obtention du financement FSSN.',
      'Organisation de séances de sensibilisation.',
      'Acquisition d’ustensiles de cuisine et de boîtes à images.',
      'Réalisation de visites à domicile dans 7 villages de la commune.',
      'Coordination avec les acteurs de santé de proximité.',
    ],
    solution:
      'Un dispositif communautaire de prévention et de suivi de la malnutrition infantile, ancré localement.',
    quote: {
      text: 'Ce projet a mobilisé les mères, les infirmiers et les animateurs communautaires autour d’un objectif commun de santé infantile.',
      author: 'Association Niban-Zoéré',
    },
    results:
      'Amélioration de la sensibilisation et de l’accompagnement des ménages sur la nutrition infantile dans 7 villages sur les 14 de la commune.',
    takeaway:
      'Les projets de santé communautaire réussissent lorsqu’ils s’appuient sur les structures locales et les acteurs de première ligne.',
  },
  {
    slug: 'ceg-sandogo',
    img: projectImage(projectFolders.sandogo, 'sandogo-batiment.jpg'),
    midImg: projectImage(projectFolders.sandogo, 'sandogo-visite.jpg'),
    gallery: [
      { src: projectImage(projectFolders.sandogo, 'sandogo-batiment.jpg'), caption: 'Nouvelles salles de classe — CEG Sandogo B' },
      { src: projectImage(projectFolders.sandogo, 'sandogo-visite.jpg'), caption: 'Visite de suivi du chantier — CEG Sandogo B' },
      { src: projectImage(projectFolders.sandogo, 'WhatsApp Image 2026-07-05 at 17.11.20.jpeg'), caption: 'Suivi de chantier — CEG Sandogo B' },
      { src: projectImage(projectFolders.sandogo, 'WhatsApp Image 2026-07-05 at 17.11.19 (2).jpeg'), caption: 'Avancement des travaux — CEG Sandogo B' },
    ],
    title: 'CEG Sandogo B — Ouagadougou',
    desc: '4 salles de classe et mobilier scolaire pour renforcer la capacité d’accueil du CEG.',
    category: 'Éducation',
    client: 'Ambassade du Japon (APL)',
    result: '63M FCFA',
    year: '2023',
    subtitle:
      'Extension du CEG Sandogo B avec 4 salles, bureau et équipements pédagogiques complets.',
    stats: [
      { value: '4', label: 'Salles construites' },
      { value: '160', label: 'Tables-bancs' },
      { value: '63M', label: 'FCFA budget' },
      { value: '2023', label: 'Livraison' },
    ],
    challenge:
      'Le CEG Sandogo B faisait face à une surcharge d’effectifs compromettant la qualité de l’enseignement.',
    approach:
      'BUSCORD a conçu et réalisé une extension comprenant salles de classe, bureau administratif et mobilier scolaire.',
    steps: [
      'Élaboration du dossier technique et financier APL.',
      'Construction de 4 salles de classe et d’un bureau.',
      'Fourniture de 160 tables-bancs et équipements enseignants.',
      'Réception et mise en service des nouvelles salles.',
    ],
    solution:
      'Des infrastructures supplémentaires permettant d’absorber la demande scolaire croissante du quartier.',
    quote: {
      text: 'Ces réalisations ont renforcé les capacités d’accueil du CEG de Sandogo B.',
      author: 'Autorités éducatives locales',
    },
    results:
      'Amélioration immédiate des conditions d’accueil et de travail pour élèves et enseignants.',
    takeaway:
      'L’extension d’un CEG urbain est un levier rapide pour réduire la surcharge scolaire.',
  },
  {
    slug: 'ecole-silmiyiri',
    img: projectImage(projectFolders.silmiyiri, 'silmiyiri-fondations.jpg'),
    midImg: projectImage(projectFolders.silmiyiri, 'chantier-fondations-2.jpg'),
    gallery: [
      { src: projectImage(projectFolders.silmiyiri, 'silmiyiri-fondations.jpg'), caption: 'Fondations — École Silmiyiri (école Nemnin de Silmiyiri), Ouagadougou' },
      { src: projectImage(projectFolders.silmiyiri, 'chantier-fondations-2.jpg'), caption: 'Inspection de chantier avec l’équipe BUSCORD' },
      { src: projectImage(projectFolders.silmiyiri, 'WhatsApp Image 2026-07-05 at 17.25.56.jpeg'), caption: 'Suivi-contrôle des travaux — École Nemnin de Silmiyiri' },
      { src: projectImage(projectFolders.silmiyiri, 'WhatsApp Image 2026-07-05 at 17.26.31.jpeg'), caption: 'Avancement du chantier — École Nemnin de Silmiyiri' },
    ],
    title: 'École Silmiyiri (école Nemnin de Silmiyiri) — Ouagadougou',
    desc: 'Construction de salles de classe, latrines et château d’eau pour l’école Silmiyiri (école Nemnin de Silmiyiri).',
    category: 'Éducation',
    client: 'Ambassade du Japon (APL)',
    result: 'En cours',
    year: '2025',
    subtitle:
      '3 salles de classes, magasin, blocs de latrines, château d’eau et mobilier scolaire.',
    stats: [
      { value: '3', label: 'Salles' },
      { value: '5', label: 'Blocs latrines' },
      { value: '1', label: 'Château d’eau' },
      { value: '2025', label: 'Année' },
    ],
    challenge:
      'L’école Silmiyiri (école Nemnin de Silmiyiri) nécessitait des infrastructures scolaires et WASH adaptées aux besoins d’une population scolarisée croissante.',
    approach:
      'BUSCORD assure la conception et le suivi-contrôle d’un projet intégré incluant bâtiments, assainissement et adduction d’eau.',
    steps: [
      'Conception du projet et validation APL.',
      'Suivi de la construction de 3 salles et d’un magasin.',
      'Supervision des 5 blocs de latrines (3 postes chacun).',
      'Installation du château d’eau.',
      'Fourniture du mobilier scolaire.',
    ],
    solution:
      'Un établissement scolaire équipé avec des infrastructures éducatives et sanitaires complètes.',
    quote: {
      text: 'Un projet intégré qui combine éducation, assainissement et accès à l’eau.',
      author: 'BUSCORD',
    },
    results:
      'Amélioration des conditions d’apprentissage et d’hygiène pour les élèves de Silmiyiri (école Nemnin de Silmiyiri).',
    takeaway:
      'Les projets scolaires intégrant WASH maximisent l’impact sur la santé et la scolarisation des enfants.',
  },
];

export const partners = [
  {
    id: 'japon-apl',
    name: 'Ambassade du Japon (APL)',
    logo: '/images/partners/japan-flag.png',
    alt: 'Ambassade du Japon — Programme APL',
  },
  {
    id: 'fssn',
    name: 'FSSN — Solidarité Santé Navale',
    logo: null,
    alt: 'Fonds Solidarité Santé Navale',
  },
  {
    id: 'ong-ode',
    name: 'ONG ODE',
    logo: '/images/partners/ode.png',
    alt: 'Office de Développement des Églises Évangéliques',
  },
  {
    id: 'children-believe',
    name: 'Children Believe',
    logo: '/images/partners/children-believe.png',
    alt: 'Children Believe',
  },
  {
    id: 'mairie-zitenga',
    name: 'Mairie de Zitenga',
    logo: null,
    alt: 'Mairie de Zitenga',
  },
  {
    id: 'mefp',
    name: 'Ministère de l’Économie et des Finances',
    logo: '/images/partners/burkina-armoiries.png',
    alt: 'Ministère de l’Économie et des Finances du Burkina Faso',
  },
  {
    id: 'niban-zeoere',
    name: 'Association Niban-Zéoéré',
    logo: null,
    alt: 'Association Niban-Zéoéré',
  },
  {
    id: 'aslp-pouni',
    name: 'Association des Animateurs et Superviseurs de Linguistique de Pouni',
    logo: null,
    alt: 'Association des Animateurs et Superviseurs de Linguistique de Pouni',
  },
  {
    id: 'arbre-palabre',
    name: 'Association Arbre à Palabre',
    logo: null,
    alt: 'Association Arbre à Palabre',
  },
  {
    id: 'femmes-du-sud',
    name: 'Association Femmes du Sud',
    logo: null,
    alt: 'Association Femmes du Sud',
  },
];

export const milestones = [
  {
    year: '2021',
    title: 'Santé communautaire à Oronkua',
    desc: 'Conception d’un projet de lutte contre la malnutrition infantile financé par le FSSN — 7 villages couverts sur les 14 de la commune.',
  },
  {
    year: '2022',
    title: 'École de Bissou (Sanguié)',
    desc: 'Construction d’une école primaire complète financée par l’Ambassade du Japon — ouverture en 2023.',
  },
  {
    year: '2023',
    title: 'CEG Sandogo B',
    desc: 'Extension du collège avec 4 salles de classe et mobilier pour 160 tables-bancs.',
  },
  {
    year: '2025',
    title: 'Écoles Ezaca B & Silmiyiri (école Nemnin de Silmiyiri)',
    desc: 'Projets d’extension et de construction à Ouagadougou, avec réception provisoire d’Ezaca B en octobre 2025.',
  },
  {
    year: '2024–2026',
    title: 'Lycée Yamwaya',
    desc: 'Réhabilitation majeure de 24 salles à Ouahigouya — projet phare de 207 millions FCFA.',
  },
];

export const faqs = [
  {
    question: 'Quels types de projets BUSCORD accompagne-t-il ?',
    answer:
      'Nous intervenons sur des projets humanitaires et de développement : éducation, santé, eau et assainissement, infrastructures communautaires et fournitures spécialisées pour ONG et bailleurs.',
  },
  {
    question: 'Travaillez-vous avec des bailleurs internationaux ?',
    answer:
      'Oui. BUSCORD a une expérience confirmée avec l’Ambassade du Japon (APL), le FSSN, des ONG internationales et des institutions nationales burkinabè.',
  },
  {
    question: 'Proposez-vous uniquement la conception ou aussi la réalisation ?',
    answer:
      'Nous couvrons l’ensemble de la chaîne : conception de projets, suivi-contrôle des travaux, réalisation d’ouvrages publics, intermédiation sociale et production de mobilier.',
  },
  {
    question: 'Quelle est votre politique de protection de l’enfance ?',
    answer:
      'BUSCORD applique une politique de protection des droits de l’enfant sur l’ensemble de ses activités. Nous combattons toute forme de maltraitance à l’égard des enfants et dénonçons tout comportement qui y est assimilé. Cet engagement guide nos interventions en milieu scolaire, sanitaire et communautaire.',
  },
  {
    question: 'Comment intégrez-vous l’environnement dans vos projets ?',
    answer:
      'Nous travaillons à la protection et à la préservation de l’environnement à chaque étape : conception, exécution des travaux et sensibilisation des communautés. Gestion des déchets de chantier, choix des matériaux et respect des espaces naturels font partie de notre approche responsable.',
  },
  {
    question: 'Comment démarrer une collaboration avec BUSCORD ?',
    answer:
      'Contactez-nous par téléphone, WhatsApp ou e-mail. Nous échangeons sur votre besoin, analysons le contexte et vous proposons une approche adaptée à vos objectifs et contraintes de financement.',
  },
];

export const processSteps = [
  {
    title: 'Écouter & diagnostiquer',
    desc: 'Comprendre le besoin, le contexte local et les exigences du bailleur ou du maître d’ouvrage.',
  },
  {
    title: 'Concevoir & structurer',
    desc: 'Élaborer un dossier technique, financier et social solide et finançable.',
  },
  {
    title: 'Réaliser & superviser',
    desc: 'Piloter les travaux sur le terrain avec rigueur, transparence et reporting continu.',
  },
];

export const partnershipTabs = [
  {
    id: 'tab-1',
    label: 'Expertise terrain',
    content:
      'Plus de 15 ans d’expérience en ONG, bureaux d’études et réalisation de travaux publics au Burkina Faso et à l’international.',
  },
  {
    id: 'tab-2',
    label: 'Conformité bailleurs',
    content:
      'Maîtrise des procédures APL et des exigences des financeurs internationaux : reporting, supervision et réceptions conformes.',
  },
  {
    id: 'tab-3',
    label: 'Impact communautaire',
    content:
      'Chaque projet est pensé pour les bénéficiaires directs : inclusion, intermédiation sociale et durabilité des ouvrages livrés.',
  },
  {
    id: 'tab-4',
    label: 'Engagement responsable',
    content:
      'BUSCORD applique une politique de protection des droits de l’enfant et combat toute forme de maltraitance. Nous travaillons également à la protection et à la préservation de l’environnement dans toutes nos interventions.',
  },
];

export const commitments = [
  {
    id: 'child-protection',
    title: 'Protection des droits de l’enfant',
    description:
      'Dans tout ce que nous faisons, BUSCORD applique une politique de protection des droits de l’enfant. Nous combattons toute forme de maltraitance à l’égard des enfants et dénonçons tout comportement qui y est assimilé — en milieu scolaire, sur nos chantiers et dans nos actions de sensibilisation communautaire.',
    policy:
      'BUSCORD s’engage à protéger les droits et la dignité de tout enfant touché par ses activités. Toute forme de maltraitance, d’exploitation, de violence ou de négligence à l’égard des enfants est strictement proscrite. Les membres de l’équipe, les partenaires et les prestataires sont tenus de respecter ce principe. Tout manquement ou suspicion doit être signalé et fera l’objet d’une prise en charge conforme aux procédures en vigueur.',
  },
  {
    id: 'environment',
    title: 'Protection de l’environnement',
    description:
      'Nous travaillons à la protection et à la préservation de l’environnement dans la conception, le suivi et la réalisation de nos projets : gestion responsable des déchets de chantier, limitation de l’impact sur les espaces naturels et sensibilisation des communautés bénéficiaires.',
    policy:
      'BUSCORD intègre la protection de l’environnement dans l’ensemble de son cycle d’intervention. Nos équipes veillent à réduire l’empreinte écologique des chantiers, à respecter les normes applicables et à favoriser des pratiques durables. La préservation des ressources naturelles et la sensibilisation des populations font partie intégrante de notre démarche de développement responsable.',
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

export const team = [
  {
    id: 'pdg',
    name: 'Président Directeur Général',
    role: 'PDG & Fondateur de BUSCORD',
    image: '/images/equipe/pdg.jpeg',
    desc: 'Supervision stratégique, direction générale et conduite globale des projets de conception, suivi-contrôle et réalisation.',
    badge: 'Direction Générale',
    isLeader: true,
  },
  {
    id: 'daouda-bazie',
    name: 'Daouda BAZIÉ',
    role: 'Ingénieur BTP',
    image: '/images/equipe/Daouda BAZIÉ.jpeg',
    desc: 'Suivi de chantier, contrôle qualité et supervision technique des infrastructures (ici avec un table-banc confectionné par BUSCORD).',
    badge: 'Ingénierie & Suivi',
  },
  {
    id: 'bayala-nathalie',
    name: 'BAYALA Nathalie',
    role: 'Secrétaire de direction',
    image: '/images/equipe/BAYALA Nathalie.jpeg',
    desc: 'Gestion administrative, secrétariat général et coordination relationnelle du bureau.',
    badge: 'Administration',
  },
  {
    id: 'bationo-marielle',
    name: 'Bationo Marielle Laurencia',
    role: 'Responsable logistique',
    image: '/images/equipe/Bationo Marielle Laurencia.jpeg',
    desc: 'Organisation des approvisionnements, gestion des équipements de chantier et chaîne logistique terrain.',
    badge: 'Logistique',
  },
  {
    id: 'zongo-maminata',
    name: 'Mme ZONGO / TARNAGDA Maminata',
    role: 'Responsable des affaires financières',
    image: null,
    desc: 'Supervision financière, contrôle budgétaire et suivi des reportings comptables destinés aux bailleurs.',
    badge: 'Finance & Gestion',
    pendingImage: true,
  },
];

