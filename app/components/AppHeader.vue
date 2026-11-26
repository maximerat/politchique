<script setup lang="ts">
const route = useRoute();

const liens = [
  { label: "Candidats", to: "/", icon: "i-lucide-users" },
  { label: "Pour qui voter", to: "/pour-qui-voter", icon: "i-lucide-compass" },
  { label: "Foire aux questions", to: "/faq", icon: "i-lucide-circle-help" },
  {
    label: "Soutenir",
    to: "/soutenir",
    icon: "i-lucide-heart",
    soutien: true,
  },
];

const estActif = (chemin: string) =>
  chemin === "/" ? route.path === "/" : route.path.startsWith(chemin);

// Menu déroulant sur petit écran : fermé à chaque navigation, avec Échap ou
// par un clic en dehors de l'en-tête.
const menuOuvert = ref(false);
const entete = ref<HTMLElement | null>(null);

watch(
  () => route.fullPath,
  () => {
    menuOuvert.value = false;
  },
);

function surTouche(event: KeyboardEvent) {
  if (event.key === "Escape") menuOuvert.value = false;
}

function surClic(event: MouseEvent) {
  if (menuOuvert.value && !entete.value?.contains(event.target as Node)) {
    menuOuvert.value = false;
  }
}

onMounted(() => {
  document.addEventListener("keydown", surTouche);
  document.addEventListener("click", surClic);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", surTouche);
  document.removeEventListener("click", surClic);
});
</script>

<template>
  <header ref="entete" class="fr-entete">
    <UContainer
      class="flex items-center justify-between gap-3 py-2 sm:gap-6 sm:py-3"
    >
      <NuxtLink to="/" class="fr-entete__marque" aria-label="Accueil">
        <img src="/coq.png" alt="" class="h-8 w-8 shrink-0" draggable="false" />
        <span class="fr-entete__titre">
          Présidentielle <span class="text-red-600">2027</span>
        </span>
      </NuxtLink>

      <nav class="fr-entete__nav" aria-label="Navigation principale">
        <NuxtLink
          v-for="lien in liens"
          :key="lien.to"
          :to="lien.to"
          class="fr-entete__lien"
          :class="{
            'fr-entete__lien--soutien': lien.soutien,
            'fr-entete__lien--actif': estActif(lien.to),
          }"
          :aria-current="estActif(lien.to) ? 'page' : undefined"
        >
          <UIcon :name="lien.icon" class="size-4" />
          <span>{{ lien.label }}</span>
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="fr-entete__burger"
        :aria-expanded="menuOuvert"
        aria-controls="menu-mobile"
        :aria-label="menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="menuOuvert = !menuOuvert"
      >
        <UIcon :name="menuOuvert ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" />
        <span>Menu</span>
      </button>
    </UContainer>

    <nav
      v-show="menuOuvert"
      id="menu-mobile"
      class="fr-entete__panneau"
      aria-label="Navigation principale"
    >
      <UContainer class="flex flex-col gap-1 py-3">
        <NuxtLink
          v-for="lien in liens"
          :key="lien.to"
          :to="lien.to"
          class="fr-entete__lien fr-entete__lien--panneau"
          :class="{
            'fr-entete__lien--soutien': lien.soutien,
            'fr-entete__lien--actif': estActif(lien.to),
          }"
          :aria-current="estActif(lien.to) ? 'page' : undefined"
          @click="menuOuvert = false"
        >
          <UIcon :name="lien.icon" class="size-5" />
          <span>{{ lien.label }}</span>
        </NuxtLink>
      </UContainer>
    </nav>
  </header>
</template>
