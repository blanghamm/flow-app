import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const open = ref<boolean>(false)

  const toggleModal = () => {
    open.value = !open.value
  }

  return {
    open,
    toggleModal
  }
})
