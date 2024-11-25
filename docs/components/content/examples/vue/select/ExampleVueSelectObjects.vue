<script setup lang="ts">
const items = [
  {
    code: '81253',
    label: 'Ford',
  },
  {
    code: '29932',
    label: 'Chevrolet',
  },
  {
    code: '54509',
    label: 'Dodge',
  },
  {
    code: '94253',
    label: 'Toyota',
  },
]

const selected = ref()
</script>

<template>
  <div class="space-y-4">
    Output:
    <span class="text-primary-500">
      {{ selected }}
    </span>

    <div class="w-64">
      <NSelect
        v-model="selected"
        :items
        placeholder="Select a brand"
        item-attribute="label"
      />
    </div>
  </div>
</template>
