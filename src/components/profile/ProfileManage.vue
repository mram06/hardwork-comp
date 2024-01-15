<template>
  <div class="manage">
    <div class="manage__container">
      <div class="manage__row">
        <div class="manage__title">Ім'я</div>
        <div class="manage__input">
          <input v-model="userInfo.name" type="text" placeholder="Ім'я" />
        </div>
      </div>

      <div class="manage__row">
        <div class="manage__title">Прізвище</div>
        <div class="manage__input">
          <input v-model="userInfo.lastname" type="text" placeholder="Прізвище" />
        </div>
      </div>

      <div class="manage__row">
        <div class="manage__title">Ел. пошта</div>
        <div class="manage__input">
          <input v-model="userInfo.email" type="text" placeholder="Email" />
        </div>
      </div>

      <div class="manage__row">
        <div class="manage__title">Телефон</div>
        <div class="manage__input">
          <input v-model="userInfo.phone" type="text" placeholder="+380(0" />
        </div>
      </div>

      <div class="manage__row">
        <div class="manage__title textarea">Супровідний лист</div>
        <div class="manage__input">
          <textarea
            v-model="userInfo.about"
            cols="30"
            rows="10"
            placeholder="Напишіть супровідний лист..."
          ></textarea>
        </div>
      </div>
      <div class="action-button"><button>Зберегти</button></div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

const authStore = useAuthStore()
const user = authStore.getUser
const userInfo = computed(() => {
  return {
    name: user.displayName?.split(' ')[0],
    lastname: user.displayName?.split(' ')[1],
    email: user.email,
    phone: null,
    about: null
  }
})
</script>

<style lang="scss" scoped>
.manage {
  &__container {
    max-width: 540px;
  }
  &__title {
    font-weight: 700;
  }
  &__input {
    width: 338px;
    input {
      width: 100%;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:first-child) {
      margin: 20px 0 0 0;
    }
    &:last-child {
      .textarea {
        padding: 10px 0 0 0;
        align-self: flex-start;
      }
    }
  }
  textarea {
    height: 150px;
    width: 100%;
  }
  .action-button {
    margin: 40px 0 0 0;
    display: flex;
    justify-content: end;
    button {
      width: 338px;
    }
  }
}
@media only screen and (max-width: 480px) {
  .manage {
    &__row {
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__input {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .action-button {
      margin: 40px 0 0 0;
      display: block;
      button {
        width: 100%;
      }
    }
  }
}
</style>
