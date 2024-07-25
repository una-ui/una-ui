<script setup lang="ts">
const shapes = [
  'rounded-lg',
  'rounded-full',
  'rounded-l-full',
  'rounded-tr-4xl',
  'rounded-bl-1cm',
  'rounded-r-3xl',
  'rounded-b-full',
  'rounded-lb-full',
]
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex items-center space-x-4">
      <NSkeleton
        rounded="0 md:full"
        class="h-12 w-12"
      />
      <div class="space-y-2">
        <NSkeleton class="h-4 w-[250px]" />
        <NSkeleton class="h-4 w-[200px]" />
      </div>
    </div>

    <NSkeleton class="h-6" />

    <div class="flex flex-wrap gap-4">
      <NSkeleton
        v-for="(shape, i) in shapes"
        :key="i"
        class="h-24 w-24"
        :class="shape"
      />
    </div>
  </div>
</template>
