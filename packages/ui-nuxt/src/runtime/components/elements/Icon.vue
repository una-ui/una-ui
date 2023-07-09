<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="flex-none" :class="name" />
</template>
