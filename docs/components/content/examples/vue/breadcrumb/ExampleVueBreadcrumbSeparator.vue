<script setup lang="ts">
const home = ref({
  label: 'Home',
  url: '/getting-started',
})

const items = ref([
  { label: 'Components', url: '/components/accordion' },
  { label: 'Breadcrumb', url: '/components/breadcrumb' },
])
</script>

<template>
  <NBreadcrumb :home :items>
    <template #separator>
      <NIcon name="i-heroicons:slash-20-solid" />
    </template>
  </NBreadcrumb>
  <NSeparator label="or" />
  <NBreadcrumb :home :items>
    <template #separator>
      <NIcon name="i-heroicons:chevron-double-right-20-solid" />
    </template>
  </NBreadcrumb>
</template>
