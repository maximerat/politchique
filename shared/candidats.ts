export type StatutCandidature =
  | "declare"
  | "pressenti"
  | "retire"
  | "ecarte";

export type Candidat = {
  id: string;
  nom: string;
  parti: string;
  partiIcone: string;
  photo: string;
  resume: string;
  statut: StatutCandidature;
  statutDetail: string;
  source: { label: string; url: string };
};

// Les classes de couleur vivent dans main.css (.fr-statut--*), indexées par la
// clé du statut, pour rester dans la palette bleu / blanc / rouge du site.
export const statutsCandidature: Record<
  StatutCandidature,
  { label: string; icone: string }
> = {
  declare: {
    label: "Candidature déclarée",
    icone: "i-lucide-badge-check",
  },
  pressenti: {
    label: "Candidature pressentie",
    icone: "i-lucide-circle-help",
  },
  retire: {
    label: "Candidature retirée",
    icone: "i-lucide-circle-x",
  },
  ecarte: {
    label: "Hors course",
    icone: "i-lucide-user-minus",
  },
};

export const candidats: Candidat[] = [
  {
    id: "edouard-philippe",
    nom: "Édouard Philippe",
    parti: "Horizons",
    partiIcone: "i-lucide-compass",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edouard_Philippe_en_2025.png/500px-Edouard_Philippe_en_2025.png",
    resume:
      "Synthèse du Manifeste d'Horizons, avec principaux axes programmatiques, sources et positions publiques.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 3 septembre 2024.",
    source: {
      label: "Horizons — Le Manifeste",
      url: "https://horizonsleparti.fr/le-manifeste/",
    },
  },
  {
    id: "david-lisnard",
    nom: "David Lisnard",
    parti: "Nouvelle Énergie",
    partiIcone: "i-lucide-bolt",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/David_Lisnard_-_2013.jpg/500px-David_Lisnard_-_2013.jpg",
    resume:
      "Synthèse des positions de David Lisnard et de Nouvelle Énergie, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Intention annoncée le 17 janvier 2025, candidature déclarée le 31 mars 2026.",
    source: {
      label: "Nouvelle Énergie — Programme",
      url: "https://www.nouvelleenergie.fr/",
    },
  },
  {
    id: "gabriel-attal",
    nom: "Gabriel Attal",
    parti: "Renaissance",
    partiIcone: "i-lucide-sun",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Attal%202025%20%28cropped%29.jpg",
    resume:
      "Synthèse des positions de Gabriel Attal et de Renaissance, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 22 mai 2026.",
    source: {
      label: "Renaissance — Site officiel",
      url: "https://www.parti-renaissance.fr/",
    },
  },
  {
    id: "jerome-guedj",
    nom: "Jérôme Guedj",
    parti: "Parti socialiste",
    partiIcone: "i-lucide-flower-2",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A9r%C3%B4me%20Guedj%202010%20%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Jérôme Guedj et du Parti socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 5 février 2026 hors primaire, puis ralliée le 23 août 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique).",
    source: {
      label: "Parti socialiste — Projet",
      url: "https://ressources-militantes.parti-socialiste.fr/assets/pdf/PROJET_PS_V21avril-2.pdf",
    },
  },
  {
    id: "segolene-royal",
    nom: "Ségolène Royal",
    parti: "Parti socialiste",
    partiIcone: "i-lucide-flower-2",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Royal_Toulouse_2012.JPG",
    resume:
      "Synthèse neutre des positions de Ségolène Royal, candidate à la primaire socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 10 juillet 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique), dont le premier tour est prévu les 9 et 10 octobre 2026.",
    source: {
      label: "LCP — Annonce de candidature à la primaire socialiste",
      url: "https://lcp.fr/actualites/presidentielle-2027-segolene-royal-annonce-sa-candidature-a-la-primaire-socialiste",
    },
  },
  {
    id: "jean-luc-melenchon",
    nom: "Jean-Luc Mélenchon",
    parti: "La France insoumise",
    partiIcone: "i-lucide-megaphone",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Luc%20M%C3%A9lenchon%20%28Place%20au%20Peuple%29%20001.jpg",
    resume:
      "Synthèse des positions de Jean-Luc Mélenchon et de La France insoumise, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 3 mai 2026.",
    source: {
      label: "LFI — Avenir en commun 2025",
      url: "https://melenchon2027.fr/programme2025/livre/",
    },
  },
  {
    id: "marine-le-pen",
    nom: "Marine Le Pen",
    parti: "Rassemblement National",
    partiIcone: "i-lucide-flag",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Marine_Le_Pen_2025_%28cropped%29.jpg",
    resume:
      "Synthèse des positions de Marine Le Pen et du RN, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature confirmée le 7 juillet 2026.",
    source: {
      label: "RN — 22 mesures",
      url: "https://rassemblementnational.fr/22-mesures",
    },
  },
  {
    id: "bruno-retailleau",
    nom: "Bruno Retailleau",
    parti: "Les Républicains",
    partiIcone: "i-lucide-shield",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Bruno_Retailleau.png",
    resume:
      "Synthèse neutre des positions de Bruno Retailleau et des Républicains, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Désigné candidat des Républicains le 19 avril 2026.",
    source: {
      label: "Les Républicains — Nos propositions",
      url: "https://republicains.fr/qrtravail/",
    },
  },
  {
    id: "laurent-wauquiez",
    nom: "Laurent Wauquiez",
    parti: "Les Républicains",
    partiIcone: "i-lucide-shield",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Laurent_Wauquiez_2021.jpg",
    resume:
      "Synthèse neutre des positions de Laurent Wauquiez et de la droite républicaine, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Ambitions présidentielles assumées en 2025, mais pas de candidature déclarée : il a reconnu Bruno Retailleau comme « candidat légitime » en juin 2026, puis appelé à un soutien à Édouard Philippe le 1er juillet 2026.",
    source: {
      label: "Les Républicains — Site officiel",
      url: "https://republicains.fr/",
    },
  },
  {
    id: "xavier-bertrand",
    nom: "Xavier Bertrand",
    parti: "Nous France",
    partiIcone: "i-lucide-map",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xavier%20Bertrand%20-%202025%20%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Xavier Bertrand et de Nous France, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 3 février 2024.",
    source: {
      label: "Nous France — La vision",
      url: "https://www.nousfrance.fr/vision/",
    },
  },
  {
    id: "nicolas-dupont-aignan",
    nom: "Nicolas Dupont-Aignan",
    parti: "Debout la France",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Dupont-Aignan%2C_homme_politique_fran%C3%A7ais_%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Nicolas Dupont-Aignan et de Debout la France, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 8 mars 2025.",
    source: {
      label: "Debout la France — Le projet",
      url: "https://www.debout-la-france.fr/notre-projet/",
    },
  },
  {
    id: "florian-philippot",
    nom: "Florian Philippot",
    parti: "Les Patriotes",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Florian_Philippot_%28A%29_%28cropped%29.JPG",
    resume:
      "Synthèse neutre des positions de Florian Philippot et des Patriotes, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 9 mai 2026.",
    source: {
      label: "Les Patriotes — Grandes orientations",
      url: "https://les-patriotes.fr/wp-content/uploads/2025/09/lespatriotes_projet.pdf",
    },
  },
  {
    id: "francois-asselineau",
    nom: "François Asselineau",
    parti: "Union populaire républicaine",
    partiIcone: "i-lucide-landmark",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20ASSELINEAU.jpg",
    resume:
      "Synthèse neutre des positions de François Asselineau et de l'Union populaire républicaine, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Intention de candidature annoncée le 31 août 2023.",
    source: {
      label: "UPR — Programme 2022",
      url: "https://upr.fr/actualites/programme-presidentiel-2022",
    },
  },
  {
    id: "nathalie-arthaud",
    nom: "Nathalie Arthaud",
    parti: "Lutte ouvrière",
    partiIcone: "i-lucide-hammer",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nathalie%20Arthaud%20%28LO%29%2019-05-2024.jpg",
    resume:
      "Synthèse neutre des positions de Nathalie Arthaud et de Lutte ouvrière, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 8 décembre 2025.",
    source: {
      label: "Lutte ouvrière — Portail",
      url: "https://www.lutte-ouvriere.org/",
    },
  },
  {
    id: "delphine-batho",
    nom: "Delphine Batho",
    parti: "Génération Écologie",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Delphine%20Batho%20%28cropped%29.png",
    resume:
      "Synthèse neutre des positions de Delphine Batho et de Génération Écologie, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 25 novembre 2025.",
    source: {
      label: "Génération Écologie — Notre projet",
      url: "https://www.generationecologie.fr/a-propos/generation-ecologie/notre-projet/",
    },
  },
  {
    id: "clementine-autain",
    nom: "Clémentine Autain",
    parti: "L'APRÈS",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cl%C3%A9mentine%20Autain%2C%202017%20%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Clémentine Autain et de L'APRÈS, avec sources et état des procédures.",
    statut: "retire",
    statutDetail:
      "Candidature annoncée en mars 2025, retirée le 11 juillet 2026 après l'enlisement de la primaire de la gauche unitaire, consécutif au retrait du PS.",
    source: {
      label: "Clémentine Autain — Mon manifeste",
      url: "https://clementine-autain.fr/mon-manifeste/",
    },
  },
  {
    id: "fabien-roussel",
    nom: "Fabien Roussel",
    parti: "Parti communiste français",
    partiIcone: "i-lucide-hammer",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Roussel%20Fabien%201.jpg",
    resume:
      "Synthèse neutre des positions de Fabien Roussel et du Parti communiste français, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Le PCF a refusé de participer à la primaire de la gauche unitaire et prépare une candidature autonome, sans déclaration formelle à ce stade.",
    source: {
      label: "Fabien Roussel — La France des Jours heureux",
      url: "https://www.fabienroussel2022.fr/le_programme",
    },
  },
  {
    id: "marine-tondelier",
    nom: "Marine Tondelier",
    parti: "Les Écologistes",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/20210819_tondelier.m-cr3.jpg",
    resume:
      "Synthèse neutre des positions de Marine Tondelier et des Écologistes, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 22 octobre 2025, puis désignée candidate des Écologistes le 8 décembre 2025 avec 86 % des voix. Elle devait porter ces couleurs à la primaire de la gauche unitaire du 11 octobre 2026, aujourd'hui de facto abandonnée.",
    source: {
      label: "Marine Tondelier — Site de campagne",
      url: "https://marinetondelier.fr/",
    },
  },
  {
    id: "yannick-jadot",
    nom: "Yannick Jadot",
    parti: "Les Écologistes",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/20210819_jadot.yannick_5725.jpg",
    resume:
      "Synthèse neutre des positions de Yannick Jadot et des Écologistes, avec sources et état des procédures.",
    statut: "ecarte",
    statutDetail:
      "N'est pas candidat pour 2027 : Les Écologistes ont désigné Marine Tondelier le 8 décembre 2025, et il soutient la candidature de Raphaël Glucksmann à la primaire de l'espace social-démocrate.",
    source: {
      label: "Yannick Jadot — Programme présidentiel 2022",
      url: "https://assets.nationbuilder.com/themes/6181b6eb4445ea720389b314/attachments/original/1643803625/programme_presidentiel_yannick_jadot.pdf?1643803625=",
    },
  },
  {
    id: "sandrine-rousseau",
    nom: "Sandrine Rousseau",
    parti: "Les Écologistes",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sandrine%20Rousseau%2020210819%20%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Sandrine Rousseau et des Écologistes, avec sources et état des procédures.",
    statut: "ecarte",
    statutDetail:
      "N'est pas candidate pour 2027 : la désignation interne des Écologistes du 8 décembre 2025 a retenu Marine Tondelier, et Sandrine Rousseau n'a pas déclaré de candidature.",
    source: {
      label: "Sandrine Rousseau — Vivantes",
      url: "https://sandrinerousseau.fr/",
    },
  },
  {
    id: "dominique-de-villepin",
    nom: "Dominique de Villepin",
    parti: "La France humaniste",
    partiIcone: "i-lucide-landmark",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dominique%20de%20Villepin%20en%202026.jpg",
    resume:
      "Synthèse neutre des positions de Dominique de Villepin et de La France humaniste, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Cité parmi les candidats pressentis, sans candidature déclarée pour 2027.",
    source: {
      label: "La France humaniste — Site officiel",
      url: "https://lafrancehumaniste.fr/",
    },
  },
  {
    id: "eric-zemmour",
    nom: "Éric Zemmour",
    parti: "Reconquête",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89ric%20Zemmour.jpg",
    resume:
      "Synthèse neutre des positions d'Éric Zemmour et de Reconquête, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Cité parmi les candidats pressentis, sans candidature déclarée pour 2027.",
    source: {
      label: "Éric Zemmour — Programme 2022",
      url: "https://programme.ericzemmour.fr/",
    },
  },
  {
    id: "karim-bouamrane",
    nom: "Karim Bouamrane",
    parti: "La France Humaine et Forte",
    partiIcone: "i-lucide-handshake",
    photo: "https://www.lafrancehumaineetforte.fr/kb_bleu_hero.jpeg",
    resume:
      "Synthèse neutre des positions de Karim Bouamrane et de La France Humaine et Forte, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 9 juin 2026.",
    source: {
      label: "Karim Bouamrane — La France Humaine et Forte",
      url: "https://www.lafrancehumaineetforte.fr/",
    },
  },
  {
    id: "clara-egger",
    nom: "Clara Egger",
    parti: "Solution démocratique",
    partiIcone: "i-lucide-vote",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Clara_Egger.jpg",
    resume:
      "Synthèse neutre des positions de Clara Egger et de Solution démocratique, centrées sur le RIC, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 19 avril 2026, après une première campagne en 2022.",
    source: {
      label: "Solution démocratique — Site officiel",
      url: "https://solutiondemocratique.fr/",
    },
  },
  {
    id: "antoine-mikolajczak",
    nom: "Antoine Mikolajczak",
    parti: "Équinoxe",
    partiIcone: "i-lucide-sun-moon",
    photo:
      "https://parti-equinoxe.fr/wp-content/uploads/2026/07/Parti-equinoxe-Antoine-Miko-portrait-768x1024.jpg",
    resume:
      "Synthèse neutre des positions d'Antoine Mikolajczak et du parti Équinoxe, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Désigné par les adhérents d'Équinoxe, campagne lancée le 27 juin 2026 dans le Loiret.",
    source: {
      label: "Parti Équinoxe — Le projet",
      url: "https://parti-equinoxe.fr/le-projet/",
    },
  },
  {
    id: "raphael-glucksmann",
    nom: "Raphaël Glucksmann",
    parti: "Place publique",
    partiIcone: "i-lucide-users",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/1720448398743_20240708_GLUCKSMANN_Raphael_FR_006.jpg",
    resume:
      "Synthèse neutre des positions de Raphaël Glucksmann et de Place publique, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 23 août 2026 sur TF1 ; il concourt à la primaire fermée de l'espace social-démocrate (PS, Place publique) des 9-10 et 16-17 octobre 2026.",
    source: {
      label: "Place publique — Le projet",
      url: "https://place-publique.eu/pages/69jA2SKIG5udlNX7wI3dmc/le-projet",
    },
  },
  {
    id: "olivier-faure",
    nom: "Olivier Faure",
    parti: "Parti socialiste",
    partiIcone: "i-lucide-flower-2",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/OF_MATIGNON_-_MAXIME_CLAM_%28cropped%29.png",
    resume:
      "Synthèse neutre des positions d'Olivier Faure et du Parti socialiste, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Premier secrétaire du PS, cité parmi les candidats possibles à la primaire de l'espace social-démocrate : il s'est donné « jusqu'au mois de septembre » 2026 pour trancher, sans candidature déclarée à ce stade.",
    source: {
      label: "Parti socialiste — Projet",
      url: "https://ressources-militantes.parti-socialiste.fr/assets/pdf/PROJET_PS_V21avril-2.pdf",
    },
  },
  {
    id: "francois-ruffin",
    nom: "François Ruffin",
    parti: "Debout !",
    partiIcone: "i-lucide-factory",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Fran%C3%A7ois_Ruffin_%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de François Ruffin et de Debout !, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Inscrit le 15 novembre 2025 à la primaire de la gauche unitaire, campagne lancée le 25 avril 2026 à Lyon ; il a confirmé le 12 mai 2026 qu'il irait à la présidentielle en l'absence de primaire.",
    source: {
      label: "Ruffin 2027 — Cahiers de campagne",
      url: "https://nouspresident.fr/cahiers-de-campagne/",
    },
  },
  {
    id: "bernard-cazeneuve",
    nom: "Bernard Cazeneuve",
    parti: "La Convention",
    partiIcone: "i-lucide-scale",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Bernard_Cazeneuve%2C_%2842399145362%29_%28cropped%29.jpg",
    resume:
      "Synthèse neutre des positions de Bernard Cazeneuve et de La Convention, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 28 avril 2026 dans Le Figaro, hors de toute primaire, et confirmée le 30 juillet 2026.",
    source: {
      label: "Bernard Cazeneuve — La France, ensemble",
      url: "https://bc2027.fr/",
    },
  },
  {
    id: "anasse-kazib",
    nom: "Anasse Kazib",
    parti: "Révolution permanente",
    partiIcone: "i-lucide-flame",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Anasse_Kazib%2C_d%C3%A9cembre_2021.jpg",
    resume:
      "Synthèse neutre des positions d'Anasse Kazib et de Révolution permanente, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 1er juin 2026, soutenue par Révolution permanente ; comme en 2022, l'obtention des 500 parrainages reste l'obstacle principal.",
    source: {
      label: "Anasse Kazib 2027 — Site de campagne",
      url: "https://anasse2027.fr/",
    },
  },
  {
    id: "juan-branco",
    nom: "Juan Branco",
    parti: "Les Ruches",
    partiIcone: "i-lucide-hexagon",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/2019_-_Centre_Stage_-_Day_2_VJR21625_%2849024215596%29.jpg",
    resume:
      "Synthèse neutre des positions de Juan Branco et du mouvement Les Ruches, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Intention de candidature annoncée le 19 décembre 2025, portée par le mouvement citoyen Les Ruches ; la question des 500 parrainages reste ouverte.",
    source: {
      label: "Les Ruches — La Voie",
      url: "https://ruches.org/",
    },
  },
];

export const candidatsParId = Object.fromEntries(
  candidats.map((candidat) => [candidat.id, candidat]),
) as Record<string, Candidat>;

export const cheminCandidat = (id: string) => `/candidats/${id}`;
