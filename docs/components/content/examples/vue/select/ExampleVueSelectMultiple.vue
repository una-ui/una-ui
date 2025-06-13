<script setup lang="ts">
const selected = ref([])
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="space-y-4">
    <div class="max-w-50">
      <NSelect
        v-model="selected"
        :items
        multiple
        placeholder="Select Contributors"
        label="Vue Community"
      />
    </div>
    <div class="text-sm text-muted-foreground">
      Selected: {{ selected.join(', ') }}
    </div>
  </div>
</template>
