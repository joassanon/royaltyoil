const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    scope: '/',
    cacheStartUrl: true,
    dynamicStartUrl: true,
    reloadOnOnline: true
  },
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en-US'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
  images: {
    domains: []
  }
})
