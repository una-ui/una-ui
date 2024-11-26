<script setup lang="ts">
const options = ref([
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
])
const value = ref('default')
</script>

<template>
  <NRadioGroup
    v-model="value"
    icon="i-lucide-check-check"
    rounded="none"
    :items="options"
  />
</template>
