<script lang="ts" setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

import { useModalStore } from "~/store/modal"
import { useTaskStore } from "~/store/task"
import { storeToRefs } from "pinia"
import { useMutation, useQueryClient } from '@tanstack/vue-query';
const queryClient = useQueryClient()
const modalStore = useModalStore()
const taskStore = useTaskStore()
const { open } = storeToRefs(modalStore)
const { task } = storeToRefs(taskStore)
import type { Task } from "~/types"


const createNewTask = async <T>(): Promise<T> => await $fetch('http://localhost:3000/api/tasks/', { method: 'post', body: { title: task.value.title, description: task.value.description, assignedDay: task.value.assignedDay, labels: {} } }) as Promise<T>
const { mutate } = useMutation({ mutationFn: createNewTask<Partial<Task>>, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['tasks'] }) } })
const addNewTask = () => {
    mutate()
}


</script>

<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog as="div" @close="modalStore.toggleModal()" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900 mb-4">
                                Create task
                            </DialogTitle>
                            <form @submit.prevent="addNewTask()">
                                <div class="mt-2">
                                    <div>
                                        <label for="title"
                                            class="block mb-2 text-sm font-medium text-gray-500">Title</label>
                                        <input type="text" id="title"
                                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-gray-400 outline-none block w-full p-2.5"
                                            placeholder="Title" required v-model="task.title">
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div>
                                        <label for="description"
                                            class="block mb-2 text-sm font-medium text-gray-500">Description</label>
                                        <textarea id="message" rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-400 outline-none"
                                            placeholder="Create a task description..."
                                            v-model="task.description"></textarea>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <ListDropdown v-model="task.assignedDay" />
                                </div>
                                <div class="mt-4">
                                    <button type="submit"
                                        class="inline-flex justify-center rounded-md px-4 py-2 text-gray-600 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 py-1.5 px-4 text-sm rounded-[8px] border border-gray-300 hover:bg-gray-100"
                                        @click="modalStore.toggleModal()">
                                        Create task
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
