<script setup lang="ts">
const group = [
  {
    label: 'with label',
    value: 'bold',
    icon: false,
    square: false,
    leading: 'i-radix-icons-font-bold',
  },
  {
    value: 'italic',
    square: false,
    slot: 'italic',
    label: 'i-radix-icons-font-italic',
  },
  { value: 'underline', label: 'i-radix-icons-underline' },
]

const toggleGroupModel = ref(['1'])
</script>

<template>
  <NToggleGroup v-model="toggleGroupModel" :items="group">
    <template #italic="{ item }">
      <NToggleGroupItem v-bind="item">
        ✨ {{ item.value }}
      </NToggleGroupItem>
    </template>
  </NToggleGroup>
</template>
