import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'HomeView',
    path: '/',
    component: () => import ('@/views/HomeView.vue')
  },
  {
    name: 'AboutView',
    path: '/about',
    component: () => import ('@/views/AboutView.vue')
  },
  {
    name: 'UserView',
    path: '/user/:id',
    component: () => import ('@/views/UserView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
