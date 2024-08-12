<script setup lang="ts">
const items = ref([
  {
    value: 'tab1',
    name: 'Tab 1',
    disabled: false,
  },
  {
    value: 'tab2',
    name: 'Tab 2',
    _tabsTrigger: {
      disabled: true,
    },
  },
  {
    value: 'tab3',
    name: 'Tab 3',
  },
  {
    value: 'tab4',
    name: 'Tab 4',
    disabled: true,
  },
])
</script>

<template>
  <div>
    <NTabs
      :items="items"
      disabled
      default-value="tab1"
    >
      <template #trigger="{ disabled }">
        Disabled: {{ disabled }}
      </template>
    </NTabs>

    <NSeparator label="or" />

    <NTabs
      :items="items"
      default-value="tab3"
    >
      <template #trigger="{ disabled }">
        Disabled: {{ disabled }}
      </template>
    </NTabs>
  </div>
</template>
