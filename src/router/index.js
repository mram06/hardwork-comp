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
      path: '/vacancies/:id',
      name: 'vacancy',
      meta: {
        requireAuth: false
      },
      component: () => import('@/views/VacancyPage.vue')
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
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/UserProfile.vue'),
      children: [
        {
          path: 'manage',
          name: 'profileManage',
          meta: {
            requireAuth: true
          },
          component: () => import('@/components/profile/ProfileManage.vue')
        },
        {
          path: 'saved',
          name: 'profileSaved',
          meta: {
            requireAuth: true
          },
          component: () => import('@/components/profile/ProfileSaved.vue')
        },
        {
          path: 'create-resume',
          name: 'createResume',
          meta: {
            requireAuth: true
          },
          component: () => import('@/components/profile/CreateResume.vue')
        },
        {
          path: 'chat',
          name: 'chat',
          meta: {
            requireAuth: true
          },
          component: () => import('@/components/profile/ProfileChat.vue')
        }
      ]
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
        name: 'login',
        query: { redirect: to.fullPath }
      }
    if (!isRouteAvailable(to)) {
      return {
        name: 'notFound'
      }
    }
  }
})

export default router
