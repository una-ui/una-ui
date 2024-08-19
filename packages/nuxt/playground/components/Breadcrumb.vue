<script setup lang="ts">
const home = ref({
  label: 'Home',
  url: '/',
})
const items = ref([
  { label: 'Components', url: '/components' },
  { label: 'Breadcrumb', url: '/breadcrumb' },
])
</script>

<template>
  <NBreadcrumb :home :items>
    <template #separator>
      <NIcon name="i-heroicons:slash-20-solid" />
    </template>
  </NBreadcrumb>
</template>
