import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'

export const useSavedStore = defineStore('saved', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  return {
    ...getStoreTemplate('saved', generalApiOperation)
  }
})
