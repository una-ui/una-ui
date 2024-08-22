<script setup lang="ts">
const items = ref([
  {
    label: 'i-radix-icons-home',
    icon: true,
    to: '/',
  },
  {
    label: 'Components',
    to: '/components/accordion',
  },
  {
    label: 'Breadcrumb',
    to: '/components/breadcrumb',
  },
])

const items2 = ref([
  {
    leading: 'i-radix-icons-home',
    label: 'Home',
    to: '/',
  },
  {
    label: 'Components',
    leading: 'i-radix-icons-cube',
    to: '/components/accordion',
  },
  {
    label: 'Breadcrumb',
    leading: 'i-radix-icons-link-2',
    to: '/components/breadcrumb',
  },
])
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NBreadcrumb
      :items
      size="lg"
    />

    <NSeparator label="or" />

    <NBreadcrumb
      :items="items2"
      separator="i-lucide-slash"
      :_breadcrumb-link="{
        size: 'xs',
      }"
      :_breadcrumb-separator="{
        size: 'lg',
      }"
    />
  </div>
</template>
