<template>
  <div class="row">
    <router-link to="/">Головна</router-link>
    <router-link :to="{ name: 'vacancies' }">Вакансії</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.row {
  padding: 0 123px;
  display: flex;
  gap: 4px;
}
a {
  line-height: 120%;
  &::before {
    content: '🢒';
  }
  &:first-child::before {
    content: '';
  }
  &:last-child {
    opacity: 0.5;
  }
}
</style>
