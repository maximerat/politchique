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
        <h2 class="text-lg font-semibold">A propos de moi</h2>
      </template>
      <p class="text-sm">
        Je m'appelle Maxime. Je ne me considère pas comme très politisé, même
        si j'ai forcément mes opinions. L'origine de ce site tient en une
        phrase : j'en ai assez de voir des responsables au pouvoir, au casier
        judiciaire long comme le bras, décider du sort de 70 millions de
        personnes — alors qu'on a exigé de ma mère, ancienne femme de ménage, un
        casier vierge pour faire son travail.
      </p>
    </UCard>
  </UContainer>
</template>
