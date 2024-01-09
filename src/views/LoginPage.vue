<template>
  <main-master-page>
    <div class="login">
      <div class="container">
        <div class="login__body">
          <div class="login__container">
            <div class="login__socials">
              <div><img src="@/assets/img/icons/facebook_black.svg" /></div>
              <div><img src="@/assets/img/icons/linkedin_black.svg" /></div>
              <div><img src="@/assets/img/icons/instagram_black.svg" /></div>
            </div>
            <div class="login__method">
              <router-link class="top" :to="{ name: 'login' }">Увійти</router-link>
              <router-link :to="{ name: 'signup' }">Реєстрація</router-link>
            </div>
            <div class="login__input">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>

            <label class="login__remember">
              <input type="checkbox" />
              Запам'ятай мене
            </label>
            <button class="login__button">{{ actionTitle }}</button>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  method: {
    type: String,
    default: 'login'
  }
})
const route = useRoute()

const loginMethod = computed(() => (props.method === 'signup' ? 'signup' : 'login'))

const actionTitle = computed(() => (loginMethod.value === 'login' ? 'Увійти' : 'Зареєструватися'))
</script>

<style lang="scss" scoped>
.login {
  &__body {
    background: url('@/assets/img/background/background.png') top right no-repeat;
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
    input {
      width: 100%;
      background: white;
    }
    :first-child {
      margin: 40px 0 0 0;
    }
    :last-child {
      margin: 20px 0 0 0;
    }
  }
  &__remember {
    display: block;
    margin: 20px 0 0 0;
  }
  &__button {
    margin: 40px 0 0 0;
    width: 100%;
  }
}
</style>
