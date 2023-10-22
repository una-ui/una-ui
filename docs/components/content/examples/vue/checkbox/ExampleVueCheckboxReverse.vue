<script setup lang="ts">
const options = ref([
  { label: 'Checkbox A', value: false },
  { label: 'Checkbox B', value: false },
  { label: 'Checkbox C', value: false },
])
</script>

<template>
  <div class="flex flex-wrap space-x-8">
    <NCheckbox
      v-for="option in options"
      :key="option.label"
      v-model="option.value"
      :label="option.label"
      reverse
    />
  </div>
</template>
