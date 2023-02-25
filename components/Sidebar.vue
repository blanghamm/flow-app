<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col w-[52px] p-2 h-full justify-between border-r border-gray-200">
    <ul class="flex flex-col items-center">
      <NavLink to="/" icon-class="ph:house-simple-bold"/>
      <NavLink to="/flow" icon-class="ph:folder-simple-bold"/>
    </ul>
    <ul class="flex flex-col items-center">
      <NavLink to="/user" icon-class="ph:user-gear-bold"/>
      <NavLink to="/settings" icon-class="ph:gear-six-bold"/>
    </ul>
  </div>
</template>

