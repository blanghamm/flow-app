// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  devServer: {
    port: 4000
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
