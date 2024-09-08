<script setup lang="ts">
const colors = ref([
  {
    checkbox: 'red sm:primary',
    value: true,
  },
  {
    checkbox: 'info',
    value: true,
  },
  {
    checkbox: 'error',
    value: true,
  },
  {
    checkbox: 'warning',
    value: true,
  },
  {
    checkbox: 'success',
    value: true,
  },
  {
    checkbox: 'purple',
    value: true,
  },
  {
    checkbox: 'pink',
    value: true,
  },
  {
    checkbox: 'violet',
    value: true,
  },
  {
    checkbox: 'fuchsia',
    value: true,
  },
  {
    checkbox: 'indigo',
    value: true,
  },
])
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox
      v-for="color in colors"
      :key="color.checkbox"
      v-model:checked="color.value"
      :label="color.checkbox"
      :checkbox="color.checkbox"
    />
  </div>
</template>
