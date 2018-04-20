import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
// import VueFeatherIcon from 'vue-feather-icon'

import App from './App'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})
Vue.use(VueResource)
// Vue.use(VueFeatherIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
