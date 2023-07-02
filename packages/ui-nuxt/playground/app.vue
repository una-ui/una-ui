<script setup lang="ts">
const test = ref('')
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center container">
    <NButton btn="solid">
      Test sdf
      <template #icon>
        Icon
      </template>
    </NButton>
    <ColorMode />

    <input v-model="test" type="range">

    <input
      type="text"
      input="outline-error"
    >
  </div>
</template>
