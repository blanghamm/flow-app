<script lang="ts" setup>
import { useModalStore } from "~/store/modal"
import TaskCard from "~/pages/TaskCard.vue"
import { useQuery } from "@tanstack/vue-query";

const modalStore = useModalStore()

const fetchAllTasks = async () => await fetch('http://localhost:3000/api/tasks', {method: 'get' }).then((response) => response.json())
const { data, suspense } = useQuery({ queryKey: ['tasks'], queryFn: fetchAllTasks })
await suspense()

const todaysTasks = computed(() => {
  return data.value.filter((task: any) => task.day === 'today')
})
const tomorrowsTasks = computed(() => {
  return data.value.filter((task: any) => task.day === 'tomorrow')
})

const editTask = (id: number) => {
  modalStore.toggleModal()
}
</script>



<template>
<div class="text-xl w-full h-full py-8 px-16">
  <section class="grid grid-cols-2 h-full">
    <div class="flex flex-col h-full justify-start">
      <h3 class="mb-4">All Tasks</h3>
      <div v-for="task in todaysTasks" :key="task.id">
        <TaskCard :title="task.title" :description="task.description" :day="task.day" @click="editTask(task.id)"/>
      </div>
    </div>
    <div class="flex flex-col h-full justify-start">
      <h3 class="mb-4">Tomorrow's Tasks</h3>
      <div v-for="task in tomorrowsTasks" :key="task.id">
        <TaskCard :title="task.title" :description="task.description" :day="task.day" @click="editTask(task.id)"/>
      </div>
    </div>
  </section>
</div>
</template>

