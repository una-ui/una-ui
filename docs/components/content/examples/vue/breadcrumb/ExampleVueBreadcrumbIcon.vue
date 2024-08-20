<script setup lang="ts">
const homeWithIcon = ref({
  icon: 'i-heroicons:home',
  url: '/getting-started',
})

const homeLabelWithIcon = ref({
  lable: 'Home',
  icon: 'i-heroicons:home',
  url: '/getting-started',
})

const itemsWithIcon = ref([
  { icon: 'i-heroicons:clipboard-document-list', url: '/components/accordion' },
  { icon: 'i-heroicons:document-20-solid', url: '/components/breadcrumb' },
])

const itemsLabelWithIcon = ref([
  { label: 'Components', icon: 'i-heroicons:clipboard-document-list', url: '/components/accordion' },
  { label: 'Breadcrumb', icon: 'i-heroicons:document-20-solid', url: '/components/breadcrumb' },
])
</script>

<template>
  <NBreadcrumb :home="homeWithIcon" :items="itemsWithIcon" />
  <NSeparator label="or" />
  <NBreadcrumb :home="homeLabelWithIcon" :items="itemsLabelWithIcon" />
  <NSeparator label="with link variant" />
  <NBreadcrumb :home="homeLabelWithIcon" :items="itemsLabelWithIcon" breadcrumb="link" />
</template>
