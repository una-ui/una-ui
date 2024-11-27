<script setup lang="ts">
const options = ref([
  { value: 'lg', label: 'lg' },
  { value: '24px', label: '24px', size: '24px' },
  { value: '8', label: '8', size: '8' },
])

const value = ref('default')
</script>

<template>
  <NRadioGroup
    v-model="value"
    size="lg"
    orientation="horizontal"
    :items="options"
  />
</template>
