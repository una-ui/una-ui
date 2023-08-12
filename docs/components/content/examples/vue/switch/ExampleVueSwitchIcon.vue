<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NSwitch
    v-model="enabled"
    icon-off="i-heroicons-sun-20-solid"
    icon-on="i-heroicons-moon-20-solid"
  />
</template>
