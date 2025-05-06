// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    debug: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage:false,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en',
      },
      {
        code: 'tr',
        name: 'Türkçe',
        iso: 'tr',
      }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
})