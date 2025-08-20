<script setup lang="ts">
const group = [
  { value: 'md', label: 'md', icon: false, square: false },
  { value: 'lg', label: 'lg', icon: false, square: false },
  { value: 'xl', label: 'xl', icon: false, square: false },
]

const toggleGroupModel = ref(['md'])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <NToggleGroup v-model="toggleGroupModel" :items="group" size="md" />
    <NToggleGroup v-model="toggleGroupModel" :items="group" size="lg" />
    <NToggleGroup v-model="toggleGroupModel" :items="group" size="xl" />
  </div>
</template>
