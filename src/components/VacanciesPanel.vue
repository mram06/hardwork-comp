<template>
  <div class="item-container">
    <vacancies-item
      v-for="vacancy in filteredVacanciesList"
      :key="vacancy.id"
      :item-obj="{id, ...vacancy}"
    />
  </div>
</template>

<script setup>
import VacanciesItem from './VacanciesItem.vue'
// import vacanciesList from '@/constants/vacancies'

import { computed } from 'vue'
import { useVacanciesStore } from '@/stores/vacancies'
const vacanciesStore = useVacanciesStore()
const vacanciesList = computed(() => vacanciesStore.getItemsList ?? [])

import { isCorrespondToFilter } from '@/stores/helpers/filter'
const filteredVacanciesList = computed(() =>
  vacanciesList.value.filter((item) => isCorrespondToFilter(item, vacanciesStore.filterObj))
)
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 888px;
}
</style>
