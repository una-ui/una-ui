<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <span flex items-center space-x-1 class="drop-shadow-[0_0_0.5mm_rgb(var(--c-primary))]">
    <span class="h-13 w-13 -rotate-1">
      <ClientOnly>
        <img class="-mt-0.4" :src="isDark ? '/logo-solid-dark.svg' : '/logo-solid.svg'" alt="NexveltUI Logo">
      </ClientOnly>
    </span>

    <span class="hidden font-bold text-base drop-shadow-lg md:block">
      NexveltUI
    </span>
  </span>
</template>
