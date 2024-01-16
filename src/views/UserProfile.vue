<template>
  <main-master-page>
    <div class="profile">
      <div class="container">
        <div class="profile__body">
          <div class="profile__tabs">
            <router-link :to="{ name: 'profileManage' }">{{
              $t('pages.profile.tabs.profile')
            }}</router-link>
            <router-link :to="{ name: 'profileSaved' }">{{
              $t('pages.profile.tabs.saved')
            }}</router-link>
            <router-link :to="{ name: 'createResume' }">{{
              $t('pages.profile.tabs.createResume')
            }}</router-link>
            <router-link :to="{ name: 'chat' }">{{ $t('pages.profile.tabs.chat') }}</router-link>
          </div>
          <div class="profile__user">
            <img v-if="user.photoURL" :src="user.photoURL" class="profile__user-photo" />
            <img v-else src="@/assets/img/icons/userlogo.svg" class="profile__user-photo" />
            <div class="profile__user-name">{{ displayName ?? user.email }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-view-container container">
      <router-view />
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

const displayName = computed(() => {
  if (user.value.displayName) {
    const name = user.value.displayName.split(' ')
    if (name.length === 1) return name[0]
    else return `${name[0]} ${name[1][0]}.`
  }
})
</script>

<style lang="scss" scoped>
.profile {
  &__body {
    background: url('@/assets/img/background/background_blur.jpg') no-repeat;
    height: 200px;
    padding: 40px 123px 13px 123px;
  }
  &__tabs {
    display: flex;
    a {
      text-align: center;
      cursor: pointer;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 120%;

      height: 40px;
      padding: 10px 24px;

      border-radius: 20px;
    }
    .router-link-exact-active {
      background: #000;
      color: #fff;
    }
  }
  &__user {
    margin: 43px 0 0 0;
    display: flex;
    gap: 20px;
    align-items: center;
    &-photo {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    &-name {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
.tab-view-container {
  padding: 40px 123px;
}
@media only screen and (max-width: 980px) {
  .profile {
    &__body {
      padding: 40px 20px 13px 20px;
    }
  }
}
@media only screen and (max-width: 760px) {
  .tab-view-container {
    padding: 40px 20px;
  }
}
@media only screen and (max-width: 480px) {
}
</style>
