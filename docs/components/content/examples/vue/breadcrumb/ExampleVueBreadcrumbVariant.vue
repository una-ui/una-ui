<script setup lang="ts">
const home = ref({
  label: 'Example (home)',
  url: '/getting-started',
})

const items = ref([
  { label: 'Example 1', url: '/components/accordion' },
  { label: 'Example 2', url: '/components/breadcrumb' },
])
</script>

<template>
  <NBreadcrumb :home :items />
  <NSeparator label="or" />
  <NBreadcrumb :home :items breadcrumb="text" />
  <NSeparator label="or" />
  <NBreadcrumb :home :items breadcrumb="link" />
</template>
