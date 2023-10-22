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
    to: '/navigation/pagination',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NNavLink
      v-for="(link, i) in links"
      :key="i" v-bind="link"
      nav-link="text-gray"
      nav-link-active="text-gray"
      nav-link-inactive="text-gray"
    />
  </div>
</template>
