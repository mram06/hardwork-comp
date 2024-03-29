<template>
  <div class="wrapper">
    <header :class="['header', { open: isOpen }]">
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__logo">
              <router-link to="/">HARD<span>WORK</span></router-link>
            </div>
            <nav class="header__menu">
              <ul>
                <router-link :to="{ name: 'vacancies' }"
                  ><li>{{ $t('header.vacancies') }}</li></router-link
                >
                <router-link :to="{ name: 'company' }"
                  ><li>{{ $t('header.company') }}</li></router-link
                >
                <router-link :to="{ name: 'analytics' }"
                  ><li>{{ $t('header.analytics') }}</li></router-link
                >
                <router-link :to="{ name: 'media' }"
                  ><li>{{ $t('header.media') }}</li></router-link
                >
              </ul>
            </nav>
            <div class="header__tools">
              <div class="header__tools-locales">
                <div @click="setLocale('en')" :class="{ 'active-lang': locale == 'en' }">EN</div>
                <div @click="setLocale('ua')" :class="{ 'active-lang': locale == 'ua' }">UA</div>
              </div>
              <div class="header__tools-search">
                <img src="@/assets/img/icons/search.svg" />
              </div>
              <div class="header__tools-login">
                <template v-if="user">
                  <span>{{ displayName ?? user.email }}</span>
                  <img @click="toProfile" v-if="user.photoURL" :src="user.photoURL" />
                  <img @click="toProfile" v-else src="@/assets/img/icons/userlogo.svg" />

                  <button @click="onLogout">{{ $t('buttons.logout') }}</button>
                </template>
                <template v-else>
                  <router-link :to="{ name: 'login' }">{{ $t('buttons.login') }}</router-link>
                  <router-link :to="{ name: 'signup' }"
                    ><button>{{ $t('buttons.signIn') }}</button></router-link
                  >
                </template>
              </div>
            </div>
            <div @click="onOpen" class="header__burger-btn">
              <span></span><span></span><span> </span>
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
                <router-link to="#"
                  ><li>{{ $t('footer.about') }}</li></router-link
                >
                <router-link to="#"><li>FAQ</li></router-link>
              </ul>
              <ul>
                <router-link to="#"
                  ><li>{{ $t('footer.terms') }}</li></router-link
                >
                <router-link to="#"
                  ><li>{{ $t('footer.policy') }}</li></router-link
                >
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

import { computed, ref, onMounted } from 'vue'

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
function toProfile() {
  router.push({ name: 'profileManage' })
}

const isOpen = ref(false)
function onOpen() {
  isOpen.value = !isOpen.value
}

import { useLocales } from '@/modulesHelpers/i18n'
const { setLocale, locale } = useLocales()
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  &__body {
    background-color: white;
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
    gap: 10px;
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
      span {
        max-width: 120px;
        overflow: hidden;
      }
      img {
        cursor: pointer;
        width: 43px;
        height: 43px;
        border-radius: 50%;
      }
    }
    &-locales {
      font-weight: 500;
      div {
        cursor: pointer;
      }
      .active-lang {
        font-weight: 700;
      }
    }
  }
  &__burger-btn {
    display: none;
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 40px;
    span {
      position: absolute;
      left: 5px;

      transition:
        transform 0.5s,
        opacity 0.5s,
        background-color 0.5s;

      width: 30px;
      height: 3px;
      background-color: #040404;
      &:nth-child(1) {
        transform: translateY(6px);
      }
      &:nth-child(2) {
        transform: translateY(18px);
      }
      &:nth-child(3) {
        transform: translateY(30px);
      }
    }
  }
}

main {
  padding-top: 64px;
}

.header.open {
  .header__burger-btn span:nth-child(1) {
    transform: translateY(18px) rotate(-45deg);
  }
  .header__burger-btn span:nth-child(2) {
    opacity: 0;
  }
  .header__burger-btn span:nth-child(3) {
    transform: translateY(18px) rotate(45deg);
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
    gap: 10px;
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
@media only screen and (max-width: 980px) {
  .header {
    &__body {
      padding: 12px 20px;
    }
  }
  .footer {
    &__body {
      padding: 32px 20px;
    }
  }
}
@media only screen and (max-width: 760px) {
  .header {
    &__body {
      padding: 12px 20px;
    }
    &__burger-btn {
      display: block;
    }
    &__menu {
      position: absolute;
      width: 350px;
      height: 100vh;
      left: -350px;
      top: 0;
      background-color: violet;
      padding: 60px 20px 20px 20px;
      transition: transform 0.5s;
      ul {
        display: block;
        a {
          font-size: 22px;
          display: block;
          padding: 10px 0;
        }
      }
    }
    .open &__menu {
      transform: translateX(100%);
    }
  }
  .footer {
    &__body {
      padding: 32px 20px;
    }
    &__row {
      flex-wrap: wrap;
    }
  }
}
@media only screen and (max-width: 500px) {
  .header {
    &__tools {
      position: absolute;
      left: -350px;
      &-login {
        justify-content: space-between;
        gap: 12px;
      }
      &-locales {
        display: flex;
        gap: 15px;
        position: absolute;
        top: 200px;
        font-size: 18px;
      }
    }
    &.open &__tools {
      left: 20px;
      transition: left 0.5s;
    }
  }
}
</style>
