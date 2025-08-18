<script setup lang="ts">
const group = [
  { value: 'bold', label: 'i-radix-icons-font-bold' },
  { value: 'italic', label: 'i-radix-icons-font-italic' },
  { value: 'underline', label: 'i-radix-icons-underline' },
]
const groupWithDifferentColors = [
  { value: 'bold', label: 'i-radix-icons-font-bold', toggleOn: 'soft-blue', toggleOff: 'outline-gray' },
  { value: 'italic', label: 'i-radix-icons-font-italic', toggleOn: 'soft-indigo', toggleOff: 'soft-gray' },
  { value: 'underline', label: 'i-radix-icons-underline' },
]

const toggleGroupModel = ref(['bold', 'italic'])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <NToggleGroup
      v-model="toggleGroupModel"
      :items="group"
      toggle-on="soft-primary"
      toggle-off="outline-gray"
    />
    <NToggleGroup
      v-model="toggleGroupModel"
      :items="group"
      toggle-on="solid-primary"
      toggle-off="soft-gray"
    />
    <NToggleGroup
      v-model="toggleGroupModel"
      :items="groupWithDifferentColors"
      toggle-on="soft-primary"
      toggle-off="outline-gray"
    />
  </div>
</template>
