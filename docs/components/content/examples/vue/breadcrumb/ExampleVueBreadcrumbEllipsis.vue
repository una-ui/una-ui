<script setup lang="ts">
const items = [
  {
    label: 'Home',
    leading: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Getting Started',
    to: '/getting-started/introduction',
  },
  {
    label: 'More',
    children: [
      {
        label: 'Components',
        items: [
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
        label: 'API (disabled)',
        disabled: true,
      },
    ],
  },
  {
    label: 'Breadcrumb',
    leading: 'i-radix-icons-link-2',
    to: '/components/breadcrumb',
  },
]

const items2 = [
  {
    label: 'i-lucide-home',
    icon: true,
    to: '/',
  },
  {
    label: 'Getting Started',
    leading: 'i-lucide-rocket',
    to: '/getting-started/introduction',
  },
  {
    label: 'Components',
    children: [
      {
        label: 'Accordion',
        to: '/components/accordion',
      },
      {
        label: 'Alert',
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
  <NBreadcrumb
    :items="items"
  />

  <NSeparator />

  <NBreadcrumb
    :items="items2"
    ellipsis="i-octicon-ellipsis-24"
  />
</template>
