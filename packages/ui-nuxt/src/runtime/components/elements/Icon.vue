<script setup lang="ts">
defineProps<{
  name?: string
}>()
</script>

<template>
  <div class="flex-none" :class="name" />
</template>
