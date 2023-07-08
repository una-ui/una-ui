<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div flex="~ col" p-4 bg-muted rounded-lg shadow class="vp-raw !font-sans">
    <slot />
  </div>
</template>
