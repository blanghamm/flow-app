import { useMutation, useQuery } from "@tanstack/vue-query"
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
    const createNewTask = async () => await fetch('http://localhost:3000/api/tasks?account=2', {method: 'put', body: JSON.stringify(task.value) })
    const {data, suspense} = useMutation({ mutationFn: createNewTask, onSuccess: () => { } })
    await suspense()
    tasks.value = data.value
    try {
      await $fetch('http://localhost:3000/api/tasks', {method: 'put', body: task.value, query: {'account': 2}})
    } catch (err) {
      console.log(err)
    }
    task.value = {title: "", description: "", day: "Today"}
  }

  const getTask = async () => {
      const fetchAllTasks = async () => await fetch('http://localhost:3000/api/tasks?account=2', {method: 'get' }).then((response) => response.json())
      const {data, suspense} = useQuery({ queryKey: ['tasks'], queryFn: fetchAllTasks })
      await suspense()
      tasks.value = data.value
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