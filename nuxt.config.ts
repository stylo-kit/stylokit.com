import axios from 'axios';

// async function getTemplateRoutes() {
//   const { data } = await axios.get('https://admin.stylokit.com/api/templates')
//   return data.data.map((template: any) => `/templates/${template.slug}`)
// }

const getTemplateRoutes = async () => {
  const response = await axios.get(
    'https://admin.stylokit.com/api/templates'
  );
  // return the array of routes
  return response?.data?.data.map((template: any) => `/templates/${template.slug}`);
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getTemplateRoutes();
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
  routeRules: {
    // '/**': { isr: 60 },
    "/templates/**": { prerender: true },
    // "/blog/**": { isr: false }
  },
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