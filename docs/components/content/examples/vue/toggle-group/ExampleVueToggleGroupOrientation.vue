<script setup lang="ts">
const group = [
  { value: 'bold', label: 'i-radix-icons-font-bold' },
  { value: 'italic', label: 'i-radix-icons-font-italic' },
  { value: 'underline', label: 'i-radix-icons-underline' },
]

const toggleGroupModel = ref([])
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <span class="text-sm text-gray-500 font-medium dark:text-gray-400">Vertical</span>
      <NToggleGroup v-model="toggleGroupModel" :items="group" orientation="vertical" />
    </div>

    <div class="space-y-2">
      <span class="text-sm text-gray-500 font-medium dark:text-gray-400">Horizontal (Default)</span>
      <NToggleGroup v-model="toggleGroupModel" :items="group" orientation="horizontal" />
    </div>
  </div>
</template>
