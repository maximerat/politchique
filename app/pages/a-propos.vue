<script setup lang="ts">
useSeoMeta({
  title: "A propos | Presidentielle francaise 2027",
  description:
    "Informations de transparence : impartialite editoriale, donnees, hebergement et outils utilises.",
});
</script>

<template>
  <UContainer class="py-10 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            A propos
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

      <p class="text-sm text-muted">
        Cette page presente les principes de fonctionnement et de transparence
        du site.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Protection des donnees</h2>
      </template>
      <p class="text-sm">
        Aucune donnee personnelle nominative n'est conservee par le quiz de
        proximite. Les reponses sont calculees localement dans le navigateur.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Impartialite editoriale</h2>
      </template>
      <p class="text-sm">
        Le but du site est de rassembler les programmes des candidats et de les
        comparer. Et au passage de voir les casseroles des candidats.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Comment les fiches sont classées</h2>
      </template>
      <div class="space-y-3 text-sm">
        <p>
          Chaque fiche porte deux indicateurs, appliqués à tous les candidats
          avec le même critère.
        </p>
        <p>
          Le <strong>statut</strong> décrit l'état de la candidature : déclarée,
          pressentie, retirée ou hors course. Une candidature n'est dite
          déclarée que si une annonce officielle est sourcée.
        </p>
        <p>
          Le <strong>niveau de programme</strong> décrit ce qu'il est possible
          de lire des propositions du candidat, indépendamment de son poids
          politique :
        </p>
        <ul class="list-disc space-y-1 pl-5">
          <li>
            <strong>Programme détaillé</strong> — un programme public et
            structuré existe, couvrant plusieurs domaines. Aucun marqueur n'est
            affiché dans ce cas.
          </li>
          <li>
            <strong>Programme mono-thématique</strong> — un contenu public
            existe, mais volontairement limité à un seul sujet. Le candidat
            l'assume.
          </li>
          <li>
            <strong>Programme sommaire</strong> — quelques axes ont été annoncés
            publiquement, sans document programmatique publié.
          </li>
          <li>
            <strong>Aucun programme publié</strong> — aucune proposition
            identifiable dans les sources consultées.
          </li>
        </ul>
        <p>
          Ces marqueurs portent sur la <strong>disponibilité</strong> des
          propositions, pas sur leur qualité ni sur leur contenu. Une
          candidature déclarée sans programme reste listée : l'absence est
          signalée, la fiche n'est pas écartée.
        </p>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">A propos de moi</h2>
      </template>
      <p class="text-sm">
        <p>
          Je m'appelle Maxime. Je ne me considère pas comme très politisé, même
          si j'ai forcément mes opinions. Ce site part d'un constat simple : on
          a demandé à ma mère, ancienne femme de ménage, un casier judiciaire
          vierge pour exercer son métier. On ne demande rien de tel à ceux qui
          gouvernent 68 millions de Français.
        </p>
        <p>
          C'est pour ça que j'ai construit ce site : comparer les programmes,
          regarder les parcours, et faire son choix en connaissance de cause.
        </p>
      </p>
    </UCard>
  </UContainer>
</template>
