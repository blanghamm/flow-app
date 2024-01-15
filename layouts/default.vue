<script lang="ts" setup></script>

<template>
  <div class="flex flex-row w-full h-full">
    <Sidebar />
    <div class="w-full h-full">
      <Topbar />
      <slot></slot>
      <Teleport to="body">
        <Modal />
      </Teleport>
    </div>
  </div>
</template>
