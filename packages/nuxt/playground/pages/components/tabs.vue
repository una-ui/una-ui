<script setup lang="ts">
const items = ref([
  {
    value: 'tab1',
    name: 'Tab 1',
    content: 'Tab 1 content',
    disabled: false,
  },
  {
    value: 'tab2',
    name: 'Tab 2',
    content: 'Tab 2 content',
    disabled: false,
  },
  {
    value: 'tab3',
    name: 'Tab 3 (disabled)',
    content: 'Tab 3 content',
    disabled: true,
  },
])
</script>

<template>
  <NTabs
    default-value="tab1"
    :items="items"
    class="w-[400px]"
    size="xs"
  >
    <template #content="{ item }">
      <span>{{ item.content }} test</span>
    </template>
  </NTabs>
</template>
