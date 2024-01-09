<template>
  <main-master-page>
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__body">
          <bread-crumbs />
        </div>
      </div>
    </div>

    <div class="search">
      <div class="container">
        <div class="search__body">
          <div class="search__input">
            <input type="text" placeholder="Ким хочете працювати?" />
            <button>Пошук</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="main-row">
          <filter-panel />
          <vacancies-panel />
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import FilterPanel from '@/components/FilterPanel.vue'
import VacanciesPanel from '@/components/VacanciesPanel.vue'
</script>

<style lang="scss" scoped>
.main-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 123px;
}
.search {
  &__body {
    background: url('@/assets/img/background/background_blur.png') 0 0 / auto 100% no-repeat;
    height: 200px;
    margin: 20px 0 0 0;
    padding: 80px 0;
  }

  &__input {
    background-color: white;
    margin: 0 auto;
    max-width: 500px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #000;
    border-right: none;

    display: flex;
    justify-content: space-between;
    input {
      width: 100%;
      border: none;
    }
  }
}
.container {
}
</style>
