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
    :items="options"
  />
</template>
