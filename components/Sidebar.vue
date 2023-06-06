<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col w-[52px] p-2 h-full justify-between border-r border-gray-200">
    <ul class="flex flex-col items-center">
      <img class="mb-4" src="/flow-logo-monochrome-light.svg" width="56">
      <NavLink to="/" icon-class="lucide:layout-dashboard"/>
      <NavLink to="/flow" icon-class="lucide:folder"/>
    </ul>
    <ul class="flex flex-col items-center">
      <NavLink to="/user" icon-class="lucide:user-circle-2"/>
      <NavLink to="/settings" icon-class="lucide:settings"/>
    </ul>
  </div>
</template>

