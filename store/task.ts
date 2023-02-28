import {defineStore} from "pinia"

export interface Task {
  title: string
  description: string
  day: any
}


export const useTaskStore = defineStore('task', () => {
  const tasks = ref<any>([])
  const task = ref<Task | null>({
    title: "",
    description: "",
    day: "Today"
  })
  const createOrUpdateTask = async () => {
    try {
      await $fetch('http://localhost:4000/api/v1/tasks', {method: 'put', body: task.value, query: {'account': 2}})
    } catch (err) {
      console.log(err)
    }
    task.value = {title: "", description: "", day: "Today"}
  }

  const getTask = async () => {
    try {
      tasks.value = await $fetch('http://localhost:4000/api/v1/tasks', {method: 'get', query: {'account': 2}})
    } catch (err) {
      console.log(err)
    }
  }

  const editTask = (id: any) => {
    return task.value = tasks.value.filter((task: any) => task.id == id)[0]
  }

  return {
    task,
    tasks,
    createOrUpdateTask,
    getTask,
    editTask
  }
})