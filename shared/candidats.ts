export type StatutCandidature =
  | "declare"
  | "pressenti"
  | "retire"
  | "ecarte";

// Niveau de substance programmatique constaté dans les sources publiques, à
// distinguer du statut de la candidature : une candidature peut être
// officiellement déclarée sans qu'aucune proposition ne soit publiée.
export type NiveauProgramme =
  | "detaille"
  | "thematique"
  | "sommaire"
  | "absent";

export type Candidat = {
  id: string;
  nom: string;
  parti: string;
  partiIcone: string;
  photo: string;
  resume: string;
  statut: StatutCandidature;
  statutDetail: string;
  // Obligatoire : chaque fiche est auditée selon le même critère, afin qu'une
  // absence de programme ne puisse pas passer pour un oubli de renseignement.
  programme: NiveauProgramme;
  programmeDetail?: string;
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

// Les trois niveaux signalés au lecteur. « detaille » n'est volontairement pas
// listé ici : un programme publié et structuré n'appelle pas de marqueur.
export const niveauxProgramme: Record<
  Exclude<NiveauProgramme, "detaille">,
  { label: string; icone: string }
> = {
  thematique: {
    label: "Programme mono-thématique",
    icone: "i-lucide-file-search",
  },
  sommaire: {
    label: "Programme sommaire",
    icone: "i-lucide-file-question",
  },
  absent: {
    label: "Aucun programme publié",
    icone: "i-lucide-file-x",
  },
};

export const candidats: Candidat[] = [
  {
    id: "edouard-philippe",
    nom: "Édouard Philippe",
    parti: "Horizons",
    partiIcone: "i-lucide-compass",
    photo: "/photos/edouard-philippe.jpg",
    resume:
      "Synthèse du Manifeste d'Horizons, avec principaux axes programmatiques, sources et positions publiques.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 3 septembre 2024.",
    programme: "detaille",
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
    photo: "/photos/david-lisnard.jpg",
    resume:
      "Synthèse des positions de David Lisnard et de Nouvelle Énergie, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Intention annoncée le 17 janvier 2025, candidature déclarée le 31 mars 2026.",
    programme: "detaille",
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
    photo: "/photos/gabriel-attal.jpg",
    resume:
      "Synthèse des positions de Gabriel Attal et de Renaissance, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 22 mai 2026.",
    programme: "detaille",
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
    photo: "/photos/jerome-guedj.jpg",
    resume:
      "Synthèse neutre des positions de Jérôme Guedj et du Parti socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 5 février 2026 hors primaire, puis ralliée le 23 août 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique).",
    programme: "detaille",
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
    photo: "/photos/segolene-royal.jpg",
    resume:
      "Synthèse neutre des positions de Ségolène Royal, candidate à la primaire socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 10 juillet 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique), dont le premier tour est prévu les 9 et 10 octobre 2026.",
    programme: "sommaire",
    programmeDetail:
      "Plan en cinq points annoncé oralement le 10 juillet 2026 et orientations rapportées par la presse ; aucun document programmatique publié pour cette candidature à ce jour.",
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
    photo: "/photos/jean-luc-melenchon.jpg",
    resume:
      "Synthèse des positions de Jean-Luc Mélenchon et de La France insoumise, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 3 mai 2026.",
    programme: "detaille",
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
    photo: "/photos/marine-le-pen.jpg",
    resume:
      "Synthèse des positions de Marine Le Pen et du RN, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature confirmée le 7 juillet 2026.",
    programme: "detaille",
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
    photo: "/photos/bruno-retailleau.jpg",
    resume:
      "Synthèse neutre des positions de Bruno Retailleau et des Républicains, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Désigné candidat des Républicains le 19 avril 2026.",
    programme: "detaille",
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
    photo: "/photos/laurent-wauquiez.jpg",
    resume:
      "Synthèse neutre des positions de Laurent Wauquiez et de la droite républicaine, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Ambitions présidentielles assumées en 2025, mais pas de candidature déclarée : il a reconnu Bruno Retailleau comme « candidat légitime » en juin 2026, puis appelé à un soutien à Édouard Philippe le 1er juillet 2026.",
    programme: "sommaire",
    programmeDetail:
      "Positions documentées à partir de son parcours et des orientations des Républicains ; candidature non déclarée et aucun programme présidentiel publié.",
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
    photo: "/photos/xavier-bertrand.jpg",
    resume:
      "Synthèse neutre des positions de Xavier Bertrand et de Nous France, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature annoncée le 3 février 2024.",
    programme: "detaille",
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
    photo: "/photos/nicolas-dupont-aignan.jpg",
    resume:
      "Synthèse neutre des positions de Nicolas Dupont-Aignan et de Debout la France, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 8 mars 2025.",
    programme: "detaille",
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
    photo: "/photos/florian-philippot.jpg",
    resume:
      "Synthèse neutre des positions de Florian Philippot et des Patriotes, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 9 mai 2026.",
    programme: "detaille",
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
    photo: "/photos/francois-asselineau.jpg",
    resume:
      "Synthèse neutre des positions de François Asselineau et de l'Union populaire républicaine, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Intention de candidature annoncée le 31 août 2023.",
    programme: "detaille",
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
    photo: "/photos/nathalie-arthaud.jpg",
    resume:
      "Synthèse neutre des positions de Nathalie Arthaud et de Lutte ouvrière, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 8 décembre 2025.",
    programme: "detaille",
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
    photo: "/photos/delphine-batho.jpg",
    resume:
      "Synthèse neutre des positions de Delphine Batho et de Génération Écologie, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 25 novembre 2025.",
    programme: "detaille",
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
    photo: "/photos/clementine-autain.jpg",
    resume:
      "Synthèse neutre des positions de Clémentine Autain et de L'APRÈS, avec sources et état des procédures.",
    statut: "retire",
    statutDetail:
      "Candidature annoncée en mars 2025, retirée le 11 juillet 2026 après l'enlisement de la primaire de la gauche unitaire, consécutif au retrait du PS.",
    programme: "detaille",
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
    photo: "/photos/fabien-roussel.jpg",
    resume:
      "Synthèse neutre des positions de Fabien Roussel et du Parti communiste français, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Désigné candidat du PCF le 6 septembre 2026, après une consultation des adhérents du 3 au 6 septembre qui l'a approuvé à 72 % (24 112 votants, 64,09 % de participation) ; annonce le soir même au 20 h de TF1. Le PCF avait refusé de participer à la primaire de la gauche unitaire.",
    programme: "detaille",
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
    photo: "/photos/marine-tondelier.jpg",
    resume:
      "Synthèse neutre des positions de Marine Tondelier et des Écologistes, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 22 octobre 2025, puis désignée candidate des Écologistes le 8 décembre 2025 avec 86 % des voix. Elle devait porter ces couleurs à la primaire de la gauche unitaire du 11 octobre 2026, aujourd'hui de facto abandonnée.",
    programme: "detaille",
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
    photo: "/photos/yannick-jadot.jpg",
    resume:
      "Synthèse neutre des positions de Yannick Jadot et des Écologistes, avec sources et état des procédures.",
    statut: "ecarte",
    statutDetail:
      "N'est pas candidat pour 2027 : Les Écologistes ont désigné Marine Tondelier le 8 décembre 2025, et il soutient la candidature de Raphaël Glucksmann à la primaire de l'espace social-démocrate.",
    programme: "detaille",
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
    photo: "/photos/sandrine-rousseau.jpg",
    resume:
      "Synthèse neutre des positions de Sandrine Rousseau et des Écologistes, avec sources et état des procédures.",
    statut: "ecarte",
    statutDetail:
      "N'est pas candidate pour 2027 : la désignation interne des Écologistes du 8 décembre 2025 a retenu Marine Tondelier, et Sandrine Rousseau n'a pas déclaré de candidature.",
    programme: "detaille",
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
    photo: "/photos/dominique-de-villepin.jpg",
    resume:
      "Synthèse neutre des positions de Dominique de Villepin et de La France humaniste, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Cité parmi les candidats pressentis, sans candidature déclarée pour 2027.",
    programme: "detaille",
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
    photo: "/photos/eric-zemmour.jpg",
    resume:
      "Synthèse neutre des positions d'Éric Zemmour et de Reconquête, avec sources et état des procédures.",
    statut: "pressenti",
    statutDetail:
      "Cité parmi les candidats pressentis, sans candidature déclarée pour 2027.",
    programme: "detaille",
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
    photo: "/photos/karim-bouamrane.jpg",
    resume:
      "Synthèse neutre des positions de Karim Bouamrane et de La France Humaine et Forte, avec sources et état des procédures.",
    statut: "declare",
    statutDetail: "Candidature déclarée le 9 juin 2026.",
    programme: "detaille",
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
    photo: "/photos/clara-egger.jpg",
    resume:
      "Synthèse neutre des positions de Clara Egger et de Solution démocratique, centrées sur le RIC, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 19 avril 2026, après une première campagne en 2022.",
    programme: "thematique",
    programmeDetail:
      "Mesure unique revendiquée — l'instauration du référendum d'initiative citoyenne — avec un calendrier de mise en œuvre publié, mais aucun programme économique, social ou écologique, ce que le mouvement assume.",
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
    photo: "/photos/antoine-mikolajczak.jpg",
    resume:
      "Synthèse neutre des positions d'Antoine Mikolajczak et du parti Équinoxe, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Désigné par les adhérents d'Équinoxe, campagne lancée le 27 juin 2026 dans le Loiret.",
    programme: "detaille",
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
    photo: "/photos/raphael-glucksmann.jpg",
    resume:
      "Synthèse neutre des positions de Raphaël Glucksmann et de Place publique, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 23 août 2026 sur TF1 ; il concourt à la primaire fermée de l'espace social-démocrate (PS, Place publique) des 9-10 et 16-17 octobre 2026.",
    programme: "detaille",
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
    photo: "/photos/olivier-faure.jpg",
    resume:
      "Synthèse neutre des positions d'Olivier Faure et du Parti socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 30 août 2026 au 20 h de TF1, au lendemain de l'université d'été du PS à Blois ; il concourt à la primaire fermée de l'espace social-démocrate (PS, Place publique) des 9-10 et 16-17 octobre 2026.",
    programme: "detaille",
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
    photo: "/photos/francois-ruffin.jpg",
    resume:
      "Synthèse neutre des positions de François Ruffin et de Debout !, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Inscrit le 15 novembre 2025 à la primaire de la gauche unitaire, campagne lancée le 25 avril 2026 à Lyon ; il a confirmé le 12 mai 2026 qu'il irait à la présidentielle en l'absence de primaire.",
    programme: "detaille",
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
    photo: "/photos/bernard-cazeneuve.jpg",
    resume:
      "Synthèse neutre des positions de Bernard Cazeneuve et de La Convention, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 28 avril 2026 dans Le Figaro, hors de toute primaire, et confirmée le 30 juillet 2026.",
    programme: "detaille",
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
    photo: "/photos/anasse-kazib.jpg",
    resume:
      "Synthèse neutre des positions d'Anasse Kazib et de Révolution permanente, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 1er juin 2026, soutenue par Révolution permanente ; comme en 2022, l'obtention des 500 parrainages reste l'obstacle principal.",
    programme: "detaille",
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
    photo: "/photos/juan-branco.jpg",
    resume:
      "Synthèse neutre des positions de Juan Branco et du mouvement Les Ruches, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Intention de candidature annoncée le 19 décembre 2025, portée par le mouvement citoyen Les Ruches ; la question des 500 parrainages reste ouverte.",
    programme: "detaille",
    source: {
      label: "Les Ruches — La Voie",
      url: "https://ruches.org/",
    },
  },
  {
    id: "philippe-brun",
    nom: "Philippe Brun",
    parti: "Parti socialiste",
    partiIcone: "i-lucide-flower-2",
    photo: "/photos/philippe-brun.jpg",
    resume:
      "Synthèse neutre des positions de Philippe Brun, candidat à la primaire socialiste sur la ligne des salaires, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 30 juin 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique), dont le premier tour est prévu les 9 et 10 octobre 2026.",
    programme: "detaille",
    source: {
      label: "Wikipédia — Primaire présidentielle socialiste de 2026",
      url: "https://fr.wikipedia.org/wiki/Primaire_pr%C3%A9sidentielle_socialiste_fran%C3%A7aise_de_2026",
    },
  },
  {
    id: "emmanuel-maurel",
    nom: "Emmanuel Maurel",
    parti: "Gauche républicaine et socialiste",
    partiIcone: "i-lucide-flag-triangle-left",
    photo: "/photos/emmanuel-maurel.jpg",
    resume:
      "Synthèse neutre des positions d'Emmanuel Maurel et de la Gauche républicaine et socialiste, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 4 septembre 2026 à la primaire fermée de l'espace social-démocrate (PS, Place publique, GRS) ; septième candidat déclaré à cette primaire.",
    programme: "sommaire",
    programmeDetail:
      "Ligne annoncée en trois mots — démondialiser, démarchandiser, démocratiser — sans document programmatique publié à ce jour.",
    source: {
      label: "franceinfo — Annonce de candidature",
      url: "https://www.franceinfo.fr/politique/ps/primaire-socialiste/le-depute-emmanuel-maurel-annonce-sa-candidature-a-la-primaire-socialiste-pour-l-election-presidentielle_8176532.html",
    },
  },
  {
    id: "fabien-verdier",
    nom: "Fabien Verdier",
    parti: "Divers gauche",
    partiIcone: "i-lucide-map-pin",
    // Aucune photographie libre de droits identifiée : repli sur les initiales.
    photo: "",
    resume:
      "Synthèse neutre des positions de Fabien Verdier, candidat à la primaire socialiste sur la justice territoriale, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 2 septembre 2026 dans un entretien à Libération, à la primaire fermée de l'espace social-démocrate (PS, Place publique).",
    programme: "thematique",
    programmeDetail:
      "Un axe unique revendiqué — la justice territoriale et les villes sous-préfectures — sans programme thématique complet publié à ce jour.",
    source: {
      label: "Fabien Verdier — Site de campagne",
      url: "https://fabienverdier.fr/",
    },
  },
  {
    id: "lydie-massard",
    nom: "Lydie Massard",
    parti: "Union démocratique bretonne",
    partiIcone: "i-lucide-anchor",
    photo: "/photos/lydie-massard.jpg",
    resume:
      "Synthèse neutre des positions de Lydie Massard et de l'Union démocratique bretonne, centrées sur le fédéralisme, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 2 avril 2026 à la primaire de la gauche unitaire du 11 octobre 2026, aujourd'hui de facto abandonnée.",
    programme: "thematique",
    programmeDetail:
      "Candidature centrée sur une revendication institutionnelle — la République fédérale — sans programme thématique complet publié à ce jour.",
    source: {
      label: "UDB — Candidate aux primaires de la gauche",
      url: "https://www.udb.bzh/non-classifiee/lydie-massard-candidate-aux-primaires-de-la-gauche/",
    },
  },
  {
    id: "selma-labib",
    nom: "Selma Labib",
    parti: "NPA-Révolutionnaires",
    partiIcone: "i-lucide-flame",
    // Aucune photographie libre de droits identifiée : repli sur les initiales.
    photo: "",
    resume:
      "Synthèse neutre des positions de Selma Labib et du NPA-Révolutionnaires, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Désignée candidate par le comité politique national du NPA-Révolutionnaires les 6 et 7 juin 2026, candidature annoncée publiquement le 17 juin 2026.",
    programme: "sommaire",
    programmeDetail:
      "Revendications d'urgence énoncées dans le communiqué de candidature (salaires, retraites, services publics), sans programme de gouvernement — la campagne étant revendiquée comme un « porte-voix » des luttes.",
    source: {
      label: "NPA-Révolutionnaires — Communiqué de candidature",
      url: "https://npa-revolutionnaires.org/communique-presidentielle-2027-selma-labib-une-candidature-ouvriere-et-revolutionnaire-soutenue-par-gael-quirante/",
    },
  },
  {
    id: "francis-lalanne",
    nom: "Francis Lalanne",
    parti: "France Libre",
    partiIcone: "i-lucide-music",
    photo: "/photos/francis-lalanne.jpg",
    resume:
      "Synthèse neutre de la candidature de Francis Lalanne et du mouvement France Libre, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée par communiqué le 19 août 2026, avec un premier meeting à Paris le 21 août 2026 ; la question des 500 parrainages reste ouverte.",
    programme: "sommaire",
    programmeDetail:
      "Trois axes annoncés par communiqué (souveraineté nationale, réforme de la justice, démocratie directe) ; aucun document programmatique consultable n'a pu être vérifié.",
    source: {
      label: "franceinfo — Annonce de candidature",
      url: "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-le-chanteur-francis-lalanne-officiellement-candidat-premier-meeting-vendredi-a-paris_8153588.html",
    },
  },
  {
    id: "benoit-mathieu",
    nom: "Benoît Mathieu",
    parti: "Sans étiquette",
    partiIcone: "i-lucide-bike",
    // Aucune photographie libre de droits identifiée : repli sur les initiales.
    photo: "",
    resume:
      "Synthèse neutre de la candidature citoyenne de Benoît Mathieu, centrée sur la démocratie directe, avec sources et état des procédures.",
    statut: "declare",
    statutDetail:
      "Candidature déclarée le 30 mars 2026, sans parti ; il parcourt la France à vélo pour réunir les 500 parrainages, avec 30 signatures obtenues sur 150 maires rencontrés début août 2026.",
    programme: "thematique",
    programmeDetail:
      "Trois propositions institutionnelles (RIC, conventions citoyennes tirées au sort, assemblée constituante), sans programme thématique publié à ce jour.",
    source: {
      label: "France 3 Nouvelle-Aquitaine — Portrait du candidat",
      url: "https://france3-regions.franceinfo.fr/nouvelle-aquitaine/correze/brive/le-defi-le-plus-fou-de-toute-ma-vie-cet-ingenieur-sillonne-la-france-a-velo-pour-devenir-president-de-la-republique-3396664.html",
    },
  },
  {
    id: "sylvain-durif",
    nom: "Sylvain Durif",
    parti: "Sans étiquette",
    partiIcone: "i-lucide-sparkles",
    photo: "/photos/sylvain-durif.jpg",
    resume:
      "Fiche de constat sur la candidature de Sylvain Durif, dit « le Grand Monarque » : annonce, antécédents et absence de contenu programmatique vérifiable.",
    statut: "declare",
    statutDetail:
      "Candidature annoncée le 23 août 2026 par vidéo sur les réseaux sociaux, sans parti ni mouvement ; déjà candidat déclaré en 2017, sans avoir réuni les 500 parrainages.",
    programme: "absent",
    programmeDetail:
      "Aucune proposition identifiée dans les sources consultées : l'annonce est composée de titres mystiques, sans mesure, chiffrage ni calendrier. Le site qui circule sous son nom est un site satirique, non attribuable au candidat.",
    source: {
      label: "Le Tribunal du Net — Annonce de candidature",
      url: "https://www.letribunaldunet.fr/politique/sylvain-durif-grand-monarque-candidat-presidentielle-2027.html",
    },
  },
];

export const candidatsParId = Object.fromEntries(
  candidats.map((candidat) => [candidat.id, candidat]),
) as Record<string, Candidat>;

export const cheminCandidat = (id: string) => `/candidats/${id}`;
