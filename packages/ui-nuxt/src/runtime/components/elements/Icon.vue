<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="flex-none" :class="icon" />
</template>
