<script setup lang="ts">
const toggle = ref(false)
</script>

<template>
  {{ toggle }}
  <NToggle v-model:pressed="toggle" size="xl">
    <span>U</span>
  </NToggle>
</template>
