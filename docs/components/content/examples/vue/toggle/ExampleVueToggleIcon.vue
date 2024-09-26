<script setup lang="ts">
const isLocked = ref(false)
</script>

<template>
  <NToggle
    v-model:pressed="isLocked"
    :icon="isLocked ? 'i-radix-icons-lock-closed' : 'i-radix-icons-lock-open-1'"
  />
</template>
