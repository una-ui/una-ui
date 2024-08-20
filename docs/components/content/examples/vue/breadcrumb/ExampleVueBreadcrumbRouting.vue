<script setup lang="ts">
const home = ref({
  label: 'Home',
  url: '/getting-started',
})

const items = ref([
  { label: 'Configuration', url: '/getting-started/configuration' },
  { label: 'Installation', url: '/getting-started/installation' },
  { label: 'Components', url: '/components/accordion' },
  { label: 'Breadcrumb', url: '/components/breadcrumb' },
])
</script>

<template>
  <NBreadcrumb :home :items with-routing />
</template>
