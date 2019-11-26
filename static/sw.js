importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuro-sh",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2587a19a3bac7b289e52.js",
    "revision": "8b4e5061429ad25f0ba20a2ad040ddbc"
  },
  {
    "url": "/_nuxt/layouts_default.cab274a9851c78280e0c.js",
    "revision": "20e49d033fd968f76996e534d9916f6c"
  },
  {
    "url": "/_nuxt/manifest.e3766855f8e2e91b5566.js",
    "revision": "11d5c01ef51e8f73be60b0381a2fe801"
  },
  {
    "url": "/_nuxt/pages__error.dfbdee7c08c1ae544f43.js",
    "revision": "042dadcf5fc7c7752c4120f4307e56f4"
  },
  {
    "url": "/_nuxt/pages_contact.ceea447cac207dc7293c.js",
    "revision": "aaf3827ba1e4f3b93d76de230d13760b"
  },
  {
    "url": "/_nuxt/pages_index.26df033a7b86e7a6d0f2.js",
    "revision": "243f32298d34069abb134c34e65d252f"
  },
  {
    "url": "/_nuxt/pages_portfolio.99a931279cd75c1be707.js",
    "revision": "664f1bafc1f75da09e4226af35b209a2"
  },
  {
    "url": "/_nuxt/vendor.3a4fb49b22b3fe7679e2.js",
    "revision": "7644fd426b43ed007a50a3e6c5b2a39c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

