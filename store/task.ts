import { defineStore } from 'pinia'
import type { Task } from '~/types'

export const useTaskStore = defineStore('taskStore', () => {
  const task = ref<Partial<Task>>({
    title: '',
    description: '',
    assignedDay: 'Today',
    labels: {}
  })

  return {
    task
  }
})
