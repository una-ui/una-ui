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
  <NBreadcrumb :home :items size="lg" />
  <NBreadcrumb :home :items size="xl" />
  <NBreadcrumb :home :items size="2xl" />
</template>
