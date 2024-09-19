// import axios from 'axios';

// async function getTemplateRoutes() {
//   const { data } = await axios.get('https://admin.stylokit.com/api/templates')
//   return data.data.map((template: any) => `/templates/${template.slug}`)
// }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     if (nitroConfig.dev) return

  //     let slugs = await getTemplateRoutes();
  //     nitroConfig.prerender.routes.push(...slugs);
  //     return
  //   },
  // },
  // routeRules: {
  //   '/**': { isr: 60 },
  //   "/templates/**": { isr: true },
  //   "/blog/**": { isr: false }
  // },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-headlessui',
    'nuxt-gtag',
    "vue3-carousel-nuxt",
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      InstrumentSans: true
    }
  },
  headlessui: {
    prefix: 'Headless'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://admin.stylokit.com/api'
    }
  },
  gtag: {
    id: 'G-KG5CCDHTBM'
  },
  carousel: {
    prefix: 'Slideshow'
  },
  compatibilityDate: '2024-09-13'
})