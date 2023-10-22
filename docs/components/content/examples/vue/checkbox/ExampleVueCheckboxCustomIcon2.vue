<script setup lang="ts">
const options = ref([
  {
    value: false,
    label: '1',
    checkbox: 'green',
    una: {
      checkboxIcon: 'i-tabler-circle-1-filled',
    },
  },
  {
    value: false,
    label: '2',
    checkbox: 'react',
    una: {
      checkboxIcon: 'i-tabler-circle-2-filled',
    },
  },
  {
    value: false,
    label: '3',
    checkbox: 'angular',
    una: {
      checkboxIcon: 'i-tabler-circle-3-filled',
    },
  },
])
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox
      v-for="(option, i) in options"
      :key="i"
      v-model="option.value"
      :checkbox="option.checkbox"
      :label="option.label"
      size="3xl"
      class="rounded-full"
      :una="option.una"
    />
  </div>
</template>
