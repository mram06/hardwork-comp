<template>
  <div class="item-container">
    <vacancies-item v-for="vacancy in vacanciesList" :key="vacancy.id" :item-obj="vacancy" />
  </div>
</template>

<script setup>
import VacanciesItem from './VacanciesItem.vue'
import vacanciesList from '@/constants/vacancies'
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 888px;
}
</style>
