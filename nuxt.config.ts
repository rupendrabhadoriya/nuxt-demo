// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";
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
  serverHandlers: [
    { route: '/myapi', handler: '~/server/api/server.js' }
  ],
})

