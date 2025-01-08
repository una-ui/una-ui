<script setup lang="ts">
const options = ref([
  { value: 'none', label: 'none', rounded: 'none' },
  { value: 'sm', label: 'sm', rounded: 'sm' },
  { value: 'md', label: 'md', rounded: 'md' },
  { value: '3px', label: '3px', rounded: '3px' },
  { value: 'full', label: 'full', rounded: 'full' },
])
const value = ref('default')
</script>

<template>
  <NRadioGroup
    v-model="value"
    :items="options"
    rounded="none"
  />
</template>
