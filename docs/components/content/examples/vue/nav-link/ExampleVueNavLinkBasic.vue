<script setup lang="ts">
const links = [
  {
    label: 'Dashboard',
    to: '/components/nav-link',
  },
  {
    label: 'Profile',
    to: '/components/nav-link-group',
  },
  {
    label: 'Settings',
    to: '/components/breadcrumb',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NNavLink
      v-for="(link, i) in links"
      :key="i"
      v-bind="link"
    />
  </div>
</template>
