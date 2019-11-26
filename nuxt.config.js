module.exports = {
  mode: 'spa',
  generate: {
    dir: 'public'
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
    theme_color: '#ffffff'
  },
  manifest: {
    name: 'NURO',
    short_name: 'NURO',
    description: 'NURO | Developer',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#ffffff'
  },
  icon: {
    sizes: [16, 128, 144, 152, 192, 256, 512]
  },
  plugins: [
    '~/plugins/aos.js',
    '~/plugins/axios.js',
    '~/plugins/confetti.js',
    '~/plugins/featherIcons.js',
    '~/plugins/vuetify.js'
  ],
  css: [
    '~/assets/style/app.styl'
  ]
}
