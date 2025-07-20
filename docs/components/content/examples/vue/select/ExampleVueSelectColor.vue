<script setup lang="ts">
const selected = ref<string>()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <NSelect
      v-model="selected"
      :items="items"
      select="outline-white"
      placeholder="This is the gray color"
    />

    <NSelect
      v-model="selected"
      :items="items"
      select="outline-primary"
      select-item="primary"
      placeholder="This is the primary color (default)"
    />

    <NSelect
      v-model="selected"
      :items="items"
      select="soft-rose"
      select-item="rose"
      placeholder="This is the rose color"
    />
  </div>
</template>
