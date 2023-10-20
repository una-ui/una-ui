<script setup lang="ts">
const radio = ref()

const items = [
  {
    label: '0.8cm',
    size: '0.8cm',
  },
  {
    label: 'xs md:2xl',
    size: 'xs md:2xl',
  },
  {
    label: 'sm',
    size: 'sm',
  },
]
</script>

<template>
  <div class="flex gap-4">
    <NRadio
      v-for="item in items"
      :key="item.size"
      v-model="radio"
      :value="item.size"
      v-bind="item"
    />
  </div>
</template>
