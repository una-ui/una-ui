<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div flex="~ col" rounded-lg bg-muted p-4 shadow class="vp-raw !font-sans">
    <!-- TODO: Add some header soon -->
    <slot />
  </div>
</template>
