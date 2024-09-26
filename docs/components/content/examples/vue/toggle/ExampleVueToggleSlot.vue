<script setup lang="ts">
const toggle = ref(false)
</script>

<template>
  <NToggle v-model:pressed="toggle" size="min-w-100px min-h-40px">
    <div v-if="toggle" class="flex flex-col items-center justify-center">
      <span>Initializing . . .</span>
      <NProgress />
    </div>
    <span v-else>Paused.</span>
  </NToggle>
</template>
