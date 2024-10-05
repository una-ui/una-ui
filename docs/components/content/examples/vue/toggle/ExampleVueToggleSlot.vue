<script setup lang="ts">
const toggle = ref(false)
</script>

<template>
  <NToggle
    v-model:pressed="toggle"
    square="30"
    toggle-off="soft-gray"
  >
    <div v-if="toggle" class="flex flex-col items-center justify-center space-y-2">
      <small>Initializing . . .</small>

      <NProgress />
    </div>
    <span v-else>Click now</span>
  </NToggle>
</template>
