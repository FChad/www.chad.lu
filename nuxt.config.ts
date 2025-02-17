// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/color-mode', '@nuxtjs/i18n', '@nuxtjs/robots', '@nuxtjs/sitemap'],
  site: { 
    url: 'https://www.chad.lu', 
    name: 'Feierstein Chad - Portfolio' 
  }, 
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
      { code: 'de', language: 'de-DE', file: 'de.json' },
      { code: 'lu', language: 'lb-LU', file: 'lu.json' }
    ],
    defaultLocale: 'lu',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },
  runtimeConfig: {
    resend: {
      apiKey: process.env.RESEND_API_KEY,
      toEmail: process.env.RESEND_TO_EMAIL
    },
    github: {
      token: process.env.GITHUB_TOKEN
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})