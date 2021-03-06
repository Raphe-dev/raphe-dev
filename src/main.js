import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
