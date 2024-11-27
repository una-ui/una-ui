<script setup lang="ts">
const options = ref([
  { label: 'Orange', value: 'orange', radioGroup: 'orange' },
  { label: 'Green', value: 'green', radioGroup: 'green' },
  { label: 'Blue', value: 'blue', radioGroup: 'blue' },
  { label: 'Red', value: 'red', radioGroup: 'red' },
  { label: 'Purple', value: 'purple', radioGroup: 'purple' },
  { label: 'Pink', value: 'pink', radioGroup: 'pink' },
  { label: 'Teal', value: 'teal', radioGroup: 'teal' },
  { label: 'Yellow', value: 'yellow', radioGroup: 'yellow' },
])
const value = ref('default')
</script>

<template>
  <NRadioGroup
    v-model="value"
    radio-group="yellow"
    orientation="horizontal"
    :items="options"
  />
</template>
