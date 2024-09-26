<script setup lang="ts">
const toggle = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <NToggle
      v-model:pressed="toggle"
      :icon="toggle ? 'i-radix-icons-star-filled' : 'i-radix-icons-star'"
      toggle="primary"
    />

    <NToggle
      icon="i-info"
      toggle="info"
    />

    <NToggle
      icon="i-success"
      toggle="success"
    />

    <NToggle
      icon="i-warning"
      toggle="warning"
    />

    <NToggle
      icon="i-error"
      toggle="error"
    />
  </div>
</template>
