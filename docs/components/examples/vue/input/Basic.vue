<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div grid="~ cols-2" gap-4>
    <NVInput
      v-model="value"
    />
    <NVInput
      v-model="value"
      type="text"
      placeholder="Enter your name"
    />
  </div>
</template>
