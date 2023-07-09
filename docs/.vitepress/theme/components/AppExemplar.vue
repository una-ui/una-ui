<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div flex="~ col" rounded-lg bg-muted p-4 shadow class="vp-raw !font-sans">
    <!-- TODO: Add header soon for interactive component -->
    <slot />
  </div>
</template>
