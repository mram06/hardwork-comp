<template>
  <main-master-page>
    <div class="login">
      <div class="container">
        <div class="login__body">
          <div class="login__container">
            <div class="login__socials">
              <div>
                <font-awesome-icon :icon="['fab', 'facebook']" size="2xl" style="color: #000000" />
                <!-- <img src="@/assets/img/icons/facebook_black.svg" /> -->
              </div>
              <div>
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" style="color: #000000" />
                <!-- <img src="@/assets/img/icons/linkedin_black.svg" /> -->
              </div>
              <div>
                <font-awesome-icon
                  :icon="['fab', 'square-instagram']"
                  size="2xl"
                  style="color: #000000"
                />
                <!-- <img src="@/assets/img/icons/instagram_black.svg" /> -->
              </div>
              <div @click="loginWithGoogle">
                <font-awesome-icon :icon="['fab', 'google']" size="2xl" style="color: #000000" />
              </div>
            </div>
            <div class="login__method">
              <router-link :to="{ name: 'login' }">Увійти</router-link>
              <router-link :to="{ name: 'signup' }">Реєстрація</router-link>
            </div>
            <div class="login__input">
              <input v-model="email" type="email" placeholder="Email" />
              <input v-model="password" type="password" placeholder="Password" />
            </div>

            <label class="login__remember">
              <input type="checkbox" />
              Запам'ятай мене
            </label>
            <button @click="onAuth(email, password)" class="login__button" :disabled="!isDataValid">
              {{ actionTitle }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { ref, computed } from 'vue'
const props = defineProps({
  method: {
    type: String,
    default: 'login'
  }
})

const loginMethod = computed(() => (props.method === 'signup' ? 'signup' : 'login'))
const actionTitle = computed(() => (loginMethod.value === 'login' ? 'Увійти' : 'Зареєструватися'))

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const email = ref(null)
const password = ref(null)

const isDataValid = computed(() => {
  return email.value && password.value?.length >= 8
})

const { signUpWithWithEmailAndPassword, signInWithWithEmailAndPassword, loginWithGoogleAccount } =
  authStore

function registerWithEmailAndPassword(email, password) {
  signUpWithWithEmailAndPassword(email, password).then(() => {
    router.push({
      name: 'home'
    })
  })
}

function loginWithEmailAndPassword(email, password) {
  signInWithWithEmailAndPassword(email, password).then(() => {
    router.push({
      name: 'home'
    })
  })
}

function loginWithGoogle() {
  loginWithGoogleAccount().then(() => {
    router.push({
      name: 'home'
    })
  })
}

function onAuth(email, password) {
  if (route.name === 'login') loginWithEmailAndPassword(email, password)
  else if (route.name === 'signup') registerWithEmailAndPassword(email, password)
}
</script>

<style lang="scss" scoped>
.login {
  &__body {
    background: url('@/assets/img/background/background.svg') top right no-repeat;
    height: 809px;
    padding: 227px 0 0 192px;
  }

  &__container {
    max-width: 338px;
  }

  &__socials {
    display: flex;
    justify-content: center;
    gap: 20px;
    & div {
      cursor: pointer;
    }
  }

  &__method {
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
    .router-link-exact-active {
      background: #000;
      color: #fff;
    }
    a {
      cursor: pointer;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 120%;

      height: 40px;
      padding: 10px 24px;

      border-radius: 20px;
    }
  }

  &__input {
    margin: 40px 0 0 0;
    input {
      width: 100%;
      background: white;
    }
    :first-child {
    }
    :last-child {
      margin: 20px 0 0 0;
    }
  }
  &__remember {
    margin: 20px 0 0 0;
  }
  &__button {
    margin: 40px 0 0 0;
    width: 100%;
  }
}
@media only screen and (max-width: 980px) {
}
@media only screen and (max-width: 760px) {
  .login {
    &__body {
      background: url('@/assets/img/background/background.svg') 0 0/100% auto no-repeat;
      height: 500px;
      padding: 50px 20px 0 20px;
    }
    &__container {
      margin: 0 auto;
    }
  }
}
</style>
