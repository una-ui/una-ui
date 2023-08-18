<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NSwitch
    v-model="enabled"
    off-icon="i-heroicons-sun-20-solid"
    on-icon="i-heroicons-moon-20-solid"
  />
</template>
