<script setup lang="ts">
const group = [
  { value: 'bold', label: 'i-radix-icons-font-bold' },
  { value: 'italic', label: 'i-radix-icons-font-italic' },
  { value: 'underline', label: 'i-radix-icons-underline' },
]

const toggleGroupModel = ref(['bold'])
</script>

<template>
  <NToggleGroup v-model="toggleGroupModel" :items="group" />
</template>
