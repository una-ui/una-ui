<script setup lang="ts">
const radio = ref('')

const colors = [
  {
    radio: 'red sm:primary',
  },
  {
    radio: 'info',
  },
  {
    radio: 'error',
  },
  {
    radio: 'warning',
  },
  {
    radio: 'success',
  },
  {
    radio: 'purple',
  },
  {
    radio: 'pink',
  },
  {
    radio: 'violet',
  },
  {
    radio: 'fuchsia',
  },
  {
    radio: 'indigo',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NRadio
      v-for="color in colors"
      :key="color.radio"
      v-model="radio"
      :label="color.radio"
      :radio="color.radio"
      :value="color.radio"
    />
  </div>
</template>
