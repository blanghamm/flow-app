import {defineStore} from "pinia"

export interface Task {
  title: string
  description: string
}

export const useTaskStore = defineStore('task', () => {
  const task = ref<Task | null>({
    title: "",
    description: ""
  })
  const postTask = () => {
    task.value = { title: "", description: "" }
  }

  return {
    task,
    postTask
  }
})