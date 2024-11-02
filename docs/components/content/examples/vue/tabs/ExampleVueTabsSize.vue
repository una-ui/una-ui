<script setup lang="ts">
const items = ref([
  {
    value: 'tab1',
    name: 'Una Tab 1',
    content: 'Tab 1 content',
    disabled: false,
  },
  {
    value: 'tab2',
    name: 'Una Tab 2',
    content: 'Tab 2 content',
    disabled: false,
  },
  {
    value: 'tab3',
    name: 'Una Tab 3',
    content: 'Tab 3 content',
    disabled: false,
  },
])
</script>

<template>
  <div class="space-y-8">
    <NTabs :items="items" default-value="tab1" size="md" class="mb-4" />
    <NTabs
      :items="items" default-value="tab2" size="xl" :_tabs-trigger="{
        size: 'xl',
      }"
    />
  </div>
</template>
