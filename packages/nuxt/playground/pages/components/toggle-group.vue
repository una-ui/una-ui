<script setup lang="ts">
const items = [
  {
    label: 'with label',
    value: '1',
    icon: false,
    square: false,
    leading: 'i-radix-icons-font-bold',
  },
  {
    value: '2',
    icon: false,
    square: false,
    slot: '2',
    leading: 'i-radix-icons-font-bold',
  },
  {
    label: 'i-radix-icons-strikethrough',
    value: '3',
  },
]

const value = ref(['1', '3'])
</script>

<template>
  <NToggleGroup v-model="value" orientation="horizontal" :items>
    <template #2="{ item }">
      <NToggleGroupItem v-bind="item">
        ✨ {{ item.value }}
      </NToggleGroupItem>
    </template>
  </NToggleGroup>
</template>
