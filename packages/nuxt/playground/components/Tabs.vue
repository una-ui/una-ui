<script setup lang="ts">
const tabs = ref([
  {
    value: 'tab1',
    label: 'Tab 1',
    content: 'Tab 1 content',
    disabled: false,
  },
  {
    value: 'tab2',
    label: 'Tab 2',
    content: 'Tab 2 content',
    disabled: false,
  },
  {
    value: 'tab3',
    label: 'Tab 3 (disabled)',
    content: 'Tab 3 content',
    disabled: true,
  },
])
</script>

<template>
  <NTabs default-value="tab1" class="w-[415px]">
    <NTabsList class="grid grid-cols-3">
      <NTabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.disabled"
      >
        {{ tab.label }}
      </NTabsTrigger>
    </NTabsList>
    <NTabsContent
      v-for="tab in tabs"
      :key="tab.value"
      :value="tab.value"
    >
      {{ tab.content }}
    </NTabsContent>
  </NTabs>
</template>
