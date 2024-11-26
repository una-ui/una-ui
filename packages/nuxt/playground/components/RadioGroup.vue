<script setup lang="ts">
const options = ref([
  { id: 'r1', value: 'default', label: 'Default', icon: 'i-check', radioGroup: 'orange' },
  { id: 'r2', value: 'comfortable', label: 'Comfortable' },
  { id: 'r3', value: 'compact', label: 'Compact' },
])
const value = ref('default')
</script>

<template>
  <!-- <span class="text-brand" radio-group="red">
    Selected: {{ value }}
  </span>
  <NRadioGroup>
    <NRadioGroupItem
      v-bind="options[0]"
      radio-group="green"
    >
      {{
        value
      }}
    </NRadioGroupItem>
  </NRadioGroup> -->

  <NRadioGroup
    v-model="value"
    :items="options"
  />
</template>
