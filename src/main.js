import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './api'
import './assets/css/reset.css'
import './utils/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ProductList from './components/ProductList'
import TaGs from './components/TaGs'
import NavTab from './components/NavTab'
import 'swiper/dist/css/swiper.css'
// import classify from '@/views/classify'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.component('ProductList', ProductList)
Vue.component('TaGs', TaGs)
Vue.component('NavTab', NavTab)
// Vue.component('classify', classify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
