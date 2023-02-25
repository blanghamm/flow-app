<script lang="ts" setup>
import {useTaskStore} from "~/store/task"
import {storeToRefs} from "pinia"
const store = useTaskStore()
const { task } = storeToRefs(store)
</script>

<template>
<div class="text-xl w-full">
  <Teleport to="body">
    <Modal/>
  </Teleport>
</div>
</template>

<style scoped>

</style>