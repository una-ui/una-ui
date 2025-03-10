<script setup lang="ts">
defineProps<{
  container?: boolean
  url: string
}>()

const isLoading = ref(true)
</script>

<template>
  <div class="relative overflow-hidden border rounded-lg bg-base" :class="[container ? '' : 'aspect-[4/2.5]']">
    <div v-if="isLoading" class="relative z-10 h-full w-full flex items-center justify-center">
      <NIcon name="i-loading" class="animate-spin" />
    </div>
    <div
      :class="[container ? 'w-full' : 'absolute inset-0 hidden w-[1600px] bg-base md:block']"
    >
      <iframe
        :src="url ?? 'https://www.google.com'"
        class="relative z-20 w-full bg-base" :class="[container ? 'h-[--height]' : 'size-full']"
        @load="isLoading = false"
      />
    </div>
  </div>
</template>
