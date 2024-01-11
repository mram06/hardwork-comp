import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'

export const useVacanciesStore = defineStore('vacancies', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  return getStoreTemplate('vacancies', generalApiOperation)
})
