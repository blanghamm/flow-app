<script lang="ts" setup>
import { useModalStore } from '~/store/modal'
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import type { Task } from '~/types'

const modalStore = useModalStore()

const queryClient = useQueryClient()

const fetchAllTasks = async <T,>(): Promise<T> =>
  await fetch('http://localhost:3000/api/tasks', { method: 'get' }).then(
    (response) => response.json() as Promise<T>
  )
const { data, suspense } = useQuery({
  queryKey: ['tasks'],
  queryFn: fetchAllTasks<Task[]>
})
await suspense()

const updatedTask = ref<Task | {}>({})

const postUpdatedTask = async <T,>(): Promise<T> =>
  await fetch('http://localhost:3000/api/tasks', {
    method: 'post',
    body: JSON.stringify(updatedTask.value)
  }).then((response) => response.json() as Promise<T>)
const { mutate } = useMutation({
  mutationFn: postUpdatedTask,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  }
})

const todaysTasks = computed(() => {
  if (data.value) {
    return data.value?.filter((task: Task) => task.assignedDay === 'Today')
  }
  return []
})
const tomorrowsTasks = computed(() => {
  if (data.value) {
    return data.value?.filter((task: Task) => task.assignedDay === 'Tomorrow')
  }
  return []
})

const editTask = (id: number) => {
  modalStore.toggleModal()
}
</script>

<template>
  <div class="text-xl w-full h-full py-8 px-16">
    <section class="grid grid-cols-3 h-full gap-16">
      <CardPresentationStack title="Backlog" :tasks="todaysTasks" @editTask="editTask" />
      <CardPresentationStack title="Today" :tasks="todaysTasks" @editTask="editTask" />
      <CardPresentationStack title="Tomorrow" :tasks="tomorrowsTasks" @editTask="editTask" />
    </section>
  </div>
</template>
