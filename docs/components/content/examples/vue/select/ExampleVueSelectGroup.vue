<script setup lang="ts">
const selected = ref()
const items = [
  {
    label: 'A',
    items: ['Apple', 'Aeroplane', 'Ant'],
  },
  {
    label: 'B',
    items: ['Banana', 'Ball', 'Bat'],
  },
  {
    label: 'C',
    items: ['Cat', 'Car', 'Cup'],
  },
  {
    label: 'D',
    items: ['Dog', 'Duck', 'Doll'],
  },
]
</script>

<template>
  <div class="max-w-50">
    <NSelect
      v-model="selected"
      :items
      group-separator
      placeholder="Select Option"
    />
  </div>
</template>
