<script setup lang="ts">
const checkbox = ref(true)

const colors = [
  {
    checkbox: 'red sm:primary',
  },
  {
    checkbox: 'info',
  },
  {
    checkbox: 'error',
  },
  {
    checkbox: 'warning',
  },
  {
    checkbox: 'success',
  },
  {
    checkbox: 'purple',
  },
  {
    checkbox: 'pink',
  },
  {
    checkbox: 'violet',
  },
  {
    checkbox: 'fuchsia',
  },
  {
    checkbox: 'indigo',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox
      v-for="color in colors"
      :key="color.checkbox"
      v-model="checkbox"
      :label="color.checkbox"
      :checkbox="color.checkbox"
    />
  </div>
</template>
