<script setup lang="ts">
const items = [
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
]

const items2 = [
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
]

const items3 = [
  {
    leading: 'i-radix-icons-home',
    label: 'Home',
    to: '/',
  },
  {
    label: 'Components',
    children: [
      {
        label: 'Accordion',
        leading: 'i-radix-icons-link-2',
        to: '/components/accordion',
      },
      {
        label: 'Alert',
        leading: 'i-radix-icons-link-2',
        to: '/components/alert',
      },
    ],
  },
  {
    label: 'Breadcrumb',
    leading: 'i-radix-icons-link-2',
    to: '/components/breadcrumb',
  },
]
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
      separator="i-material-symbols-light-play-arrow"
      :_breadcrumb-link="{
        size: 'sm',
      }"
      :_breadcrumb-separator="{
        size: 'xl',
      }"
    />

    <NSeparator label="or" />

    <NBreadcrumb
      :items="items3"
      :_breadcrumb-link="{
        size: 'md',
      }"
    />
  </div>
</template>
