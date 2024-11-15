import axios from "axios";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-headlessui",
    "nuxt-gtag",
    "vue3-carousel-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ],
  googleFonts: {
    families: {
      Roboto: true,
      InstrumentSans: true,
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page-fade", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://admin.stylokit.com/api",
    },
  },
  gtag: {
    id: "G-KG5CCDHTBM",
  },
  carousel: {
    prefix: "Slideshow",
  },
  compatibilityDate: "2024-09-13",
});