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
      breadcrumb-active="text-black"
      :items
    />

    <NSeparator label="or" />

    <NBreadcrumb
      breadcrumb-active="text-orange"
      breadcrumb-inactive="text-red"
      :items
    />

    <NSeparator label="or" />

    <NBreadcrumb
      breadcrumb-active="solid-primary"
      breadcrumb-inactive="ghost-primary"
      :_breadcrumb-link="{
        size: 'xs',
        class: 'rounded-full btn-rectangle',
      }"
      :items="items2"
    />
  </div>
</template>
