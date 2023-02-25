<template>
  <NuxtLink class="my-1 p-2 flex items-center justify-center rounded-[8px] hover:bg-gray-200" active-class="bg-gray-200" :to="to">
    <Icon class="text-violet-700" :name="iconClass" size="22"/>
  </NuxtLink>
</template>
<script lang="ts" setup>
interface Props {
  to: string
  iconClass: string
}

defineProps<Props>()
</script>
