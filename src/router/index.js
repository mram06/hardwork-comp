import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VacanciesView from '@/views/VacanciesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: VacanciesView
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/LoginPage.vue'),
      props: { method: 'signup' }
    }
  ]
})

export default router
