<script setup lang="ts">
const value = ref('')
</script>

<template>
  <NVInput
    v-model="value"
    type="email"
    placeholder="Enter your email"
  />
</template>
