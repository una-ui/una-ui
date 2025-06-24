<script setup lang="ts">
const value = ref<string[]>([])
const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <NPinInput
    id="pin-input"
    v-model="value"
    placeholder="○"
    separator="i-ph-star-fill text-primary"
    size="2xl"
    @complete="handleComplete"
  />
</template>
