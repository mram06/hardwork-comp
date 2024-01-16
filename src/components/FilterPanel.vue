<template>
  <aside :class="{ open: isOpen }">
    <h2>{{ $t('pages.filter.title') }}</h2>
    <div @click="oncloseFilter" class="close-button">
      <span></span>
      <span></span>
    </div>
    <div class="filter__category">
      <h3>{{ $t('pages.filter.profession') }}</h3>
      <div>
        <label v-for="job in professions" :key="job">
          <input v-model="filterObj.profession" type="checkbox" :value="job" />
          {{ job }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.experience.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.experience" type="checkbox" value="0" />
          {{ $t('pages.filter.experience.noExperience') }}
        </label>
        <label>
          <input v-model="filterObj.experience" type="checkbox" value="1" />
          {{ $t('pages.filter.experience.1year') }}
        </label>
        <label>
          <input v-model="filterObj.experience" type="checkbox" value="2" />
          {{ $t('pages.filter.experience.2year') }}
        </label>
        <label>
          <input v-model="filterObj.experience" type="checkbox" value="3" />
          {{ $t('pages.filter.experience.3year') }}
        </label>
        <label>
          <input v-model="filterObj.experience" type="checkbox" value="5" />
          {{ $t('pages.filter.experience.5year') }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.format.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.format" type="checkbox" value="remote" />
          {{ $t('pages.filter.format.remote') }}
        </label>
        <label>
          <input v-model="filterObj.format" type="checkbox" value="office" />
          {{ $t('pages.filter.format.office') }}
        </label>
        <label>
          <input v-model="filterObj.format" type="checkbox" value="hybrid" />
          {{ $t('pages.filter.format.hybrid') }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.type.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.type" type="checkbox" value="fulltime" />
          {{ $t('pages.filter.type.fulltime') }}
        </label>
        <label>
          <input v-model="filterObj.type" type="checkbox" value="parttime" />
          {{ $t('pages.filter.type.parttime') }}
        </label>
        <label>
          <input v-model="filterObj.type" type="checkbox" value="project" />
          {{ $t('pages.filter.type.project') }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.language.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.language" type="checkbox" value="english" />
          {{ $t('pages.filter.language.english') }}
        </label>
        <label>
          <input v-model="filterObj.language" type="checkbox" value="ukrainian" />
          {{ $t('pages.filter.language.ukrainian') }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.city.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.city" type="checkbox" value="Київ" />
          {{ $t('pages.filter.city.kyiv') }}
        </label>
        <label>
          <input v-model="filterObj.city" type="checkbox" value="Одеса" />
          {{ $t('pages.filter.city.odesa') }}
        </label>
        <label>
          <input v-model="filterObj.city" type="checkbox" value="Львів" />
          {{ $t('pages.filter.city.lviv') }}
        </label>
        <label>
          <input v-model="filterObj.city" type="checkbox" value="Житомир" />
          {{ $t('pages.filter.city.zhytomyr') }}
        </label>
        <label>
          <input v-model="filterObj.city" type="checkbox" value="Вінниця" />
          {{ $t('pages.filter.city.vinnytsia') }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>{{ $t('pages.filter.salary.title') }}</h3>
      <div>
        <label>
          <input v-model="filterObj.salary" type="checkbox" value="500" />
          {{ $t('pages.filter.salary.to500') }}
        </label>
        <label>
          <input v-model="filterObj.salary" type="checkbox" value="500to1000" />
          {{ $t('pages.filter.salary.500to1000') }}
        </label>
        <label>
          <input v-model="filterObj.salary" type="checkbox" value="1000to5000" />
          {{ $t('pages.filter.salary.1000to5000') }}
        </label>
        <label>
          <input v-model="filterObj.salary" type="checkbox" value="5000to10000" />
          {{ $t('pages.filter.salary.5000to10000') }}
        </label>
        <label>
          <input v-model="filterObj.salary" type="checkbox" value="10000" />
          {{ $t('pages.filter.salary.more10000') }}
        </label>
      </div>
    </div>
    <button @click="oncloseFilter" class="apply-button">{{ $t('buttons.apply') }}</button>
  </aside>
</template>

<script setup>
import { professions } from '@/constants/filter'
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits()
function oncloseFilter() {
  emit('close-filter')
}

const filterObj = ref({
  profession: [],
  experience: [],
  format: [],
  type: [],
  language: [],
  city: [],
  salary: []
})

import { useVacanciesStore } from '@/stores/vacancies'
const vacanciesStore = useVacanciesStore()
import { watch } from 'vue'
watch(
  filterObj,
  (newValue) => {
    vacanciesStore.setFilter(newValue)
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
h3 {
  margin: 0 0 20px 0;
}
label {
  margin: 13px 0 0 0;
  &:first-child {
    margin: 0;
  }
}
.filter__category {
  margin: 40px 0 0 0;
}
.close-button {
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 50px;
  display: none;
  span {
    position: absolute;
    left: 5px;

    transition:
      transform 0.5s,
      opacity 0.5s,
      background-color 0.5s;

    width: 30px;
    height: 3px;
    background-color: #040404;
    &:nth-child(1) {
      rotate: 45deg;
    }
    &:nth-child(2) {
      rotate: -45deg;
    }
  }
}
.apply-button {
  display: none;
  margin: 20px 0 0 0;
}

@media only screen and (max-width: 760px) {
  .close-button,
  .apply-button {
    display: block;
  }
}
</style>
