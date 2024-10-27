// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@vueuse/motion/nuxt", "@nuxt/ui"],
  css: ["~/assets/global.css"],

  appConfig: {
    title: "Ngocxhoi",
    description: "My Profile Nuxt 3",
  },
});
