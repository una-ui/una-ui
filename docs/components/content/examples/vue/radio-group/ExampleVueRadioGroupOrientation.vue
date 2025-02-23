<script setup lang="ts">
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <span class="text-sm text-gray-500 font-medium dark:text-gray-400">Vertical (Default)</span>
      <NRadioGroup
        :items="options"
        default-value="option1"
        orientation="vertical"
        class="space-y-2"
      />
    </div>

    <div class="space-y-2">
      <span class="text-sm text-gray-500 font-medium dark:text-gray-400">Horizontal</span>
      <NRadioGroup
        :items="options"
        default-value="option2"
        orientation="horizontal"
        class="space-x-4"
      />
    </div>
  </div>
</template>
