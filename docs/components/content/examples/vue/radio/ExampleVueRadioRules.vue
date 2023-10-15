<script setup lang="ts">
const radio = ref('a')

const options = [
  {
    value: 'vue',
    radio: 'green',
    class: 'n-checked:bg-green-500/30 n-checked:border-green-500',
  },
  {
    value: 'react',
    radio: 'blue',
    class: 'n-checked:bg-blue-500/30 n-checked:border-blue-500',
  },
  {
    value: 'angular',
    radio: 'red',
    class: 'n-checked:bg-red-500/30 n-checked:border-red-500',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NRadio
      v-for="option in options"
      v-bind="option"
      :key="option.value"
      v-model="radio"
      :label="option.value"
    />
  </div>
</template>
