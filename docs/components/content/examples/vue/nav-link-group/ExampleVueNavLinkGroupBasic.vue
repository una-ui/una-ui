<script setup lang="ts">
const links = [
  {
    leading: 'i-heroicons-user-group',
    label: 'Teams',
    defaultOpen: true,
    children: [
      {
        label: 'Team Members 1',
        to: '/navigation/nav-link',
      },
      {
        label: 'Team Members 2',
        to: '/navigation/nav-link-group',
      },
      {
        label: 'Team Members 3',
        to: '/navigation/breadcrumb',
      },
    ],
  },
  {
    leading: 'i-heroicons-user',
    to: '/navigation/nav-link',
    label: 'Users',
    badge: {
      label: '20+',
    },
  },
  {
    leading: 'i-heroicons-cog',
    to: '/navigation/',
    label: 'Settings',
  },
  {
    leading: 'i-heroicons-document-text',
    to: '/navigation/',
    label: 'Documentation',

  },
  {
    leading: 'i-heroicons-question-mark-circle',
    to: '/navigation/',
    label: 'Help',
  },
]
</script>

<template>
  <NNavLinkGroup :links="links" />
</template>
