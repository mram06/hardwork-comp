<template>
  <main-master-page>
    <div class="hero">
      <div class="container">
        <div class="hero__body">
          <h1 class="hero__title">СЕРВІС ДЛЯ ПОШУКУ РОБОТИ В IT</h1>
          <button @click="toVacancies">Всі вакансії</button>
        </div>
      </div>
    </div>
    <div class="subscribe">
      <div class="container">
        <div class="subscribe__body">
          <h2 class="subscribe__title">Підписатися на розсилку</h2>
          <div class="subscribe__input">
            <input type="text" placeholder="Email" />
            <button>Підписатися</button>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
function toVacancies() {
  router.push({ name: 'vacancies' })
}
</script>

<style lang="scss" scoped>
.hero {
  button {
    margin: 40px 0 0 0;
  }
  &__body {
    height: 809px;
    background: url('@/assets/img/background/background.png') top right no-repeat;
    padding: 250px 0 0 132px;
  }

  &__title {
  }
}

.subscribe {
  &__body {
    text-align: center;
    background: #e1e1e1;
    padding: 48px 0;
  }

  &__title {
  }

  &__input {
    margin: 0 auto;
    margin-top: 20px;
    max-width: 378px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #000;
    border-right: none;

    display: flex;
    justify-content: space-between;
    input {
      width: 100%;
      border: none;
    }
  }
}
@media only screen and (max-width: 980px) {
  .hero {
    &__body {
      padding: 250px 0 0 20px;
    }
  }
}
@media only screen and (max-width: 760px) {
  .hero {
    &__body {
      background: url('@/assets/img/background/background.png') 0 0/100% auto no-repeat;
      height: auto;
      padding: 250px 0 0 5px;
    }
  }
  .subscribe {
    &__body {
      text-align: center;
      background: #e1e1e1;
      padding: 48px 0;
    }
  }
}
</style>
