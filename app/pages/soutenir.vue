<script setup lang="ts">
const appConfig = useAppConfig();

const lienDon = computed(() => appConfig.soutien?.url ?? "");

useSeoMeta({
  title: "Soutenir le site | Présidentielle française 2027",
  description:
    "Le site est indépendant, sans publicité et sans financement politique. Les dons servent à payer l'hébergement, le nom de domaine et la mise à jour des fiches.",
});
</script>

<template>
  <UContainer class="py-10 space-y-6">
    <UCard>
      <template #header>
        <div class="space-y-3">
          <UBadge color="primary" variant="soft">Soutien</UBadge>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Soutenir le site
          </h1>
          <p class="text-sm text-muted">
            Ce site est un projet personnel, gratuit et sans publicité. Un don,
            même de quelques euros, aide simplement à le garder en ligne et à
            jour.
          </p>
        </div>
      </template>

      <UAlert
        class="fr-alerte"
        color="info"
        variant="soft"
        icon="i-lucide-shield-check"
        title="Aucune contrepartie"
        description="Un don ne donne aucun droit de regard sur le contenu : ni sur les fiches des candidats, ni sur le quiz, ni sur l'ordre d'affichage. Les dons ne sont pas des dons politiques et ne financent aucun parti ni aucune campagne."
      />

      <div
        class="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
      >
        <UButton
          :to="lienDon"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-heart"
          size="lg"
          class="bg-red-500 text-white hover:bg-red-600"
        >
          Faire un don via PayPal
        </UButton>
        <p class="text-xs text-muted">
          Redirection vers PayPal.Me. Aucun montant n'est imposé, aucune
          inscription n'est demandée sur ce site.
        </p>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">À quoi servent les dons</h2>
      </template>
      <ul class="space-y-3 text-sm">
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-server"
            class="mt-0.5 size-5 shrink-0 text-red-600"
          />
          <span>
            <strong>L'hébergement et le serveur.</strong> Le site tourne sur une
            infrastructure payée chaque mois, quel que soit le trafic.
          </span>
        </li>
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-globe"
            class="mt-0.5 size-5 shrink-0 text-red-600"
          />
          <span>
            <strong>Le nom de domaine</strong> et les frais techniques annexes
            (certificats, outils de suivi des erreurs).
          </span>
        </li>
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-refresh-cw"
            class="mt-0.5 size-5 shrink-0 text-red-600"
          />
          <span>
            <strong>Le temps de mise à jour.</strong> Une campagne bouge en
            permanence : déclarations, retraits, programmes, procédures
            judiciaires. Chaque fiche est relue et re-sourcée à la main.
          </span>
        </li>
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-plus-circle"
            class="mt-0.5 size-5 shrink-0 text-red-600"
          />
          <span>
            <strong>Les nouveautés.</strong> Comparateur de programmes,
            nouvelles thématiques dans le quiz, meilleures sources.
          </span>
        </li>
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-badge-euro"
            class="mt-0.5 size-5 shrink-0 text-red-600"
          />
          <span>
            <strong>Transparence totale :</strong> L’argent sera déclaré pour
            éponger la dette de la France, et servira à payer quelques canons à
            la cantine de l'assemblee nationale.
          </span>
        </li>
      </ul>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Indépendant, sans publicité</h2>
      </template>
      <div class="space-y-3 text-sm">
        <p>
          <strong>Aucune publicité.</strong> Pas de bannière, pas de contenu
          sponsorisé, pas de partenariat commercial déguisé en article.
        </p>
        <p>
          <strong>Aucun financement politique.</strong> Le site n'est lié à
          aucun parti, aucun candidat, aucun mouvement, aucun média.
        </p>
        <p>
          <strong>Aucune revente de données.</strong> Le quiz est calculé
          directement dans votre navigateur et vos réponses ne sont pas
          conservées. Voir la page
          <NuxtLink to="/a-propos" class="underline underline-offset-2"
            >À propos</NuxtLink
          >.
        </p>
        <p>
          <strong>Code ouvert.</strong> Les sources sont publiques sur
          <NuxtLink
            to="https://github.com/maximerat/politchique"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
            >GitHub</NuxtLink
          >, et les corrections sont bienvenues.
        </p>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Soutenir sans donner d'argent</h2>
      </template>
      <div class="space-y-3 text-sm">
        <p>
          Un don n'est pas la seule façon d'aider — et ce n'est pas la plus
          importante :
        </p>
        <ul class="list-disc space-y-1 pl-5">
          <li>
            partager le site autour de vous, c'est ce qui lui donne le plus de
            valeur ;
          </li>
          <li>
            signaler une erreur, une source manquante ou une fiche dépassée via
            le bouton de retour en bas à droite ;
          </li>
          <li>
            proposer une correction directement sur
            <NuxtLink
              to="https://github.com/maximerat/politchique"
              target="_blank"
              rel="noopener noreferrer"
              class="underline underline-offset-2"
              >GitHub</NuxtLink
            >.
          </li>
        </ul>
      </div>
    </UCard>
  </UContainer>
</template>
