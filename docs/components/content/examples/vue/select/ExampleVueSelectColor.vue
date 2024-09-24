<script setup lang="ts">
const selected = ref()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div class="grid gap-4 sm:cols-2">
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

    <NSeparator />

    <span class="text-sm font-medium">Default color:</span>

    <div>
      <NSelect
        v-model="selected"
        :items="items"
        select="outline-gray"
        placeholder="This is the gray color"
      />
    </div>
  </div>
</template>
