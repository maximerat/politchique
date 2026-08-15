<script setup lang="ts">
import {
  candidats,
  cheminCandidat,
  statutsCandidature,
  type Candidat,
  type StatutCandidature,
} from "#shared/candidats";

function melangerCandidats<T>(liste: T[]): T[] {
  const copie = [...liste];

  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const valeurI = copie[i]!;
    copie[i] = copie[j]!;
    copie[j] = valeurI;
  }

  return copie;
}

const candidatsAleatoires = useState("candidats-aleatoires", () =>
  melangerCandidats(candidats),
);

const recherche = ref("");
const filtreStatut = ref<StatutCandidature | "tous">("tous");

function normaliserTexte(texte: string) {
  return texte
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

const nombreParStatut = computed(() => ({
  tous: candidats.length,
  declare: candidats.filter((c) => c.statut === "declare").length,
  pressenti: candidats.filter((c) => c.statut === "pressenti").length,
  retire: candidats.filter((c) => c.statut === "retire").length,
}));

const filtres = computed(() => [
  { valeur: "tous" as const, label: "Tous", nombre: nombreParStatut.value.tous },
  {
    valeur: "declare" as const,
    label: "Déclarés",
    nombre: nombreParStatut.value.declare,
  },
  {
    valeur: "pressenti" as const,
    label: "Pressentis",
    nombre: nombreParStatut.value.pressenti,
  },
  {
    valeur: "retire" as const,
    label: "Retirés",
    nombre: nombreParStatut.value.retire,
  },
]);

const candidatsFiltres = computed(() => {
  const terme = normaliserTexte(recherche.value.trim());

  return candidatsAleatoires.value.filter((candidat) => {
    const correspondStatut =
      filtreStatut.value === "tous" || candidat.statut === filtreStatut.value;
    const correspondNom =
      !terme || normaliserTexte(candidat.nom).includes(terme);

    return correspondStatut && correspondNom;
  });
});

const statutDe = (candidat: Candidat) => statutsCandidature[candidat.statut];

useSeoMeta({
  title: "Présidentielle française 2027 : candidats et programmes",
  description:
    "Comparez les candidats à la présidentielle française et consultez des synthèses de leurs programmes, sources et procédures.",
});

function remelangerCandidats() {
  candidatsAleatoires.value = melangerCandidats(candidats);
}
</script>

<template>
  <UContainer class="py-12 space-y-10">
    <UCard
      :ui="{
        root: 'border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(11,18,32,1)]',
      }"
    >
      <template #header>
        <div class="space-y-4">
          <UBadge
            color="primary"
            variant="solid"
            class="bg-red-600 text-white hover:bg-red-700 px-3 py-1 text-xs"
          >
            Présidentielle française · 2027
          </UBadge>
          <div class="flex items-center gap-3">
            <FrLogo size="lg" />
            <h1
              class="text-4xl font-black tracking-tighter sm:text-5xl uppercase leading-[0.95]"
            >
              Candidats <span class="text-red-600">&</span> programmes
            </h1>
          </div>

          <p class="text-base font-medium text-gray-700 max-w-2xl">
            Cette application présente les candidats à la future élection
            présidentielle et synthétise leurs positions de manière claire, en
            français.
          </p>
        </div>
      </template>

      <UAlert
        class="fr-alerte"
        color="info"
        variant="soft"
        icon="i-lucide-triangle-alert"
        description=""
      >
        <template #description>
          Votez pour un candidat, et n'oubliez pas, vous serez déçu quoi qu'il
          arrive 😎<br />Cliquez sur la fiche d'un candidat pour voir son
          programme (ou ce qui s'en approche), les procédures et potentielles
          condamnations.<br />Chaque fiche indique si la
          <strong>candidature est déclarée</strong> (annoncée publiquement) ou
          seulement <strong>pressentie</strong> (nom qui circule, sans annonce).
        </template>
      </UAlert>

      <div class="mt-4">
        <UButton to="/pour-qui-voter" icon="i-lucide-compass" variant="outline">
          Voir la page "Pour qui voter ?"
        </UButton>
      </div>
    </UCard>

    <section class="space-y-4">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-semibold">Liste des candidats</h2>
          <UButton
            size="xs"
            variant="subtle"
            icon="i-lucide-shuffle"
            class="bg-red-500 text-white hover:bg-red-600"
            @click="remelangerCandidats"
          >
            Mélanger
          </UButton>
        </div>
        <UBadge color="neutral" variant="outline">
          {{ candidatsFiltres.length }} / {{ candidats.length }} candidat{{
            candidats.length > 1 ? "s" : ""
          }}
        </UBadge>
      </div>

      <UInput
        v-model="recherche"
        icon="i-lucide-search"
        placeholder="Rechercher par nom de candidat…"
        size="lg"
        :ui="{ root: 'w-full' }"
      >
        <template v-if="recherche" #trailing>
          <UButton
            color="neutral"
            variant="link"
            icon="i-lucide-x"
            size="xs"
            aria-label="Effacer la recherche"
            @click="recherche = ''"
          />
        </template>
      </UInput>

      <div class="flex flex-wrap items-center gap-2">
        <UButton
          v-for="filtre in filtres"
          :key="filtre.valeur"
          size="xs"
          :variant="filtreStatut === filtre.valeur ? 'solid' : 'outline'"
          :class="
            filtreStatut === filtre.valeur
              ? 'bg-blue-900 text-white hover:bg-blue-800'
              : ''
          "
          @click="filtreStatut = filtre.valeur"
        >
          {{ filtre.label }} ({{ filtre.nombre }})
        </UButton>
      </div>

      <p
        v-if="candidatsFiltres.length === 0"
        class="rounded-lg border border-dashed border-gray-300 px-4 py-8 text-center text-sm text-muted"
      >
        Aucun candidat ne correspond à cette recherche.
      </p>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="candidat in candidatsFiltres"
          :key="candidat.id"
          :ui="{ body: 'space-y-4' }"
        >
          <div class="space-y-2">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <UAvatar :src="candidat.photo" :alt="candidat.nom" size="lg" />
                <h3 class="text-lg font-semibold">
                  {{ candidat.nom }}
                </h3>
              </div>
              <UBadge color="neutral" variant="subtle">
                <UIcon :name="candidat.partiIcone" class="mr-1" />
                {{ candidat.parti }}
              </UBadge>
            </div>
            <span
              class="fr-statut"
              :class="`fr-statut--${candidat.statut}`"
              :title="candidat.statutDetail"
            >
              <UIcon :name="statutDe(candidat).icone" />
              {{ statutDe(candidat).label }}
            </span>
            <p class="text-sm text-muted">
              {{ candidat.resume }}
            </p>
          </div>

          <div class="flex items-center justify-between gap-3">
            <UButton
              :to="cheminCandidat(candidat.id)"
              class="bg-blue-900 text-white hover:bg-blue-800"
              trailing-icon="i-lucide-arrow-right"
            >
              Ouvrir la fiche
            </UButton>
          </div>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
