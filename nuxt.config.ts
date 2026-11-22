// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        "line-md:linkedin",
        "line-md:github",
        "line-md:bluesky",
        "line-md:instagram",
        "line-md:youtube",
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Trey Botard",
      meta: [{ name: "theme-color", content: "#09090b" }],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,SOFT,WONK,wght@9..144,50,1,400;9..144,50,1,500;9..144,50,1,600&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
});
