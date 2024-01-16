import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'
import { ref } from 'vue'

export const useVacanciesStore = defineStore('vacancies', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  const filterObj = ref({})
  function setFilter(filterObjToSet) {
    filterObj.value = { ...filterObjToSet }
  }
  function addToFilter(val) {
    filterObj.value.search = val
  }

  return {
    ...getStoreTemplate('vacancies', generalApiOperation),
    filterObj,
    setFilter,
    addToFilter
  }
})
