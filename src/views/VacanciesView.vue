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
        <div class="filter-button">
          <button @click="openFilter">
            <font-awesome-icon
              :icon="['fas', 'caret-down']"
              flip="vertical"
              style="color: #ffffff"
            />
            Фільтри
          </button>
        </div>
        <div class="main-row">
          <filter-panel @close-filter="openFilter" :is-open="isOpen" />
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

import { onMounted } from 'vue'
import { useVacanciesStore } from '@/stores/vacancies'
import { ref } from 'vue'
const vacanciesStore = useVacanciesStore()

const isOpen = ref(false)
function openFilter() {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  vacanciesStore.loadItemsList()
})
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
    background: url('@/assets/img/background/background_blur.jpg') 0 0 / auto 100% no-repeat;
    height: 200px;
    margin: 20px 0 0 0;
    padding: 80px 10px;
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
.filter-button {
  display: none;
  justify-content: end;
  padding: 20px;
}

@media only screen and (max-width: 980px) {
  .main-row {
    padding: 20px 10px;
  }
}
@media only screen and (max-width: 760px) {
  .main-row {
    padding: 0 10px 20px 10px;
  }
  .filter-button {
    display: flex;
  }
  aside {
    position: fixed;
    overflow-y: auto;
    z-index: 1;
    height: 100vh;
    left: 0;
    transition: top 0.5s;
    top: 100vh;
    background: #e1e1e1;

    border-radius: 25px 25px 0 0;
    width: 100%;
    padding: 20px 10px 250px 10px;
  }
  aside.open {
    transition: top 0.5s;
    top: 110px;
  }
}
</style>
