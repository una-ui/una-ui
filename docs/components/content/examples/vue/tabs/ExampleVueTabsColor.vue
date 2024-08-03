<script setup lang="ts">
const tabs = ref([
  {
    value: 'tab1',
    label: 'Una Tab',
  },
  {
    value: 'tab2',
    label: 'Una Tab',
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
  <NTabs v-model="defaultValueFirstExample" class="mb-4">
    <NTabsList class="grid grid-cols-2" tabs="green">
      <NTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }} {{ isActiveTabFirstExample(tab.value) }}
      </NTabsTrigger>
    </NTabsList>
  </NTabs>
  <NTabs v-model="defaultValueSecondExample">
    <NTabsList class="grid grid-cols-2" tabs="orange">
      <NTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }} {{ isActiveTabSecondExample(tab.value) }}
      </NTabsTrigger>
    </NTabsList>
  </NTabs>
</template>
