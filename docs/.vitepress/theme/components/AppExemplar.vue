<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div flex="~ col" rounded-lg bg-muted p-4 shadow class="vp-raw !font-sans">
    <slot />
  </div>
</template>
