<script lang="ts" setup>
import { useModalStore } from '~/store/modal'
const store = useModalStore()
</script>

<template>
  <div
    class="h-[52px] px-4 border-b border-gray-100 flex flex-row items-center justify-end"
  >
    <OldButton @click="store.toggleModal()" />
  </div>
</template>

<style scoped></style>
