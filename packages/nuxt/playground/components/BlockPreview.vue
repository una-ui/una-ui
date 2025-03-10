<script setup lang="ts">
defineProps<{
  container?: boolean
  url: string
}>()
</script>

<template>
  <div class="relative overflow-hidden border rounded-lg bg-base" :class="[container ? '' : 'aspect-[4/2.5]']">
    <div
      :class="[container ? 'w-full' : 'absolute inset-0 hidden w-[1600px] bg-base md:block']"
    >
      <iframe
        :src="url"
        class="relative w-full bg-base" :class="[container ? 'h-[--height]' : 'square-full']"
      />
    </div>
  </div>
</template>
