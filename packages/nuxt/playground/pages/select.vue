<script setup lang="ts">
const selected = ref([])
const selected2 = ref([])
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
const items2 = [
  {
    label: 'React Community',
    items: ['Theo', 'John', 'Jane'],
  },
  {
    label: 'Vue Community',
    items: ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter'],
  },
]
</script>

<template>
  <div class="max-w-50">
    <NSelect
      v-model="selected"
      :items
      placeholder="Select Contributor"
      label="Vue Community"
      multiple
    />

    <NSelect
      v-model="selected2"
      :items="items2"
      value-attribute="label"
      item-attribute="label"
      placeholder="Select Contributor"
      multiple
      :_select-trigger="{
        class: 'w-100',
      }"
    />
    <pre>
    {{ selected2 }}
  </pre>
  </div>
</template>
