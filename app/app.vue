<script setup lang="ts">
import { candidats, cheminCandidat } from "#shared/candidats";

// Ordre alphabétique stable : le footer sert aussi de maillage interne pour le
// référencement, il ne suit donc pas le mélange aléatoire de la page d'accueil.
const candidatsFooter = [...candidats].sort((a, b) =>
  a.nom.localeCompare(b.nom, "fr"),
);

type DoorbellOptions = {
  id: string;
  appKey: string;
  windowLoaded?: boolean;
  language: string;
};

onMounted(() => {
  type LegacyWindow = Window & {
    doorbellOptions?: DoorbellOptions;
    attachEvent?: (event: string, handler: () => void) => void;
  };

  const w = window as LegacyWindow;
  const d = document;

  const doorbellOptions: DoorbellOptions = {
    id: "14691",
    appKey: "9QqghzW44x1JhGhHQagax1nL0ObUwYNqm47c62hHPZYdMPBkU66IAWIvi7SCpCYi",
    language: "fr",
  };
  w.doorbellOptions = doorbellOptions;

  let hasLoaded = false;

  const loadDoorbell = () => {
    if (hasLoaded || d.getElementById("doorbellScript")) {
      return;
    }

    hasLoaded = true;
    doorbellOptions.windowLoaded = true;

    const g = d.createElement("script");
    g.id = "doorbellScript";
    g.type = "text/javascript";
    g.crossOrigin = "anonymous";
    g.async = true;
    g.src = `https://embed.doorbell.io/button/${doorbellOptions.id}?t=${Date.now()}`;
    const target = d.head || d.body;
    if (target) {
      target.appendChild(g);
    }
  };

  if (w.attachEvent) {
    w.attachEvent("onload", loadDoorbell);
  } else if (w.addEventListener) {
    w.addEventListener("load", loadDoorbell, false);
  } else {
    loadDoorbell();
  }

  if (d.readyState === "complete") {
    loadDoorbell();
  }
});
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <NuxtRouteAnnouncer />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <footer class="px-4 py-6 text-center text-sm">
        <nav
          class="mx-auto mb-6 max-w-5xl border-t border-gray-200 pt-6 text-left"
          aria-label="Liste des candidats"
        >
          <p
            class="mb-3 text-center text-xs font-semibold uppercase tracking-wide opacity-70"
          >
            Candidats à la présidentielle 2027
          </p>
          <ul
            class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:grid-cols-3 lg:grid-cols-4"
          >
            <li v-for="candidat in candidatsFooter" :key="candidat.id">
              <NuxtLink
                :to="cheminCandidat(candidat.id)"
                class="opacity-80 hover:opacity-100 hover:underline"
              >
                {{ candidat.nom }}
                <span class="opacity-60">({{ candidat.parti }})</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <p
          class="mb-2 text-base tracking-widest uppercase font-extrabold opacity-90"
        >
          <span class="fr-cocarde" />
        </p>
        <p class="opacity-80">
          <NuxtLink to="/a-propos">À propos</NuxtLink>
          · La politique c'est chiant mais c'est important ·
          <NuxtLink to="https://github.com/maximerat/politchique"
            >GitHub</NuxtLink
          >
        </p>
      </footer>
    </div>
  </UApp>
</template>
