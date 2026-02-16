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

const selected = ref<string>()
</script>

<template>
  <div class="space-y-4">
    <div class="text-sm">
      Selected value:
      <span class="text-primary-500 font-mono">
        {{ selected }}
      </span>
    </div>

    <div class="w-64">
      <NSelect
        v-model="selected"
        :items
        placeholder="Select a brand"
        label-key="label"
        value-key="code"
      />
    </div>
  </div>
</template>
