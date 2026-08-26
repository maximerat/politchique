<script setup lang="ts">
import { candidats, statutsCandidature } from "#shared/candidats";

type Theme =
  | "economie"
  | "immigration"
  | "ecologie"
  | "institutions"
  | "europe"
  | "securite"
  | "social";

type Question = {
  id: string;
  theme: Theme;
  text: string;
  positions: Record<string, number>;
  sources: Record<string, { label: string; url: string }>;
};

const themes: Array<{ id: Theme; label: string }> = [
  { id: "economie", label: "Économie / fiscalité" },
  { id: "immigration", label: "Immigration / asile" },
  { id: "ecologie", label: "Écologie / énergie" },
  { id: "institutions", label: "Institutions" },
  { id: "europe", label: "Europe" },
  { id: "securite", label: "Sécurité / justice" },
  { id: "social", label: "Social / travail" },
];

const candidateIds = candidats.map((candidat) => candidat.id);
const candidateIdSet = new Set(candidateIds);

const candidateSources: Record<string, { label: string; url: string }> =
  Object.fromEntries(
    candidats.map((candidat) => [candidat.id, candidat.source]),
  );

function buildPositions(
  values: Record<string, number>,
): Record<string, number> {
  if (import.meta.dev) {
    for (const id of Object.keys(values)) {
      if (!candidateIdSet.has(id)) {
        console.warn(`[quiz] identifiant de candidat inconnu : ${id}`);
      }
    }
  }

  return Object.fromEntries(candidateIds.map((id) => [id, values[id] ?? 0]));
}

const questions: Question[] = [
  {
    id: "q1",
    theme: "economie",
    text: "Réduire la dette et la dépense publique doit primer sur de nouvelles dépenses sociales.",
    positions: buildPositions({
      "bruno-retailleau": 2,
      "edouard-philippe": 2,
      "gabriel-attal": 1,
      "david-lisnard": 1,
      "marine-le-pen": 1,
      "xavier-bertrand": 1,
      "nicolas-dupont-aignan": 1,
      "jerome-guedj": -1,
      "delphine-batho": -1,
      "jean-luc-melenchon": -2,
      "nathalie-arthaud": -2,
      "fabien-roussel": -2,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 1,
      "karim-bouamrane": 1,
      "marine-tondelier": -2,
      "segolene-royal": -1,
      "laurent-wauquiez": 2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 0,
      "olivier-faure": -1,
      "francois-ruffin": -2,
      "bernard-cazeneuve": 1,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q2",
    theme: "social",
    text: "Les salaires les plus bas (SMIC et minima) doivent être fortement revalorisés.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "francois-asselineau": 2,
      "nicolas-dupont-aignan": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 1,
      "karim-bouamrane": 2,
      "jerome-guedj": 1,
      "bruno-retailleau": 1,
      "marine-le-pen": 1,
      "xavier-bertrand": 1,
      "marine-tondelier": 2,
      "segolene-royal": 1,
      "laurent-wauquiez": -1,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 1,
      "olivier-faure": 2,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": 2,
      "juan-branco": 1,
    }),
    sources: {},
  },
  {
    id: "q3",
    theme: "social",
    text: "La réforme des retraites à 64 ans doit être abrogée ou fortement assouplie.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "jerome-guedj": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 0,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
      "delphine-batho": 1,
      "florian-philippot": 1,
      "francois-asselineau": 1,
      "gabriel-attal": -2,
      "edouard-philippe": -1,
      "bruno-retailleau": -2,
      "david-lisnard": -1,
      "marine-tondelier": 2,
      "segolene-royal": 1,
      "laurent-wauquiez": -2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 1,
      "olivier-faure": 2,
      "francois-ruffin": 2,
      "bernard-cazeneuve": -1,
      "anasse-kazib": 2,
      "juan-branco": 1,
    }),
    sources: {},
  },
  {
    id: "q4",
    theme: "immigration",
    text: "L'immigration doit être nettement plus restrictive (contrôles, conditions d'accès, regroupement familial).",
    positions: buildPositions({
      "marine-le-pen": 2,
      "bruno-retailleau": 2,
      "xavier-bertrand": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "david-lisnard": 1,
      "jean-luc-melenchon": -2,
      "fabien-roussel": -2,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 2,
      "karim-bouamrane": 1,
      "nathalie-arthaud": -1,
      "jerome-guedj": -1,
      "delphine-batho": -1,
      "marine-tondelier": -2,
      "segolene-royal": -1,
      "laurent-wauquiez": 2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": -1,
      "olivier-faure": -1,
      "francois-ruffin": 0,
      "bernard-cazeneuve": 0,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q5",
    theme: "securite",
    text: "Renforcer la sécurité, la justice et l'exécution des peines doit être une priorité absolue.",
    positions: buildPositions({
      "marine-le-pen": 2,
      "bruno-retailleau": 2,
      "xavier-bertrand": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "david-lisnard": 2,
      "edouard-philippe": 2,
      "gabriel-attal": 1,
      "francois-asselineau": 1,
      "jean-luc-melenchon": -1,
      "delphine-batho": -1,
      "nathalie-arthaud": -2,
      "fabien-roussel": -1,
      "yannick-jadot": -1,
      "sandrine-rousseau": -1,
      "dominique-de-villepin": 2,
      "eric-zemmour": 2,
      "karim-bouamrane": 2,
      "marine-tondelier": -1,
      "segolene-royal": 1,
      "laurent-wauquiez": 2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 0,
      "olivier-faure": 0,
      "francois-ruffin": 0,
      "bernard-cazeneuve": 2,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q6",
    theme: "ecologie",
    text: "La priorité écologique doit être la sobriété et la décroissance plutôt que la croissance du PIB.",
    positions: buildPositions({
      "delphine-batho": 2,
      "jean-luc-melenchon": 1,
      "nathalie-arthaud": 1,
      "jerome-guedj": 1,
      "fabien-roussel": -1,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": -1,
      "eric-zemmour": -2,
      "karim-bouamrane": -1,
      "marine-tondelier": 2,
      "segolene-royal": 0,
      "laurent-wauquiez": -2,
      "clara-egger": 0,
      "antoine-mikolajczak": 1,
      "raphael-glucksmann": -1,
      "olivier-faure": 0,
      "francois-ruffin": 1,
      "bernard-cazeneuve": -1,
      "anasse-kazib": 0,
      "juan-branco": 0,
    }),
    sources: {},
  },
  {
    id: "q7",
    theme: "ecologie",
    text: "Le nucléaire doit rester au cœur de la stratégie énergétique française.",
    positions: buildPositions({
      "bruno-retailleau": 2,
      "marine-le-pen": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "fabien-roussel": 2,
      "edouard-philippe": 1,
      "gabriel-attal": 1,
      "david-lisnard": 1,
      "xavier-bertrand": 1,
      "delphine-batho": -1,
      "yannick-jadot": -2,
      "sandrine-rousseau": -2,
      "dominique-de-villepin": 1,
      "eric-zemmour": 2,
      "karim-bouamrane": 0,
      "jean-luc-melenchon": 0,
      "marine-tondelier": -2,
      "segolene-royal": 0,
      "laurent-wauquiez": 2,
      "clara-egger": 0,
      "antoine-mikolajczak": 2,
      "raphael-glucksmann": 0,
      "olivier-faure": 0,
      "francois-ruffin": 0,
      "bernard-cazeneuve": 2,
      "anasse-kazib": -1,
      "juan-branco": 0,
    }),
    sources: {},
  },
  {
    id: "q8",
    theme: "europe",
    text: "La France devrait sortir de l'Union européenne et/ou de l'euro (Frexit).",
    positions: buildPositions({
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "nicolas-dupont-aignan": 2,
      "marine-le-pen": 1,
      "jean-luc-melenchon": 1,
      "gabriel-attal": -2,
      "edouard-philippe": -2,
      "jerome-guedj": -2,
      "bruno-retailleau": -2,
      "xavier-bertrand": -1,
      "david-lisnard": -1,
      "delphine-batho": 0,
      "fabien-roussel": -1,
      "yannick-jadot": -1,
      "sandrine-rousseau": -1,
      "dominique-de-villepin": -2,
      "eric-zemmour": 0,
      "karim-bouamrane": -2,
      "marine-tondelier": -2,
      "segolene-royal": -2,
      "laurent-wauquiez": 0,
      "clara-egger": 0,
      "antoine-mikolajczak": -1,
      "raphael-glucksmann": -2,
      "olivier-faure": -2,
      "francois-ruffin": -1,
      "bernard-cazeneuve": -2,
      "anasse-kazib": 0,
      "juan-branco": 0,
    }),
    sources: {},
  },
  {
    id: "q9",
    theme: "europe",
    text: "L'intégration européenne doit être approfondie pour répondre aux crises (climat, sécurité, économie).",
    positions: buildPositions({
      "gabriel-attal": 2,
      "edouard-philippe": 2,
      "jerome-guedj": 2,
      "david-lisnard": 1,
      "delphine-batho": 1,
      "florian-philippot": -2,
      "francois-asselineau": -2,
      "nicolas-dupont-aignan": -2,
      "marine-le-pen": -2,
      "jean-luc-melenchon": -1,
      "bruno-retailleau": -1,
      "nathalie-arthaud": -1,
      "fabien-roussel": -1,
      "yannick-jadot": 1,
      "sandrine-rousseau": 1,
      "dominique-de-villepin": 1,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
      "marine-tondelier": 2,
      "segolene-royal": 1,
      "laurent-wauquiez": -2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 2,
      "olivier-faure": 1,
      "francois-ruffin": -1,
      "bernard-cazeneuve": 1,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q10",
    theme: "institutions",
    text: "Le référendum d'initiative citoyenne (RIC) doit être inscrit dans la Constitution.",
    positions: buildPositions({
      "jean-luc-melenchon": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": -1,
      "eric-zemmour": -2,
      "karim-bouamrane": 0,
      "marine-le-pen": 1,
      "delphine-batho": 1,
      "jerome-guedj": 1,
      "gabriel-attal": -1,
      "marine-tondelier": 1,
      "segolene-royal": 1,
      "laurent-wauquiez": 0,
      "clara-egger": 2,
      "antoine-mikolajczak": 1,
      "raphael-glucksmann": -1,
      "olivier-faure": 0,
      "francois-ruffin": 1,
      "bernard-cazeneuve": -2,
      "anasse-kazib": 0,
      "juan-branco": 2,
    }),
    sources: {},
  },
  {
    id: "q11",
    theme: "institutions",
    text: "Le régime présidentiel actuel (Ve République) doit être profondément remanié ou remplacé.",
    positions: buildPositions({
      "jean-luc-melenchon": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 1,
      "eric-zemmour": -1,
      "karim-bouamrane": 0,
      "delphine-batho": 1,
      "jerome-guedj": 1,
      "nathalie-arthaud": 1,
      "nicolas-dupont-aignan": 1,
      "florian-philippot": 1,
      "francois-asselineau": 1,
      "gabriel-attal": -2,
      "bruno-retailleau": -1,
      "marine-tondelier": 2,
      "segolene-royal": 1,
      "laurent-wauquiez": 0,
      "clara-egger": 2,
      "antoine-mikolajczak": 1,
      "raphael-glucksmann": 0,
      "olivier-faure": 1,
      "francois-ruffin": 2,
      "bernard-cazeneuve": -1,
      "anasse-kazib": 2,
      "juan-branco": 2,
    }),
    sources: {},
  },
  {
    id: "q12",
    theme: "economie",
    text: "Les très grandes fortunes et les revenus du capital doivent être davantage taxés pour financer les services publics.",
    positions: buildPositions({
      "nathalie-arthaud": 2,
      "jean-luc-melenchon": 2,
      "jerome-guedj": 2,
      "delphine-batho": 2,
      "fabien-roussel": 2,
      "yannick-jadot": 2,
      "sandrine-rousseau": 2,
      "dominique-de-villepin": 0,
      "eric-zemmour": -2,
      "karim-bouamrane": 1,
      "francois-asselineau": 1,
      "edouard-philippe": -1,
      "bruno-retailleau": -1,
      "xavier-bertrand": -1,
      "gabriel-attal": 0,
      "marine-le-pen": 0,
      "marine-tondelier": 2,
      "segolene-royal": 1,
      "laurent-wauquiez": -2,
      "clara-egger": 0,
      "antoine-mikolajczak": 0,
      "raphael-glucksmann": 2,
      "olivier-faure": 2,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": 2,
      "juan-branco": 1,
    }),
    sources: {},
  },
  {
    id: "q13",
    theme: "immigration",
    text: "Le droit du sol doit être restreint ou supprimé.",
    positions: buildPositions({
      "marine-le-pen": 2,
      "eric-zemmour": 2,
      "bruno-retailleau": 2,
      "laurent-wauquiez": 2,
      "nicolas-dupont-aignan": 2,
      "xavier-bertrand": 1,
      "david-lisnard": 1,
      "edouard-philippe": 1,
      "florian-philippot": 1,
      "gabriel-attal": 0,
      "francois-asselineau": 0,
      "dominique-de-villepin": -1,
      "segolene-royal": -1,
      "karim-bouamrane": -1,
      "jerome-guedj": -2,
      "jean-luc-melenchon": -2,
      "marine-tondelier": -2,
      "sandrine-rousseau": -2,
      "yannick-jadot": -2,
      "delphine-batho": -2,
      "fabien-roussel": -2,
      "nathalie-arthaud": -2,
      "clementine-autain": -2,
      "raphael-glucksmann": -2,
      "olivier-faure": -2,
      "francois-ruffin": -1,
      "bernard-cazeneuve": -1,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q14",
    theme: "securite",
    text: "Il faut instaurer des peines planchers et construire massivement des places de prison.",
    positions: buildPositions({
      "bruno-retailleau": 2,
      "laurent-wauquiez": 2,
      "marine-le-pen": 2,
      "eric-zemmour": 2,
      "xavier-bertrand": 2,
      "nicolas-dupont-aignan": 2,
      "david-lisnard": 2,
      "edouard-philippe": 1,
      "gabriel-attal": 1,
      "florian-philippot": 1,
      "francois-asselineau": 1,
      "dominique-de-villepin": 1,
      "karim-bouamrane": 1,
      "segolene-royal": 1,
      "fabien-roussel": 0,
      "jerome-guedj": -1,
      "yannick-jadot": -1,
      "delphine-batho": -1,
      "jean-luc-melenchon": -2,
      "marine-tondelier": -2,
      "sandrine-rousseau": -2,
      "nathalie-arthaud": -2,
      "clementine-autain": -2,
      "raphael-glucksmann": -1,
      "olivier-faure": -1,
      "francois-ruffin": -1,
      "bernard-cazeneuve": 0,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q15",
    theme: "ecologie",
    text: "L'agriculture doit être réorientée vers l'agroécologie et la réduction des pesticides, quitte à faire baisser certains rendements.",
    positions: buildPositions({
      "marine-tondelier": 2,
      "sandrine-rousseau": 2,
      "yannick-jadot": 2,
      "delphine-batho": 2,
      "jean-luc-melenchon": 2,
      "clementine-autain": 2,
      "fabien-roussel": 1,
      "antoine-mikolajczak": 1,
      "jerome-guedj": 1,
      "segolene-royal": 1,
      "karim-bouamrane": 0,
      "nathalie-arthaud": 0,
      "francois-asselineau": 0,
      "dominique-de-villepin": 0,
      "gabriel-attal": -1,
      "edouard-philippe": -1,
      "xavier-bertrand": -1,
      "nicolas-dupont-aignan": -1,
      "florian-philippot": -1,
      "david-lisnard": -2,
      "bruno-retailleau": -2,
      "laurent-wauquiez": -2,
      "marine-le-pen": -2,
      "eric-zemmour": -2,
      "raphael-glucksmann": 1,
      "olivier-faure": 1,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": 1,
      "juan-branco": 1,
    }),
    sources: {},
  },
  {
    id: "q16",
    theme: "economie",
    text: "Des secteurs stratégiques (énergie, rail, autoroutes) doivent être renationalisés.",
    positions: buildPositions({
      "jean-luc-melenchon": 2,
      "fabien-roussel": 2,
      "nathalie-arthaud": 2,
      "clementine-autain": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "marine-tondelier": 1,
      "sandrine-rousseau": 1,
      "yannick-jadot": 1,
      "delphine-batho": 1,
      "jerome-guedj": 1,
      "segolene-royal": 1,
      "karim-bouamrane": 1,
      "marine-le-pen": 1,
      "eric-zemmour": 0,
      "dominique-de-villepin": 0,
      "antoine-mikolajczak": 0,
      "bruno-retailleau": -1,
      "laurent-wauquiez": -1,
      "xavier-bertrand": -1,
      "gabriel-attal": -2,
      "edouard-philippe": -2,
      "david-lisnard": -2,
      "raphael-glucksmann": 0,
      "olivier-faure": 1,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": 2,
      "juan-branco": 1,
    }),
    sources: {},
  },
  {
    id: "q17",
    theme: "social",
    text: "Le versement des prestations sociales doit être conditionné à une activité ou à une contrepartie.",
    positions: buildPositions({
      "laurent-wauquiez": 2,
      "bruno-retailleau": 2,
      "eric-zemmour": 2,
      "david-lisnard": 2,
      "gabriel-attal": 2,
      "marine-le-pen": 1,
      "xavier-bertrand": 1,
      "edouard-philippe": 1,
      "nicolas-dupont-aignan": 1,
      "karim-bouamrane": 0,
      "dominique-de-villepin": 0,
      "segolene-royal": 0,
      "florian-philippot": 0,
      "francois-asselineau": 0,
      "jerome-guedj": -1,
      "yannick-jadot": -1,
      "delphine-batho": -1,
      "marine-tondelier": -2,
      "sandrine-rousseau": -2,
      "jean-luc-melenchon": -2,
      "fabien-roussel": -2,
      "nathalie-arthaud": -2,
      "clementine-autain": -2,
      "raphael-glucksmann": -1,
      "olivier-faure": -1,
      "francois-ruffin": -2,
      "bernard-cazeneuve": 1,
      "anasse-kazib": -2,
      "juan-branco": -1,
    }),
    sources: {},
  },
  {
    id: "q18",
    theme: "institutions",
    text: "Il faut introduire une part de proportionnelle aux élections législatives.",
    positions: buildPositions({
      "marine-le-pen": 2,
      "florian-philippot": 2,
      "nicolas-dupont-aignan": 2,
      "francois-asselineau": 2,
      "marine-tondelier": 2,
      "sandrine-rousseau": 2,
      "yannick-jadot": 2,
      "delphine-batho": 2,
      "fabien-roussel": 2,
      "clementine-autain": 2,
      "jean-luc-melenchon": 1,
      "jerome-guedj": 1,
      "segolene-royal": 1,
      "karim-bouamrane": 1,
      "eric-zemmour": 1,
      "dominique-de-villepin": 1,
      "nathalie-arthaud": 1,
      "clara-egger": 1,
      "antoine-mikolajczak": 1,
      "gabriel-attal": 0,
      "edouard-philippe": 0,
      "david-lisnard": 0,
      "bruno-retailleau": -1,
      "laurent-wauquiez": -1,
      "xavier-bertrand": -1,
      "raphael-glucksmann": 1,
      "olivier-faure": 2,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": 1,
      "juan-branco": 2,
    }),
    sources: {},
  },
  {
    id: "q19",
    theme: "europe",
    text: "La France doit maintenir ou renforcer son soutien militaire et financier à l'Ukraine.",
    positions: buildPositions({
      "gabriel-attal": 2,
      "edouard-philippe": 2,
      "jerome-guedj": 2,
      "marine-tondelier": 2,
      "yannick-jadot": 2,
      "bruno-retailleau": 1,
      "laurent-wauquiez": 1,
      "xavier-bertrand": 1,
      "david-lisnard": 1,
      "sandrine-rousseau": 1,
      "delphine-batho": 1,
      "karim-bouamrane": 1,
      "segolene-royal": 0,
      "clementine-autain": 0,
      "jean-luc-melenchon": -1,
      "fabien-roussel": -1,
      "nathalie-arthaud": -1,
      "dominique-de-villepin": -1,
      "marine-le-pen": -1,
      "eric-zemmour": -1,
      "nicolas-dupont-aignan": -2,
      "florian-philippot": -2,
      "francois-asselineau": -2,
      "raphael-glucksmann": 2,
      "olivier-faure": 2,
      "francois-ruffin": 0,
      "bernard-cazeneuve": 2,
      "anasse-kazib": -2,
      "juan-branco": 0,
    }),
    sources: {},
  },
  {
    id: "q20",
    theme: "economie",
    text: "Il faut protéger la production française par des barrières douanières et une préférence nationale ou européenne dans les marchés publics.",
    positions: buildPositions({
      "marine-le-pen": 2,
      "nicolas-dupont-aignan": 2,
      "florian-philippot": 2,
      "francois-asselineau": 2,
      "eric-zemmour": 2,
      "jean-luc-melenchon": 2,
      "fabien-roussel": 2,
      "antoine-mikolajczak": 2,
      "marine-tondelier": 1,
      "sandrine-rousseau": 1,
      "delphine-batho": 1,
      "clementine-autain": 1,
      "jerome-guedj": 1,
      "segolene-royal": 1,
      "karim-bouamrane": 1,
      "bruno-retailleau": 1,
      "laurent-wauquiez": 1,
      "xavier-bertrand": 1,
      "dominique-de-villepin": 1,
      "yannick-jadot": 0,
      "david-lisnard": 0,
      "edouard-philippe": 0,
      "gabriel-attal": 0,
      "nathalie-arthaud": 0,
      "raphael-glucksmann": 1,
      "olivier-faure": 1,
      "francois-ruffin": 2,
      "bernard-cazeneuve": 0,
      "anasse-kazib": -1,
      "juan-branco": 0,
    }),
    sources: {},
  },
  {
    id: "q21",
    theme: "institutions",
    text: "Le président doit se limiter à un rôle d'arbitre et laisser les grands choix aux citoyens par référendum.",
    positions: buildPositions({
      "clara-egger": 2,
      "francois-asselineau": 1,
      "nicolas-dupont-aignan": 1,
      "florian-philippot": 1,
      "jean-luc-melenchon": 1,
      "antoine-mikolajczak": 1,
      "marine-tondelier": 1,
      "fabien-roussel": 1,
      "sandrine-rousseau": 1,
      "yannick-jadot": 1,
      "delphine-batho": 1,
      "clementine-autain": 1,
      "nathalie-arthaud": 0,
      "marine-le-pen": 0,
      "jerome-guedj": 0,
      "karim-bouamrane": 0,
      "edouard-philippe": -1,
      "david-lisnard": -1,
      "xavier-bertrand": -1,
      "bruno-retailleau": -1,
      "laurent-wauquiez": -1,
      "dominique-de-villepin": -1,
      "segolene-royal": -1,
      "gabriel-attal": -2,
      "eric-zemmour": -2,
      "raphael-glucksmann": -1,
      "olivier-faure": 0,
      "francois-ruffin": 1,
      "bernard-cazeneuve": -2,
      "anasse-kazib": 0,
      "juan-branco": 2,
    }),
    sources: {},
  },
];

const likertOptions = [
  { value: -2, label: "Pas du tout d'accord" },
  { value: -1, label: "Plutôt pas d'accord" },
  { value: 0, label: "Neutre / je ne sais pas" },
  { value: 1, label: "Plutôt d'accord" },
  { value: 2, label: "Tout à fait d'accord" },
];

const getSourceForCandidate = (
  question: Question,
  candidateId: string,
) =>
  question.sources[candidateId] ??
  candidateSources[candidateId] ?? {
    label: "Fiche candidat",
    url: `/candidats/${candidateId}`,
  };

const comparerDeclaresUniquement = ref(true);

const candidates = computed(() =>
  comparerDeclaresUniquement.value
    ? candidats.filter((candidat) => candidat.statut === "declare")
    : candidats,
);

const selectedPriorityThemes = ref<Theme[]>([]);
const answers = reactive<Record<string, number>>({});
const currentIndex = ref(0);
const hasCalculated = ref(false);

const currentQuestion = computed(
  () => questions[currentIndex.value] ?? questions[0]!,
);
const answeredCount = computed(
  () => questions.filter((q) => typeof answers[q.id] === "number").length,
);
const progress = computed(() => (answeredCount.value / questions.length) * 100);
const allAnswered = computed(() => answeredCount.value === questions.length);

const isPriorityThemeDisabled = (theme: Theme) =>
  selectedPriorityThemes.value.length >= 3 &&
  !selectedPriorityThemes.value.includes(theme);

const togglePriorityTheme = (theme: Theme) => {
  if (selectedPriorityThemes.value.includes(theme)) {
    selectedPriorityThemes.value = selectedPriorityThemes.value.filter(
      (t) => t !== theme,
    );
    return;
  }
  if (selectedPriorityThemes.value.length < 3) {
    selectedPriorityThemes.value.push(theme);
  }
};

const getWeight = (theme: Theme) =>
  selectedPriorityThemes.value.includes(theme) ? 1.5 : 1;

const getLabelForValue = (value: number) =>
  likertOptions.find((o) => o.value === value)?.label ?? "Neutre";

const results = computed(() => {
  const computedResults = candidates.value.map((candidate) => {
    let weightedDistanceSum = 0;
    let weightedMaxDistance = 0;

    const perQuestion = questions.map((question) => {
      const userValue = answers[question.id] ?? 0;
      const candidateValue = question.positions[candidate.id] ?? 0;
      const weight = getWeight(question.theme);
      const distance = Math.abs(userValue - candidateValue);

      weightedDistanceSum += distance * weight;
      weightedMaxDistance += 4 * weight;

      return {
        question,
        userValue,
        candidateValue,
        distance,
        source: getSourceForCandidate(question, candidate.id),
      };
    });

    const proximity =
      weightedMaxDistance === 0
        ? 0
        : Math.round((1 - weightedDistanceSum / weightedMaxDistance) * 100);

    const bestMatches = [...perQuestion]
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
    const divergences = [...perQuestion]
      .sort((a, b) => b.distance - a.distance)
      .slice(0, 3);

    return {
      candidate,
      proximity,
      bestMatches,
      divergences,
    };
  });

  return computedResults.sort((a, b) => b.proximity - a.proximity);
});

const topMatches = computed(() => results.value.slice(0, 3));

const userMarkedThemes = computed(() => {
  const byTheme = themes
    .map((theme) => {
      const themeQuestions = questions.filter((q) => q.theme === theme.id);
      const avg =
        themeQuestions.reduce(
          (acc, q) => acc + Math.abs(answers[q.id] ?? 0),
          0,
        ) / themeQuestions.length;

      return { theme, avg };
    })
    .sort((a, b) => b.avg - a.avg);

  return byTheme.slice(0, 3);
});

const nextQuestion = () => {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value += 1;
  }
};

const previousQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const calculateResults = () => {
  if (!allAnswered.value) {
    return;
  }
  hasCalculated.value = true;
};

const restartQuiz = () => {
  for (const question of questions) {
    delete answers[question.id];
  }
  selectedPriorityThemes.value = [];
  currentIndex.value = 0;
  hasCalculated.value = false;
};

useSeoMeta({
  title: "Pour qui voter ? Quiz de proximité politique",
  description:
    "Quiz de proximité politique : comparez vos réponses aux positions publiques des candidats déclarés et pressentis à la présidentielle 2027, avec méthode transparente et sources.",
});
</script>

<template>
  <UContainer class="py-10 space-y-8">
    <UCard>
      <template #header>
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            <UBadge color="primary" variant="soft">Boussole électorale</UBadge>
            <UButton
              to="/"
              icon="i-lucide-home"
              class="bg-blue-900 text-white hover:bg-blue-800"
            >
              Accueil
            </UButton>
          </div>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Pour qui voter ? (quiz de proximité)
          </h1>
          <p class="text-sm text-muted">
            Ce quiz mesure une proximité avec les positions publiques de
            {{ candidates.length }} candidats et ne donne pas de consigne de vote.
          </p>
        </div>
      </template>

      <UAlert
        class="fr-alerte"
        color="info"
        variant="soft"
        icon="i-lucide-shield-alert"
        title="Neutralité et transparence"
        description="Résultat = proximité avec des positions publiques sourcées. Ce quiz n'est pas un sondage d'intentions de vote."
      />
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">
          Étape 1 — Choisis jusqu'à 3 thèmes prioritaires
        </h2>
      </template>

      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <label
          v-for="theme in themes"
          :key="theme.id"
          class="flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
        >
          <input
            type="checkbox"
            class="accent-red-600"
            :checked="selectedPriorityThemes.includes(theme.id)"
            :disabled="isPriorityThemeDisabled(theme.id)"
            @change="togglePriorityTheme(theme.id)"
          />
          <span>{{ theme.label }}</span>
        </label>
      </div>

      <p class="mt-3 text-xs text-muted">
        Thèmes prioritaires sélectionnés : {{ selectedPriorityThemes.length }}/3
        (pondéré ×1,5)
      </p>

      <label
        class="mt-4 flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
      >
        <input
          v-model="comparerDeclaresUniquement"
          type="checkbox"
          class="accent-red-600"
        />
        <span>
          Ne comparer qu'avec les
          <strong>candidatures déclarées</strong> ({{ candidates.length }} sur
          {{ candidats.length }}). Décoche pour inclure les candidatures
          pressenties et retirées.
        </span>
      </label>
    </UCard>

    <UCard>
      <template #header>
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">
              Étape 2 — Réponds aux questions
            </h2>
            <UBadge color="neutral" variant="outline">
              {{ currentIndex + 1 }} / {{ questions.length }}
            </UBadge>
          </div>
          <UProgress :model-value="progress" />
        </div>
      </template>

      <div class="space-y-4">
        <p class="font-medium">
          {{ currentQuestion.text }}
        </p>
        <div class="space-y-2">
          <label
            v-for="option in likertOptions"
            :key="option.value"
            class="flex cursor-pointer items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
          >
            <input
              v-model.number="answers[currentQuestion.id]"
              type="radio"
              class="accent-red-600"
              :name="currentQuestion.id"
              :value="option.value"
            />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex gap-2">
            <UButton
              icon="i-lucide-arrow-left"
              variant="outline"
              :disabled="currentIndex === 0"
              @click="previousQuestion"
            >
              Précédent
            </UButton>
            <UButton
              icon="i-lucide-arrow-right"
              trailing
              variant="outline"
              :disabled="currentIndex === questions.length - 1"
              @click="nextQuestion"
            >
              Suivant
            </UButton>
          </div>

          <UButton
            icon="i-lucide-calculator"
            class="bg-blue-900 text-white hover:bg-blue-800"
            :disabled="!allAnswered"
            @click="calculateResults"
          >
            Calculer mon résultat
          </UButton>
        </div>
      </template>
    </UCard>

    <UCard v-if="hasCalculated">
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-lg font-semibold">Résultats (proximité)</h2>
          <UButton
            icon="i-lucide-rotate-ccw"
            variant="outline"
            @click="restartQuiz"
          >
            Recommencer
          </UButton>
        </div>
      </template>

      <div class="space-y-6">
        <div>
          <h3 class="mb-3 font-semibold">Top proximités</h3>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <UCard v-for="entry in topMatches" :key="entry.candidate.id">
              <div class="flex items-center gap-3">
                <UAvatar
                  :src="entry.candidate.photo"
                  :alt="entry.candidate.nom"
                  size="lg"
                />
                <div>
                  <p class="font-semibold">{{ entry.candidate.nom }}</p>
                  <p class="text-xs text-muted">{{ entry.candidate.parti }}</p>
                  <span
                    class="fr-statut mt-1"
                    :class="`fr-statut--${entry.candidate.statut}`"
                  >
                    {{ statutsCandidature[entry.candidate.statut].label }}
                  </span>
                </div>
              </div>
              <p class="mt-3 text-sm">
                Proximité estimée :
                <strong>{{ entry.proximity }}%</strong>
              </p>
              <UButton
                :to="`/candidats/${entry.candidate.id}`"
                size="xs"
                variant="outline"
                class="mt-3"
                trailing-icon="i-lucide-arrow-right"
              >
                Voir la fiche
              </UButton>
            </UCard>
          </div>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">
            Thèmes où tes réponses sont les plus marquées
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="entry in userMarkedThemes"
              :key="entry.theme.id"
              color="neutral"
              variant="subtle"
            >
              {{ entry.theme.label }}
            </UBadge>
          </div>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">
            Pourquoi tu matches avec {{ results[0].candidate.nom }}
          </h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].bestMatches" :key="item.question.id">
              {{ item.question.text }} (toi:
              {{ getLabelForValue(item.userValue) }},
              {{ results[0].candidate.nom }}:
              {{ getLabelForValue(item.candidateValue) }}) -
              <a
                :href="item.source.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
            </li>
          </ul>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">Points de divergence principaux</h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].divergences" :key="item.question.id">
              {{ item.question.text }}
            </li>
          </ul>
        </div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Méthode et transparence</h2>
      </template>
      <ul class="list-disc space-y-2 pl-5 text-sm">
        <li>
          Questions formulees de facon symetrique, sans injonction de vote.
        </li>
        <li>
          Score basé sur la distance entre ta réponse et la position candidate
          (-2 à +2), pour {{ candidates.length }} candidats.
        </li>
        <li>Pondération ×1,5 pour tes thèmes prioritaires (max 3).</li>
        <li>Chaque position renvoie vers une source ou la fiche candidat.</li>
        <li>
          Par défaut, la comparaison ne retient que les
          <strong>candidatures déclarées</strong> ; les candidatures
          <strong>pressenties</strong> ou <strong>retirées</strong> peuvent être
          réintégrées via la case à cocher de l'étape 1.
        </li>
        <li>
          Le calcul est local au navigateur : aucune donnée identifiante n'est
          demandée.
        </li>
      </ul>
      <template #footer>
        <div class="space-y-2 text-sm">
          <p>Cadre utile (France) :</p>
          <ul class="list-disc space-y-1 pl-5">
            <li>
              <a
                href="https://www.commission-des-sondages.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission des sondages
              </a>
            </li>
            <li>
              <a
                href="https://www.elections.interieur.gouv.fr/comprendre-elections/comment-sont-encadrees-campagnes-electorales/grands-principes-encadrant-campagne-electorale"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encadrement des campagnes electorales
              </a>
            </li>
            <li>
              <a
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL - RGPD
              </a>
            </li>
          </ul>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
