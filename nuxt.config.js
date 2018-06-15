module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    http2: {
      push: true
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#eff6ff',
    failedColor: '#f44336',
    height: '3px'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** NuxtJS PWA modules
  */
  meta: {
    favicon: true,
    name: 'NURO | Developer',
    description: 'NURO | Developer',
    lang: 'en',
    theme_color: '#2196F3'
  },
  manifest: {
    name: 'NURO',
    short_name: 'NURO',
    description: 'NURO | Developer',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#2196F3',
    theme_color: '#2196F3'
  },
  icon: {
    sizes: [ 16, 128, 144, 152, 192, 256, 512 ]
  },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuetify.js',
    '~/plugins/feather-icons.js'
    
  ],
  css: [
    '~/assets/style/app.styl'
  ]
}
