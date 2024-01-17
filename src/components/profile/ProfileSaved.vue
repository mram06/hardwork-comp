<template>
  <div class="saved">
    <div class="saved__container">
      <vacancies-item
        v-if="vacanciesList"
        v-for="item in vacanciesList"
        :key="item.id"
        :item-obj="item"
      />
      <h2 v-else class="saved__error">{{ $t('pages.profile.noSaved') }}</h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VacanciesItem from '../VacanciesItem.vue'

import { useSavedStore } from '@/stores/saved'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
const savedStore = useSavedStore()
const vacanciesList = computed(() => savedStore.getCurrentItem?.savedVacancies)

const authStore = useAuthStore()
onMounted(() => {
  savedStore.loadItemById(authStore.getUser.uid)
})
</script>

<style lang="scss" scoped>
.saved {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__error {
  }
}
</style>
