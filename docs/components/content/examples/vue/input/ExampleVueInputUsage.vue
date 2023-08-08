<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div flex>
    <NInput
      v-model="value"
      type="text"
      placeholder="Enter your name"
    />
  </div>
</template>
