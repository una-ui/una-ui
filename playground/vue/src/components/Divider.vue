<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div>
      {{ title }}
    </div>

    <slot />
  </div>
</template>
