// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
    devServer: {
        port: 4000
    },
    tailwindcss: {
      exposeConfig: true,
    }
})