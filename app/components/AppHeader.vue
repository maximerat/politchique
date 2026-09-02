<script setup lang="ts">
const route = useRoute();

const liens = [
  { label: "Candidats", to: "/", icon: "i-lucide-users" },
  { label: "Pour qui voter", to: "/pour-qui-voter", icon: "i-lucide-compass" },
];

const estActif = (chemin: string) =>
  chemin === "/" ? route.path === "/" : route.path.startsWith(chemin);
</script>

<template>
  <header class="fr-entete">
    <UContainer
      class="flex items-center justify-between gap-3 py-2 sm:gap-6 sm:py-3"
    >
      <NuxtLink to="/" class="fr-entete__marque" aria-label="Accueil">
        <img
          src="/coq.png"
          alt=""
          class="h-8 w-8 shrink-0"
          draggable="false"
        />
        <span class="fr-entete__titre">
          Présidentielle <span class="text-red-600">2027</span>
        </span>
      </NuxtLink>

      <nav
        class="flex items-center gap-1 sm:gap-2"
        aria-label="Navigation principale"
      >
        <NuxtLink
          v-for="lien in liens"
          :key="lien.to"
          :to="lien.to"
          class="fr-entete__lien"
          :class="{ 'fr-entete__lien--actif': estActif(lien.to) }"
          :aria-current="estActif(lien.to) ? 'page' : undefined"
        >
          <UIcon :name="lien.icon" class="size-4" />
          <span>{{ lien.label }}</span>
        </NuxtLink>

        <!-- Lien "Soutenir" masqué temporairement (la page reste accessible). -->
        <!--
        <NuxtLink
          to="/soutenir"
          class="fr-entete__lien fr-entete__lien--soutien"
          :class="{ 'fr-entete__lien--actif': estActif('/soutenir') }"
          :aria-current="estActif('/soutenir') ? 'page' : undefined"
        >
          <UIcon name="i-lucide-heart" class="size-4" />
          <span>Soutenir</span>
        </NuxtLink>
        -->
      </nav>
    </UContainer>
  </header>
</template>
