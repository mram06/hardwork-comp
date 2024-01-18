<template>
  <main-master-page>
    <div class="container">
      <h2>#404 {{ $t('pages.notFound') }}</h2>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
</script>

<style lang="scss" scoped>
h2 {
  padding: 0 123px;
  max-width: none;
}
</style>
