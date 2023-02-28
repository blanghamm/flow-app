<script lang="ts" setup>
import {useTaskStore} from "~/store/task"
import { useModalStore } from "~/store/modal"
import {storeToRefs} from "pinia"
import TaskCard from "~/pages/TaskCard.vue"

const taskStore = useTaskStore()
const modalStore = useModalStore()
const { tasks } = storeToRefs(taskStore)

await taskStore.getTask()

const todaysTasks = computed(() => {
  return tasks.value.filter((task: any) => task.day === 'Today')
})
const tomorrowsTasks = computed(() => {
  return tasks.value.filter((task: any) => task.day === 'Tomorrow')
})

const editTask = (id: number) => {
  taskStore.editTask(id)
  modalStore.toggleModal()
}
</script>



<template>
<div class="text-xl w-full h-full py-8 px-16">
  <Teleport to="body">
    <Modal/>
  </Teleport>
  <section class="grid grid-cols-2 h-full">
    <div class="flex flex-col h-full justify-start">
      <h3 class="mb-4">Today's Tasks</h3>
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

