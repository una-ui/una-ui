<script setup lang="ts">
const options = [
  {
    value: true,
    radio: 'green',
  },
  {
    value: false,
    radio: 'blue',
  },
  {
    value: false,
    radio: 'red',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox
      v-for="option in options"
      v-bind="option"
      :key="option.radio"
      v-model="option.value"
      size="xl n-checked:3xl"
    />
  </div>
</template>
