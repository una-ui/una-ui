<script setup lang="ts">
const tabs = ref([
  {
    value: 'Dashboard',
    label: 'Dashboard',
    content: '...',
    disabled: false,
  },
  {
    value: 'Products',
    label: 'Products',
    content: '...',
    disabled: false,
  },
  {
    value: 'Messages',
    label: 'Messages(disabled)',
    content: '...',
    disabled: true,
  },
])
</script>

<template>
  <NTabs default-value="Dashboard">
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
  </NTabs>
</template>
