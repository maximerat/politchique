<script setup lang="ts">
import {
  candidatsParId,
  niveauxProgramme,
  statutsCandidature,
} from "#shared/candidats";

const route = useRoute();

const candidat = computed(() => {
  const match = route.path.match(/^\/candidats\/([^/]+)\/?$/);

  return match?.[1] ? candidatsParId[match[1]] : undefined;
});

const statut = computed(() =>
  candidat.value ? statutsCandidature[candidat.value.statut] : undefined,
);

// Le niveau de programme n'est affiché que lorsqu'il est en retrait : il rend
// visible qu'une candidature déclarée peut n'avoir publié aucune proposition.
const niveauProgramme = computed(() => {
  const niveau = candidat.value?.programme;

  return niveau && niveau !== "detaille" ? niveauxProgramme[niveau] : undefined;
});

const { data: page } = await useAsyncData("page-" + route.path, () => {
  const normalizedPath = route.path.endsWith("/")
    ? route.path.slice(0, -1) || "/"
    : route.path;
  const withTrailingSlash = normalizedPath === "/" ? "/" : `${normalizedPath}/`;

  return queryCollection("content")
    .path(normalizedPath)
    .first()
    .then((result) => {
      if (result) {
        return result;
      }

      return queryCollection("content").path(withTrailingSlash).first();
    });
});
const pageMeta = computed(
  () =>
    (page.value ?? {}) as {
      party?: string;
      partyIcon?: string;
      photo?: string;
    },
);
// Nuxt Content ne conserve pas les champs de frontmatter non déclarés dans le
// schéma de collection : on retombe sur le référentiel partagé des candidats.
const photoEntete = computed(
  () => candidat.value?.photo ?? pageMeta.value.photo,
);
const partiEntete = computed(
  () => candidat.value?.parti ?? pageMeta.value.party,
);
const partiIconeEntete = computed(
  () => candidat.value?.partiIcone ?? pageMeta.value.partyIcon,
);

const seoTitle = computed(() =>
  page.value?.title
    ? `${page.value.title} | Programme | Présidentielle française 2027`
    : "Candidat | Présidentielle française 2027",
);
const seoDescription = computed(
  () =>
    page.value?.description ||
    "Synthèse du candidat, de son programme, des sources et des procédures.",
);

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <UContainer class="py-10">
    <UCard
      v-if="page"
      :ui="{ body: 'prose prose-neutral dark:prose-invert max-w-none' }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <UAvatar
              v-if="photoEntete"
              :src="photoEntete"
              :alt="page.title || 'Candidat'"
              size="lg"
            />
            <div class="space-y-1">
              <h1 class="text-lg font-semibold">
                {{ page.title || "Contenu" }}
              </h1>
              <div class="flex flex-wrap items-center gap-2">
                <UBadge
                  v-if="partiEntete"
                  color="neutral"
                  variant="subtle"
                  size="sm"
                >
                  <UIcon
                    v-if="partiIconeEntete"
                    :name="partiIconeEntete"
                    class="mr-1"
                  />
                  {{ partiEntete }}
                </UBadge>
                <span
                  v-if="candidat && statut"
                  class="fr-statut"
                  :class="`fr-statut--${candidat.statut}`"
                >
                  <UIcon :name="statut.icone" />
                  {{ statut.label }}
                </span>
                <span
                  v-if="candidat && niveauProgramme"
                  class="fr-programme"
                  :class="`fr-programme--${candidat.programme}`"
                >
                  <UIcon :name="niveauProgramme.icone" />
                  {{ niveauProgramme.label }}
                </span>
              </div>
            </div>
          </div>
          <UButton
            v-if="route.path !== '/'"
            to="/"
            icon="i-lucide-home"
            class="bg-blue-900 text-white hover:bg-blue-800"
          >
            Accueil
          </UButton>
        </div>
      </template>

      <div v-if="pageMeta.photo" class="mb-6 flex justify-center">
        <img
          :src="pageMeta.photo"
          :alt="page.title || 'Candidat'"
          class="h-40 w-40 rounded-xl object-cover shadow-sm"
        />
      </div>

      <div
        v-if="candidat && statut"
        class="fr-statut-bloc not-prose mb-6"
        :class="`fr-statut-bloc--${candidat.statut}`"
      >
        <p class="fr-statut-bloc__titre">
          <UIcon :name="statut.icone" class="mr-1 align-[-0.15em]" />
          {{ statut.label }}
        </p>
        <p class="fr-statut-bloc__detail">{{ candidat.statutDetail }}</p>
      </div>

      <div
        v-if="candidat && niveauProgramme"
        class="fr-statut-bloc not-prose mb-6"
        :class="`fr-statut-bloc--programme-${candidat.programme}`"
      >
        <p class="fr-statut-bloc__titre">
          <UIcon :name="niveauProgramme.icone" class="mr-1 align-[-0.15em]" />
          {{ niveauProgramme.label }}
        </p>
        <p v-if="candidat.programmeDetail" class="fr-statut-bloc__detail">
          {{ candidat.programmeDetail }}
        </p>
      </div>

      <ContentRenderer :value="page" />
    </UCard>
  </UContainer>
</template>
