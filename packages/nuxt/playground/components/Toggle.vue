<script setup lang="ts">
const toggle = ref(false)
</script>

<template>
  {{ toggle }}
  <NToggle v-model:pressed="toggle" toggle="primary" label="U" />
</template>
