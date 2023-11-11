<script setup lang="ts">
const links = [
  {
    label: 'Dashboard',
    to: '/navigation/nav-link',
  },
  {
    label: 'Profile',
    to: '/navigation/nav-link-group',
  },
  {
    label: 'Settings',
    to: '/navigation/breadcrumb',
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
