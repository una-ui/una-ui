<script setup lang="ts">
const options = ref([
  {
    value: true,
    label: '1',
    checkbox: 'green',
    una: {
      checkboxCheckedIcon: 'i-tabler-circle-1-filled',
    },
  },
  {
    value: true,
    label: '2',
    checkbox: 'blue',
    una: {
      checkboxCheckedIcon: 'i-tabler-circle-2-filled',
    },
  },
  {
    value: true,
    label: '3',
    checkbox: 'red',
    una: {
      checkboxCheckedIcon: 'i-tabler-circle-3-filled',
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
