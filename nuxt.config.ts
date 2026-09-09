// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://www.candidatspresidentielles2027.fr",
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/ui-pro',
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  // Les photos et les images statiques ne changent jamais sous un même nom de
  // fichier : le navigateur peut les garder en cache un an. Pour remplacer une
  // photo, publier un nouveau nom de fichier (ou ajouter ?v=2 à l'URL).
  routeRules: {
    '/photos/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/coq.png': {
      headers: { 'cache-control': 'public, max-age=2592000' },
    },
    '/favicon.ico': {
      headers: { 'cache-control': 'public, max-age=2592000' },
    },
  },
  css: ['~/assets/css/main.css'],
  uiPro: {
    license: "18664695-FBE3-4265-B599-794BC7843E8D",
  },
  colorMode: {
    preference: 'light',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
