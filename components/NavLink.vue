<template>
  <NuxtLink class="my-1 p-2 flex items-center justify-center rounded-[8px] border border-transparent hover:bg-slate-100 hover:border-slate-100" active-class="bg-slate-100 border !border-slate-200" :to="to">
    <Icon class="text-slate-800 text-inherit" :name="iconClass" size="22"/>
  </NuxtLink>
</template>
<script lang="ts" setup>
interface Props {
  to: string
  iconClass: string
}

defineProps<Props>()
</script>
