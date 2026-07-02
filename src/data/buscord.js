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
  phones: ['+226 72 12 63 93', '+226 68 81 81 47'],
  whatsapp: '+226 77 16 24 63',
  location: 'Ouagadougou, Burkina Faso',
};

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
  { number: '6+', label: 'Projets structurants livrés' },
  { number: '440M+', label: 'FCFA de projets montés' },
  { number: '1200+', label: 'Élèves impactés (Yamwaya)' },
  { number: '100%', label: 'Engagement terrain & conformité' },
];

export const stats = [
  {
    number: '6+',
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
    img: '/images/projects/bissou-panneau.jpg',
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
    img: '/images/projects/yamwaya-supervision.jpg',
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
    img: '/images/projects/ezaca-chantier.jpg',
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
    img: '/images/projects/oronkua-cuisine-communautaire.jpg',
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
    img: '/images/projects/yamwaya-inauguration.jpg',
    midImg: '/images/projects/yamwaya-salle-reunion.jpg',
    gallery: [
      { src: '/images/projects/yamwaya-inauguration.jpg', caption: 'Inauguration du projet — Lycée Yamwaya de Ouahigouya' },
      { src: '/images/projects/yamwaya-salle-reunion.jpg', caption: 'Salle de réunion réhabilitée et équipée par BUSCORD' },
      { src: '/images/projects/yamwaya-tables-bancs.jpg', caption: 'Tables-bancs confectionnés par BUSCORD' },
      { src: '/images/projects/yamwaya-supervision.jpg', caption: 'Mission de supervision des travaux — Ministère de l’Économie et des Finances' },
      { src: '/images/projects/yamwaya-visite-classe.jpg', caption: 'Visite de suivi dans une salle de classe réhabilitée' },
    ],
    title: 'Réhabilitation du Lycée Yamwaya',
    desc: '24 salles de classes réhabilitées et équipées à Ouahigouya pour plus de 1 200 élèves.',
    category: 'Éducation',
    client: 'Fonds de contrepartie Japon',
    result: '207M FCFA',
    year: '2015–2018',
    featured: true,
    subtitle:
      'Réhabilitation complète d’un lycée stratégique du Nord : salles, bureaux, salle de réunion équipée et mobilier scolaire.',
    stats: [
      { value: '24', label: 'Salles réhabilitées' },
      { value: '1200+', label: 'Élèves impactés' },
      { value: '207M', label: 'FCFA budget' },
      { value: '100%', label: 'Conformité bailleur' },
    ],
    challenge:
      'Le Lycée Yamwaya de Ouahigouya nécessitait une remise à niveau globale de ses infrastructures pour offrir des conditions d’étude dignes à plus de 1 200 élèves et à l’ensemble du corps enseignant.',
    approach:
      'BUSCORD a conçu et supervisé un projet de réhabilitation intégrée : salles de classe, magasins, bureaux, salle des professeurs et salle de réunion entièrement équipée (climatisation, mobilier, équipements audiovisuels).',
    steps: [
      'Diagnostic technique et élaboration du dossier de financement.',
      'Réhabilitation de 24 salles de classes, 5 magasins et 4 bureaux.',
      'Équipement complet de la salle de réunion (climatiseurs, mobilier, projecteur).',
      'Fourniture de 315 tables-bancs et 10 bureaux pour enseignants.',
      'Supervision des travaux avec les agents du Ministère de l’Économie et des Finances.',
      'Réception et remise aux autorités éducatives.',
    ],
    solution:
      'Un lycée entièrement réhabilité offrant des espaces de cours, de concertation et de réunion adaptés aux exigences pédagogiques modernes.',
    quote: {
      text: 'Ce projet a permis à l’ensemble des bénéficiaires de se sentir inclus dans la politique actuelle en matière d’éducation et de s’impliquer dans le développement du pays.',
      author: 'Bénéficiaires du Lycée Yamwaya',
    },
    results:
      'Plus de 1 200 élèves poursuivent leur cursus dans de bonnes conditions. Les enseignants disposent d’espaces de préparation et de concertation. L’établissement peut accueillir conférences, travaux de groupes et rencontres parents-élèves.',
    takeaway:
      'La réhabilitation intégrée d’un établissement scolaire transforme durablement les conditions d’apprentissage et renforce la confiance des communautés envers les politiques éducatives.',
  },
  {
    slug: 'ecole-bissou',
    img: '/images/projects/bissou-batiment.jpg',
    midImg: '/images/projects/bissou-eleves.jpg',
    gallery: [
      { src: '/images/projects/bissou-panneau.jpg', caption: 'Panneau du projet — École primaire de Bissou (Commune de Godyr)' },
      { src: '/images/projects/bissou-batiment.jpg', caption: 'Bâtiment des salles de classes à l’école de Bissou' },
      { src: '/images/projects/bissou-eleves.jpg', caption: 'Élèves dans une salle de classe à l’école de Bissou' },
      { src: '/images/projects/bissou-inauguration.jpg', caption: 'Cérémonie d’inauguration de l’école de Bissou' },
      { src: '/images/projects/bissou-visite.jpg', caption: 'Visite du site — École de Bissou' },
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
    img: '/images/projects/ezaca-chantier.jpg',
    midImg: '/images/projects/ezaca-fondations.jpg',
    gallery: [
      { src: '/images/projects/ezaca-chantier.jpg', caption: 'Suivi de chantier — École Ezaca B, Trame d’accueil' },
      { src: '/images/projects/ezaca-fondations.jpg', caption: 'Travaux de fondations — École Ezaca B' },
      { src: '/images/projects/chantier-fondations-2.jpg', caption: 'Supervision des travaux sur site' },
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
    img: '/images/projects/oronkua-nutrition.jpg',
    midImg: '/images/projects/oronkua-cuisine-communautaire.jpg',
    gallery: [
      { src: '/images/projects/oronkua-nutrition.jpg', caption: 'Accompagnement nutritionnel des enfants — Commune d’Oronkua' },
      { src: '/images/projects/oronkua-cuisine-communautaire.jpg', caption: 'Séance de sensibilisation communautaire — lutte contre la malnutrition' },
    ],
    title: 'Lutte contre la malnutrition — Oronkua',
    desc: 'Projet de santé communautaire dans 14 villages de la commune d’Oronkua.',
    category: 'Santé',
    client: 'FSSN (France)',
    result: '3M FCFA',
    year: '2021',
    subtitle:
      'Sensibilisation, visites à domicile et équipements pour la lutte contre la malnutrition infantile.',
    stats: [
      { value: '14', label: 'Villages couverts' },
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
      'Réalisation de visites à domicile dans 14 villages.',
      'Coordination avec les acteurs de santé de proximité.',
    ],
    solution:
      'Un dispositif communautaire de prévention et de suivi de la malnutrition infantile, ancré localement.',
    quote: {
      text: 'Ce projet a mobilisé les mères, les infirmiers et les animateurs communautaires autour d’un objectif commun de santé infantile.',
      author: 'Association Niban-Zoéré',
    },
    results:
      'Amélioration de la sensibilisation et de l’accompagnement des ménages sur la nutrition infantile dans 14 villages.',
    takeaway:
      'Les projets de santé communautaire réussissent lorsqu’ils s’appuient sur les structures locales et les acteurs de première ligne.',
  },
  {
    slug: 'ceg-sandogo',
    img: '/images/projects/sandogo-batiment.jpg',
    midImg: '/images/projects/sandogo-visite.jpg',
    gallery: [
      { src: '/images/projects/sandogo-batiment.jpg', caption: 'Nouvelles salles de classe — CEG Sandogo B' },
      { src: '/images/projects/sandogo-visite.jpg', caption: 'Visite de suivi du chantier — CEG Sandogo B' },
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
    img: '/images/projects/silmiyiri-fondations.jpg',
    midImg: '/images/projects/ezaca-chantier.jpg',
    gallery: [
      { src: '/images/projects/silmiyiri-fondations.jpg', caption: 'Fondations — École Silmiyiri, Ouagadougou' },
      { src: '/images/projects/ezaca-chantier.jpg', caption: 'Suivi-contrôle des travaux de construction' },
      { src: '/images/projects/chantier-fondations-2.jpg', caption: 'Inspection de chantier avec l’équipe BUSCORD' },
    ],
    title: 'École Silmiyiri — Ouagadougou',
    desc: 'Construction de salles de classe, latrines et château d’eau pour l’école Silmiyiri.',
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
      'L’école Silmiyiri nécessitait des infrastructures scolaires et WASH adaptées aux besoins d’une population scolarisée croissante.',
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
      'Amélioration des conditions d’apprentissage et d’hygiène pour les élèves de Silmiyiri.',
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
];

export const milestones = [
  {
    year: '2021',
    title: 'Santé communautaire à Oronkua',
    desc: 'Conception d’un projet de lutte contre la malnutrition infantile financé par le FSSN dans 14 villages.',
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
    title: 'Écoles Ezaca B & Silmiyiri',
    desc: 'Projets d’extension et de construction à Ouagadougou, avec réception provisoire d’Ezaca B en octobre 2025.',
  },
  {
    year: '2015–18',
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
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
