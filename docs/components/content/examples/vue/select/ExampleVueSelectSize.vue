<script setup lang="ts">
const selected = ref<string>()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <NSelect
      v-model="selected"
      size="xs"
      :items
      placeholder="Select Contributor"
      label="Vue Community"
    />

    <NSelect
      v-model="selected"
      size="sm"
      :items
      placeholder="Select Contributor"
      label="Vue Community"
    />

    <NSelect
      v-model="selected"
      :items
      size="md"
      placeholder="Select Contributor"
      label="Vue Community"
    />
  </div>
</template>
