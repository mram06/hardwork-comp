<template>
  <div class="container">
    <h2>{{ $t('pages.error') }}</h2>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="6x" class="icon" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
