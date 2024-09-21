<script setup lang="ts">
const examples = [
  {
    rounded: 'none',
  },
  {
    rounded: 'sm',
  },
  {
    rounded: 'md',
  },
  {
    rounded: 'lg',
  },
  {
    rounded: 't-xl sm:r-xl',
  },
  {
    rounded: '3xl',
  },
  {
    rounded: 'b-full',
  },
  {
    rounded: 's-3xl',
  },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NButton
      v-for="example in examples"
      :key="example.rounded"
      :label="example.rounded"
      :rounded="example.rounded"
    />
  </div>
</template>
