import DbOperations from './helpers/DbOperations'
const collectionDB = new DbOperations('users')
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
export const useUsersStore = defineStore('users', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore
  const usersList = ref(null)
  const currentUser = ref(null)
  async function loadUsersList() {
    usersList.value = await generalApiOperation({
      operation: () => collectionDB.loadItemsList()
    })
  }
  async function loadUserById(userId) {
    if (userId) {
      currentUser.value = await generalApiOperation({
        operation: () => collectionDB.getItemById(userId)
      })
      return currentUser.value
    }
  }
  async function addUser(userData) {
    currentUser.value = await generalApiOperation({
      operation: () => collectionDB.addItem(userData)
    })
  }
  async function addUserWithCustomId({ id, data }) {
    const userObj = await loadUserById(id)
    if (!userObj?.email) {
      currentUser.value = await generalApiOperation({
        operation: () => collectionDB.addItemWithCustomId(id, data)
      })
    }
  }
  async function updateUser({ id, data }) {
    currentUser.value = await generalApiOperation({
      operation: () => collectionDB.updateItem(id, data)
    })
  }
  async function deleteUser(userData) {
    currentUser.value = await generalApiOperation({
      operation: () => collectionDB.deleteItem(userData)
    })
  }
  const getUsersList = computed(() => usersList.value)
  const getCurrentUser = computed(() => currentUser.value)
  return {
    usersList,
    loadUsersList,
    loadUserById,
    addUser,
    addUserWithCustomId,
    deleteUser,
    getUsersList,
    getCurrentUser,
    updateUser
  }
})
