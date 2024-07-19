<script setup lang="ts">
const links = [
  {
    leading: 'i-heroicons-user-group',
    label: 'Teams',
    defaultOpen: true,
    children: [
      {
        label: 'Team Members 1',
        to: '/components/nav-link',
      },
      {
        label: 'Team Members 2',
        to: '/components/nav-link-group',
      },
      {
        label: 'Team Members 3',
        to: '/components/breadcrumb',
      },
    ],
  },
  {
    leading: 'i-heroicons-user',
    to: '/components/nav-link',
    label: 'Users',
    badge: {
      label: '20+',
    },
  },
  {
    leading: 'i-heroicons-cog',
    to: '/components/',
    label: 'Settings',
  },
  {
    leading: 'i-heroicons-document-text',
    to: '/components/',
    label: 'Documentation',

  },
  {
    leading: 'i-heroicons-question-mark-circle',
    to: '/components/',
    label: 'Help',
  },
]
</script>

<template>
  <NNavLinkGroup :links="links" />
</template>
