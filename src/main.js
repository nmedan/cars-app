import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Cars from './pages/Cars.vue'
import AddCar from './pages/AddCar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: Cars, name: 'cars' },
  { path: '/add', component: AddCar },
  { path: '/edit/:id', component: AddCar, name:'edit-car' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')