<template>
  <div class="breadcrumbs-row">
    <router-link to="/">Головна</router-link>
    <router-link :to="{ name: 'vacancies' }">Вакансії</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.breadcrumbs-row {
  padding: 0 123px;
  display: flex;
  gap: 4px;
}
a {
  line-height: 120%;
  &::before {
    content: '🢒 ';
  }
  &:first-child::before {
    content: '';
  }
  &:last-child {
    color: #808080;
  }
}
@media only screen and (max-width: 980px) {
  .breadcrumbs-row {
    padding: 0 10px;
  }
}
</style>
