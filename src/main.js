import Vue from 'vue'
import App from './App.vue'
// import BaseLayout from '@/layout/base-layout'
import VueRouter from 'vue-router'
import Routes from './router/router'

Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes // сокращённая запись для `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
