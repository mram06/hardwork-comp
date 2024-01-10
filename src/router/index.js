import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VacanciesView from '@/views/VacanciesView.vue'

import { isAuthenticated, isRouteAvailable } from './helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requireAuth: false
      },
      component: HomeView
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      meta: {
        requireAuth: false
      },
      component: VacanciesView
    },
    {
      path: '/company',
      name: 'company',
      meta: {
        requireAuth: false
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      meta: {
        requireAuth: false
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/media',
      name: 'media',
      meta: {
        requireAuth: false
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        requireAuth: false
      },
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        requireAuth: false
      },
      component: () => import('@/views/LoginPage.vue'),
      props: { method: 'signup' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      meta: {
        requireAuth: false
      },
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  if (to.meta?.requireAuth) {
    if (!isAuthenticated())
      return {
        name: 'login'
      }
    if (!isRouteAvailable(to)) {
      return {
        name: 'not-found'
      }
    }
  }
})

export default router
