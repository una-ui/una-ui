<script setup lang="ts">
const tabs = ref([
  {
    value: 'tab1',
    name: 'Una Tab',
  },
  {
    value: 'tab2',
    name: 'Una Tab',
  },
])
const defaultValueFirstExample = ref('tab1')
const defaultValueSecondExample = ref('tab2')
function isActiveTabFirstExample(value: string) {
  return value === defaultValueFirstExample.value ? '(active)' : '(inactive)'
}
function isActiveTabSecondExample(value: string) {
  return value === defaultValueSecondExample.value ? '(active)' : '(inactive)'
}
</script>

<template>
  <NTabs v-model="defaultValueFirstExample" :items="tabs" class="mb-4" tabs="green">
    <template #trigger="{ item }">
      {{ item.name }} {{ isActiveTabFirstExample(item.value) }}
    </template>
  </NTabs>
  <NTabs v-model="defaultValueSecondExample" :items="tabs" tabs="orange">
    <template #trigger="{ item }">
      {{ item.name }} {{ isActiveTabSecondExample(item.value) }}
    </template>
  </NTabs>
</template>
