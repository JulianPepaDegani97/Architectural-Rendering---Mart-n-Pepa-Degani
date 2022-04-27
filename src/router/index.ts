import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import( '../views/ProjectView.vue')
  }
  ,
  {
    path: '/sanpedro',
    name: 'sanpedro',
    component: () => import( '../views/SanPedroView.vue')
  },
  {
    path: '/cbc',
    name: 'CBC',
    component: () => import( '../views/CBCView.vue')
  }
  ,
  {
    path: '/vivienda-unifamiliar',
    name: 'vivienda-unifamiliar',
    component: () => import( '../views/UnifamiliarView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
