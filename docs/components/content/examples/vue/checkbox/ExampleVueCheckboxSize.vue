<script setup lang="ts">
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
    <NCheckbox
      v-for="item in items"
      :key="item.size"
      :model-value="true"
      v-bind="item"
    />
  </div>
</template>
