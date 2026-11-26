<script setup lang="ts">
// Les réponses sont écrites en HTML (contenu éditorial du site, pas de saisie
// utilisateur) : la même source sert à l'affichage et aux données structurées
// FAQPage, pour lesquelles les balises sont retirées.
type Question = { id: string; question: string; reponse: string };
type Rubrique = { titre: string; icone: string; questions: Question[] };

const rubriques: Rubrique[] = [
  {
    titre: "Le calendrier",
    icone: "i-lucide-calendar",
    questions: [
      {
        id: "dates",
        question: "Quand a lieu l'élection présidentielle ?",
        reponse: `<p>Le <strong>premier tour</strong> a lieu le <strong>dimanche 18 avril 2027</strong> et le <strong>second tour</strong> le <strong>dimanche 2 mai 2027</strong>. En Guadeloupe, Martinique, Guyane, à Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin et en Polynésie française, on vote la veille (samedi 17 avril et samedi 1er mai).</p>`,
      },
      {
        id: "etapes",
        question: "Quelles sont les grandes étapes d'ici le vote ?",
        reponse: `<ul>
<li><strong>Au plus tard le 7 février 2027 :</strong> publication du décret de convocation des électeurs, qui ouvre officiellement la collecte des parrainages.</li>
<li><strong>Vendredi 12 mars 2027 :</strong> date limite d'inscription sur les listes électorales, et date limite de réception des parrainages par le Conseil constitutionnel (18 h).</li>
<li><strong>Mardi 16 mars 2027 en principe</strong> (au plus tard le vendredi 26 mars) : publication de la liste officielle des candidats.</li>
<li><strong>Lundi 5 avril 2027 :</strong> ouverture de la campagne officielle.</li>
<li><strong>18 avril et 2 mai 2027 :</strong> premier et second tours.</li>
<li><strong>Au plus tard le 13 mai 2027 :</strong> fin du mandat d'Emmanuel Macron et passation de pouvoirs.</li>
</ul>`,
      },
      {
        id: "macron",
        question: "Pourquoi Emmanuel Macron ne peut-il pas se représenter ?",
        reponse: `<p>Depuis la révision constitutionnelle de 2008, l'article 6 de la Constitution interdit d'exercer <strong>plus de deux mandats consécutifs</strong>. Élu en 2017 et réélu en 2022, Emmanuel Macron ne peut donc pas être candidat en 2027. Le mandat présidentiel dure <strong>cinq ans</strong>.</p>`,
      },
    ],
  },
  {
    titre: "Les parrainages (les « 500 signatures »)",
    icone: "i-lucide-signature",
    questions: [
      {
        id: "combien-signatures",
        question:
          "Combien de signatures faut-il pour officialiser une candidature ?",
        reponse: `<p>Il faut <strong>500 parrainages</strong> (officiellement des « présentations ») d'élus, avec deux règles de répartition :</p>
<ul>
<li>ils doivent venir d'au moins <strong>30 départements ou collectivités d'outre-mer</strong> différents ;</li>
<li><strong>pas plus d'un dixième</strong> (50 signatures) ne peut venir d'un même département ou d'une même collectivité.</li>
</ul>
<p>Un candidat qui a 600 signatures toutes issues de 20 départements n'est donc pas qualifié.</p>`,
      },
      {
        id: "qui-parraine",
        question: "Qui peut parrainer un candidat ?",
        reponse: `<p>Environ <strong>42 000 élus</strong> (chiffre de 2022) : les <strong>maires</strong> (la grande majorité), les députés, les sénateurs, les députés européens élus en France, les conseillers départementaux et régionaux, les membres des assemblées d'outre-mer, ainsi que certains présidents d'intercommunalités et maires délégués.</p>
<p>Les <strong>citoyens ne peuvent pas parrainer</strong> : les pétitions ou « soutiens citoyens » revendiqués par certains candidats n'ont aucune valeur légale.</p>`,
      },
      {
        id: "regles-parrainage",
        question: "Un élu peut-il parrainer plusieurs candidats ou changer d'avis ?",
        reponse: `<p>Non. Chaque élu ne peut parrainer <strong>qu'un seul candidat</strong>, même s'il cumule plusieurs mandats. Et la loi est claire : « <em>une fois envoyée, une présentation ne peut être retirée</em> ». Si le candidat parrainé abandonne, la signature ne peut pas être reportée sur un autre.</p>
<p>Un élu n'est jamais obligé de parrainer qui que ce soit.</p>`,
      },
      {
        id: "comment-envoyer",
        question: "Comment un élu envoie-t-il son parrainage ?",
        reponse: `<p>Après la publication du décret de convocation, l'administration adresse aux élus un <strong>formulaire officiel</strong> et une enveloppe dédiée. L'élu remplit le formulaire et l'envoie lui-même <strong>par voie postale au Conseil constitutionnel</strong>. Un formulaire remis à l'équipe d'un candidat, ou une simple promesse orale, ne compte pas.</p>
<p>La loi prévoit aussi une transmission électronique, mais ses modalités pour 2027 doivent encore être précisées par décret.</p>`,
      },
      {
        id: "quand-collecte",
        question: "Quand les parrainages peuvent-ils être envoyés ?",
        reponse: `<p>Uniquement entre la <strong>publication du décret de convocation</strong> (au plus tard le 7 février 2027) et le <strong>vendredi 12 mars 2027 à 18 h</strong>, date limite de réception par le Conseil constitutionnel. Avant cette période, les candidats ne recueillent que des <strong>promesses</strong> de signature.</p>`,
      },
      {
        id: "savoir-combien",
        question: "Comment savoir combien de signatures a un candidat ?",
        reponse: `<p>Pendant la période officielle, le <strong>Conseil constitutionnel publie sur son site, au moins deux fois par semaine</strong>, le nom et la qualité de chaque élu ayant valablement parrainé un candidat (en 2022, les mises à jour paraissaient le mardi et le jeudi). On peut y voir le total de chaque candidat, et le détail par élu et par département.</p>
<p><strong>Avant cette période</strong>, les seuls chiffres disponibles sont les <strong>promesses annoncées par les équipes de campagne</strong>. Elles ne sont vérifiables par personne, et une promesse n'est pas un parrainage.</p>`,
      },
      {
        id: "quand-sait-on",
        question: "Quand sait-on si un candidat a ses 500 signatures ?",
        reponse: `<p>Les premiers décomptes officiels paraissent dans les jours qui suivent l'ouverture de la collecte, soit en <strong>février 2027</strong>, puis sont mis à jour au fil des semaines. Un candidat peut donc franchir le seuil bien avant la date limite.</p>
<p>La réponse définitive tombe après la clôture du <strong>12 mars 2027</strong> : le Conseil constitutionnel vérifie les signatures puis publie la <strong>liste officielle des candidats</strong>, en principe le <strong>mardi 16 mars 2027</strong>, et au plus tard le 26 mars.</p>`,
      },
      {
        id: "pourquoi-public",
        question: "Pourquoi les noms des élus parrains sont-ils publics ?",
        reponse: `<p>Depuis une loi de 2016, <strong>tous les parrainages sont publiés</strong>, et non plus seulement 500 noms tirés au sort par candidat comme auparavant. L'objectif est la transparence. En contrepartie, certains maires disent subir des pressions et préfèrent ne parrainer personne, ce qui complique la tâche des petits candidats.</p>`,
      },
    ],
  },
  {
    titre: "Être candidat",
    icone: "i-lucide-user-check",
    questions: [
      {
        id: "conditions",
        question: "Qui peut être candidat ?",
        reponse: `<p>Il faut :</p>
<ul>
<li>avoir la <strong>nationalité française</strong> et au moins <strong>18 ans</strong> ;</li>
<li>être <strong>électeur</strong> et ne pas être frappé d'une peine d'<strong>inéligibilité</strong> ;</li>
<li>réunir les <strong>500 parrainages</strong> ;</li>
<li>déposer une <strong>déclaration de situation patrimoniale</strong> et s'engager à en déposer une en fin de mandat s'il est élu ;</li>
<li>désigner un <strong>mandataire financier</strong> pour gérer les fonds de campagne.</li>
</ul>
<p>Aucun diplôme ni appartenance à un parti n'est exigé.</p>`,
      },
      {
        id: "declare-officiel",
        question:
          "Quelle différence entre un candidat « déclaré » et un candidat officiel ?",
        reponse: `<p>Un candidat <strong>déclaré</strong> a annoncé publiquement qu'il se présente : c'est le statut affiché sur ce site. Un candidat <strong>officiel</strong> figure sur la liste publiée par le Conseil constitutionnel en mars 2027, après vérification de ses parrainages. Aujourd'hui, <strong>personne n'est encore candidat officiel</strong>.</p>
<p>Ce site distingue aussi les candidatures <strong>pressenties</strong> (nom qui circule, sans annonce), <strong>retirées</strong> et <strong>hors course</strong>.</p>`,
      },
      {
        id: "condamnation",
        question: "Une personne condamnée peut-elle être candidate ?",
        reponse: `<p>Une condamnation n'empêche pas en soi d'être candidat. Ce qui compte, c'est une éventuelle <strong>peine d'inéligibilité</strong> prononcée par le juge, et la date à laquelle elle s'applique. C'est la question qui se pose pour <a href="/candidats/marine-le-pen">Marine Le Pen</a>, dont la situation est détaillée sur sa fiche.</p>
<p>Chaque fiche de candidat comporte une rubrique « Condamnations et procédures ».</p>`,
      },
    ],
  },
  {
    titre: "La campagne",
    icone: "i-lucide-megaphone",
    questions: [
      {
        id: "temps-parole",
        question: "Les candidats ont-ils tous le même temps de parole ?",
        reponse: `<p>Pas tout de suite. C'est l'<strong>Arcom</strong> (le régulateur de l'audiovisuel) qui contrôle les radios et télévisions :</p>
<ul>
<li>avant la campagne officielle, s'applique une règle d'<strong>équité</strong> : le temps est réparti selon la représentativité (résultats passés, sondages, contribution au débat) ;</li>
<li>à partir du <strong>5 avril 2027</strong>, début de la campagne officielle, s'applique l'<strong>égalité stricte</strong> entre tous les candidats officiels.</li>
</ul>`,
      },
      {
        id: "financement",
        question: "Comment les campagnes sont-elles financées ?",
        reponse: `<ul>
<li><strong>Plafond de dépenses :</strong> en 2022, 16,851 millions d'euros pour un candidat du premier tour et 22,509 millions pour un finaliste. Les montants de 2027 doivent être confirmés par décret.</li>
<li><strong>Dons :</strong> une personne peut donner au plus <strong>4 600 euros</strong> par élection. Les dons des <strong>entreprises</strong> et autres personnes morales sont <strong>interdits</strong>.</li>
<li><strong>Remboursement par l'État :</strong> jusqu'à 47,5 % du plafond pour un candidat qui dépasse <strong>5 % des voix</strong> au premier tour, et 4,75 % seulement en dessous. Il faut aussi que le compte de campagne soit validé par la Commission nationale des comptes de campagne (CNCCFP).</li>
</ul>`,
      },
      {
        id: "sondages",
        question: "Les sondages sont-ils encadrés ?",
        reponse: `<p>Oui. La <strong>Commission des sondages</strong> contrôle les sondages électoraux publiés et peut faire publier des mises au point. La publication de tout sondage est <strong>interdite la veille et le jour du scrutin</strong>. Un sondage est une photographie à un instant donné, avec une marge d'erreur de plusieurs points : ce n'est pas une prévision.</p>`,
      },
    ],
  },
  {
    titre: "Voter",
    icone: "i-lucide-vote",
    questions: [
      {
        id: "inscription",
        question: "Jusqu'à quand peut-on s'inscrire sur les listes électorales ?",
        reponse: `<p>Jusqu'au <strong>vendredi 12 mars 2027</strong>, en ligne sur <a href="https://www.service-public.fr/particuliers/vosdroits/R16396" target="_blank" rel="noopener">service-public.fr</a> ou en mairie. Certaines situations (déménagement pour raison professionnelle, majorité ou nationalité acquise récemment) permettent de s'inscrire jusqu'au dixième jour avant le premier tour.</p>
<p>Les jeunes recensés à 16 ans sont <strong>inscrits d'office</strong> à leur majorité, mais il vaut mieux vérifier.</p>`,
      },
      {
        id: "verifier-inscription",
        question: "Comment vérifier que je suis bien inscrit, et où je vote ?",
        reponse: `<p>Le service « <a href="https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE" target="_blank" rel="noopener">Interroger sa situation électorale</a> » de service-public.fr indique votre commune d'inscription et votre bureau de vote.</p>`,
      },
      {
        id: "procuration",
        question: "Comment voter par procuration ?",
        reponse: `<p>Faites la demande en ligne sur <a href="https://www.maprocuration.gouv.fr" target="_blank" rel="noopener">maprocuration.gouv.fr</a>, puis validez-la en personne dans un commissariat, une gendarmerie ou un consulat (ou en ligne avec l'identité numérique certifiée). La personne qui vote à votre place peut être inscrite dans une autre commune, mais elle doit voter dans <strong>votre</strong> bureau de vote.</p>
<p>Une procuration peut être faite jusqu'à la veille du scrutin, mais faites-la <strong>le plus tôt possible</strong> pour qu'elle arrive à temps au bureau de vote.</p>`,
      },
      {
        id: "papiers",
        question: "Que faut-il apporter le jour du vote ?",
        reponse: `<p>Dans les communes de <strong>1 000 habitants et plus</strong>, une <strong>pièce d'identité avec photo</strong> est obligatoire (carte d'identité, passeport, permis de conduire, carte Vitale avec photo…). La <strong>carte électorale</strong> est utile mais pas obligatoire.</p>`,
      },
      {
        id: "vote-blanc",
        question: "Le vote blanc compte-t-il ?",
        reponse: `<p>Les bulletins blancs sont <strong>décomptés à part</strong> et leur nombre est publié, mais ils ne sont <strong>pas des suffrages exprimés</strong>. Ils n'entrent donc pas dans le calcul de la majorité : un candidat peut être élu même si les votes blancs sont très nombreux. Le vote n'est pas obligatoire en France.</p>`,
      },
      {
        id: "election",
        question: "Comment le président est-il élu ?",
        reponse: `<p>Au <strong>suffrage universel direct</strong>, à deux tours. Un candidat qui obtient plus de <strong>50 % des suffrages exprimés</strong> au premier tour est élu directement, ce qui n'est jamais arrivé depuis 1965. Sinon, seuls les <strong>deux candidats arrivés en tête</strong> s'affrontent au second tour, deux semaines plus tard.</p>
<p>Les premières estimations sont diffusées à <strong>20 h</strong> le soir du vote, aucun résultat ne pouvant être publié avant la fermeture des derniers bureaux. Les résultats officiels sont proclamés par le Conseil constitutionnel.</p>`,
      },
    ],
  },
  {
    titre: "Ce site",
    icone: "i-lucide-info",
    questions: [
      {
        id: "site-sources",
        question: "D'où viennent les informations de ce site ?",
        reponse: `<p>Chaque fiche cite ses sources (programmes officiels, presse, décisions de justice) avec des liens. Les candidats sont présentés avec les mêmes rubriques et les mêmes critères. Les principes sont détaillés sur la page <a href="/a-propos">À propos</a>. Une erreur ? Utilisez le lien « Contact » en bas de page.</p>`,
      },
      {
        id: "site-quiz",
        question: "Comment fonctionne le quiz « Pour qui voter » ?",
        reponse: `<p>Vous répondez à une série de questions, et le <a href="/pour-qui-voter">quiz</a> compare vos réponses aux positions sourcées de chaque candidat. Tout est calculé dans votre navigateur : aucune réponse n'est enregistrée. C'est un outil de découverte, pas une consigne de vote.</p>`,
      },
    ],
  },
];

const sources = [
  {
    label: "Conseil constitutionnel",
    url: "https://www.conseil-constitutionnel.fr/",
  },
  {
    label: "Loi n° 62-1292 du 6 novembre 1962 (élection du président)",
    url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000873479",
  },
  {
    label: "Toute l'Europe : calendrier de la présidentielle 2027",
    url: "https://www.touteleurope.eu/vie-politique-des-etats-membres/presidentielle-2027-calendrier-dates-inscription-candidats-vote/",
  },
  {
    label: "Service-public.fr : élections",
    url: "https://www.service-public.fr/particuliers/vosdroits/N47",
  },
];

const texteBrut = (html: string) =>
  html
    .replace(/<li>/g, "• ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

useSeoMeta({
  title: "Questions fréquentes sur la présidentielle 2027",
  description:
    "Parrainages, calendrier, conditions pour être candidat, financement, inscription et procuration : les réponses aux questions courantes sur la présidentielle 2027.",
  ogTitle: "Questions fréquentes sur la présidentielle 2027",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rubriques.flatMap((r) =>
          r.questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: texteBrut(q.reponse) },
          })),
        ),
      }),
    },
  ],
});
</script>

<template>
  <UContainer class="py-10 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Questions fréquentes
          </h1>
          <UButton
            to="/"
            icon="i-lucide-home"
            class="bg-blue-900 text-white hover:bg-blue-800"
          >
            Accueil
          </UButton>
        </div>
      </template>

      <div class="space-y-3 text-sm">
        <p class="text-muted">
          Parrainages, calendrier, financement, vote : les réponses aux
          questions que l'on se pose le plus souvent sur la présidentielle 2027.
          Les dates sont déduites des textes en vigueur ; elles seront
          confirmées par le décret de convocation, attendu au plus tard le 7
          février 2027.
        </p>
        <nav aria-label="Rubriques" class="flex flex-wrap gap-2">
          <a
            v-for="(rubrique, i) in rubriques"
            :key="rubrique.titre"
            :href="`#rubrique-${i}`"
            class="fr-faq__ancre"
          >
            <UIcon :name="rubrique.icone" class="size-4" />
            {{ rubrique.titre }}
          </a>
        </nav>
      </div>
    </UCard>

    <UCard v-for="(rubrique, i) in rubriques" :id="`rubrique-${i}`" :key="rubrique.titre">
      <template #header>
        <h2 class="flex items-center gap-2 text-lg font-semibold">
          <UIcon :name="rubrique.icone" class="size-5 text-red-600" />
          {{ rubrique.titre }}
        </h2>
      </template>

      <div class="divide-y divide-gray-200">
        <details
          v-for="q in rubrique.questions"
          :id="q.id"
          :key="q.id"
          class="fr-faq__question group py-3 first:pt-0 last:pb-0"
        >
          <summary
            class="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold"
          >
            <span>{{ q.question }}</span>
            <UIcon
              name="i-lucide-chevron-down"
              class="mt-0.5 size-5 shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="fr-faq__reponse mt-2 space-y-2 text-sm" v-html="q.reponse" />
        </details>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Sources</h2>
      </template>
      <ul class="list-disc space-y-1 pl-5 text-sm">
        <li v-for="source in sources" :key="source.url">
          <a
            :href="source.url"
            target="_blank"
            rel="noopener"
            class="underline hover:text-red-600"
          >
            {{ source.label }}
          </a>
        </li>
      </ul>
    </UCard>
  </UContainer>
</template>

<style scoped>
.fr-faq__ancre {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid rgba(11, 18, 32, 0.18);
  border-radius: 4px;
  font-size: 0.78rem;
  font-weight: 700;
}

.fr-faq__ancre:hover {
  border-color: var(--fr-bleu);
  color: var(--fr-bleu);
}

.fr-faq__question summary::-webkit-details-marker {
  display: none;
}

.fr-faq__question summary:hover {
  color: var(--fr-bleu);
}

.fr-faq__reponse :deep(ul) {
  list-style: disc;
  padding-left: 1.25rem;
}

.fr-faq__reponse :deep(li + li) {
  margin-top: 0.25rem;
}

.fr-faq__reponse :deep(a) {
  text-decoration: underline;
}

.fr-faq__reponse :deep(a:hover) {
  color: var(--fr-rouge);
}
</style>
