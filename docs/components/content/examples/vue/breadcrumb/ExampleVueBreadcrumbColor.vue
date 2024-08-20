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
  <NBreadcrumb :home :items breadcrumb="text-green" />
  <NSeparator label="or" />
  <NBreadcrumb :home :items breadcrumb="text-yellow" />
  <NSeparator label="or" />
  <NBreadcrumb :home :items breadcrumb="link-purple" />
  <NSeparator label="or" />
  <NBreadcrumb :home :items breadcrumb="link-blue" />
</template>
