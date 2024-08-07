<script setup lang="ts">
const selected = ref()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']

const selectedObject = ref()
const objectItems = [
  { label: 'Evan You', value: 'evan-you', _selectItem: { disabled: true } }, // disabled
  { label: 'Anthony Fu', value: 'anthony-fu' },
  { label: 'Daniel Roe', value: 'daniel-roe' },
  { label: 'Pooya Parsa', value: 'pooya-parsa', _selectItem: { disabled: true } }, // disabled
  { label: 'Sébastien Chopin', value: 'sebastien-chopin' },
  { label: 'Alexander Lichter', value: 'alexander-lichter' },
]
</script>

<template>
  <div class="flex space-x-2">
    <NSelect
      v-model="selected"
      :items
      disabled
      placeholder="Select Contributor"
      label="Vue Community"
    />

    <NSelect
      v-model="selectedObject"
      :items="objectItems"
      item-attribute="label"
      placeholder="Select Contributor"
      label="Vue Community"
    />
  </div>
</template>
