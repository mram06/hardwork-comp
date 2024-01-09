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
            <div class="login__method"></div>
            <div class="login__input">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>

            <label>
              <input type="checkbox" />
              Запам'ятай мене
            </label>
            <button class="login__button">Увійти</button>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin: 20px 0 0 0;
}
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
  &__button {
    margin: 40px 0 0 0;
    width: 100%;
  }
}
</style>
