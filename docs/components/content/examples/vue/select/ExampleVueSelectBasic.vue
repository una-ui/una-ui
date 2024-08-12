<script setup lang="ts">
const selected = ref()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="max-w-50">
    <NSelect
      v-model="selected"
      :items
      btn="solid-primary"
      placeholder="Select Contributor"
      label="Vue Community"
    />
  </div>
</template>
