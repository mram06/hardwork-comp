import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'
import { computed } from 'vue'

export const useVacanciesStore = defineStore('vacancies', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  return getStoreTemplate('vacancies', generalApiOperation)
})
