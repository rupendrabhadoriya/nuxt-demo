// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Demo',
      meta: [{
        name: 'description', content: 'this is awesome neuxt demo'
      }],
      link: []
    },
  },
})

module.exports = {
  serverMiddleware: [
    { path: '/api', handler: '~/server.js' }
  ]
}
