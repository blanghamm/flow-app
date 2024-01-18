<script setup lang="ts">
import type { Task } from '~/types';

defineProps<{ 
	tasks: Task[];
	title: string;
}>()

defineEmits<{
	'editTask': [id: number]
}>()
</script>

<template>
	<div class="flex flex-col h-full justify-start border border-gray-100 rounded-2xl px-4">
	        <h3 class="my-4 text-2xl text-slate-500">{{ title }}</h3>
	        <div class="w-full h-[44px] flex justify-center items-center border border-gray-100 rounded-lg">+</div>
	        <div v-for="task in tasks" :key="task.id">
	          <TaskCard
	            :title="task.title"
	            :description="task.description"
	            :day="task.assignedDay"
	            @click="$emit('editTask', task.id)"
	          />
	        </div>
	      </div>
</template>
