<script setup lang="ts">
const selected = ref()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <NSelect
      v-model="selected"
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
