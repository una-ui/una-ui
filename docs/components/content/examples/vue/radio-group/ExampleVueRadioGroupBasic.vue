<script setup lang="ts">
const themes = ref([
  { value: 'light', label: 'Light', description: 'For bright environments' },
  { value: 'dark', label: 'Dark', description: 'Easier on the eyes' },
  { value: 'system', label: 'System', description: 'Follows your system preference' },
])

const selectedTheme = ref('system')
</script>

<template>
  <NRadioGroup
    v-model="selectedTheme"
    :items="themes"
  />
</template>
