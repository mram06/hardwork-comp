<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__logo">
              <router-link to="/">HARD<span>WORK</span></router-link>
            </div>
            <nav class="header__menu">
              <ul>
                <router-link :to="{ name: 'vacancies' }"><li>Вакансії</li></router-link>
                <router-link :to="{ name: 'company' }"><li>Компанія</li></router-link>
                <router-link :to="{ name: 'analytics' }"><li>Аналітика</li></router-link>
                <router-link :to="{ name: 'media' }"><li>Медіа</li></router-link>
              </ul>
            </nav>
            <div class="header__tools">
              <div class="header__tools-search">
                <img src="@/assets/img/icons/search.svg" />
              </div>
              <div class="header__tools-login">
                <template v-if="user">
                  <span>{{ displayName ?? user.email }}</span>
                  <img v-if="user.photoURL" :src="user.photoURL" />
                  <img v-else src="@/assets/img/icons/userlogo.svg" />

                  <button @click="onLogout">Вийти</button>
                </template>
                <template v-else>
                  <router-link :to="{ name: 'login' }">Увійти</router-link>
                  <router-link :to="{ name: 'signup' }"><button>Реєстрація</button></router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="content">
      <loading-page v-if="isLoading" />
      <error-page v-else-if="hasError" />
      <template v-if="!hasError">
        <slot></slot>
      </template>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__body">
          <div class="footer__row">
            <div class="footer__logo">
              <router-link to="/">HARD<span>WORK</span></router-link>
            </div>
            <div class="footer__info">
              <ul>
                <router-link to="#"><li>Про сервіс</li></router-link>
                <router-link to="#"><li>FAQ</li></router-link>
              </ul>
              <ul>
                <router-link to="#"><li>Умови користування</li></router-link>
                <router-link to="#"><li>Політика приватності</li></router-link>
              </ul>
            </div>
            <div class="footer__socials">
              <router-link to="#"><img src="@/assets/img/icons/facebook.svg" /></router-link>
              <router-link to="#"><img src="@/assets/img/icons/linkedin.svg" /></router-link>
              <router-link to="#"><img src="@/assets/img/icons/instagram.svg" /></router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import LoadingPage from '@/components/LoadingPage.vue'
import ErrorPage from '@/components/ErrorPage.vue'

import { computed } from 'vue'

import { useGeneralStore } from '@/stores/general'
import { storeToRefs } from 'pinia'
const generalStore = useGeneralStore()

const { isLoading, hasError } = storeToRefs(generalStore)

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

import { useRouter } from 'vue-router'
const router = useRouter()

const displayName = computed(() => {
  if (user.value.displayName) {
    const name = user.value.displayName.split(' ')
    if (name.length === 1) return name[0]
    else return `${name[0]} ${name[1][0]}.`
  }
})

function onLogout() {
  authStore.logOut()
  router.push({
    name: 'login'
  })
}
</script>

<style lang="scss" scoped>
.header {
  &__body {
    padding: 12px 123px;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 120%;
    vertical-align: middle;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    span {
      font-style: italic;
    }
  }

  &__menu {
    ul {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  &__tools {
    display: flex;
    align-items: center;
    gap: 24px;
    &-search {
      cursor: pointer;
    }
    &-login {
      display: flex;
      gap: 24px;
      align-items: center;
      img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
    }
  }
}

.footer {
  &__body {
    background: #040404;
    vertical-align: middle;

    padding: 32px 123px;
    a {
      color: white;
    }
    li {
      font-size: 14px;
      line-height: 120%;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-family: 'Poppins', sans-serif;
    font-size: 37.5px;
    line-height: 120%;
    span {
      font-style: italic;
    }
  }

  &__info {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 392px;
    a:first-child li {
      margin: 0 0 8px 0;
    }
  }

  &__socials {
    display: flex;
    gap: 20px;
  }
}
</style>
