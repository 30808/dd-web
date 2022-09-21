import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/classify',
        component: () => import('@/views/classify')
      },
      {
        path: '/car',
        component: () => import('@/views/car')
      },
      {
        path: '/mine',
        component: () => import('@/views/mine')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
