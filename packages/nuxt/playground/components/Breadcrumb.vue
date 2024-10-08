<script setup lang="ts">
const items = ref([
  {
    label: 'i-radix-icons-home',
    icon: true,
    to: '/',
  },
  {
    label: 'Breadcrumb',
    disabled: true,
    to: '/test',
  },
  {
    label: 'Current Page',
    to: '/test/test2',
  },
])

const items2 = ref([
  {
    label: 'i-radix-icons-home',
    icon: true,
    to: '/',
  },
  {
    label: 'Navigation',
    to: '/test',
  },
  {
    label: 'Breadcrumb',
    to: '/test',
  },
  {
    label: 'Current Page',
    to: '/test/test2',
  },
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <NBreadcrumb
      :items
    />

    <NBreadcrumb
      :items="items2"
      separator="i-lucide-slash"
      breadcrumb-active="text-black"
      breadcrumb-inactive="text-muted-foreground"
    />
  </div>
</template>
