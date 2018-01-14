module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  head: {
    title: 'Веб-студия ЭльБиЭй',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'lba project' },
      { name: 'theme-color', content: '#526488' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'manifest', type: 'application/json', href: '/manifest.json' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  manifest: {
    name: 'ProposalMate',
    short_name: 'ProposalMate',
    lang: 'ru',
    description: 'Create beautiful business proposals',
    theme_color: '#188269',
    background_color: '#000'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
