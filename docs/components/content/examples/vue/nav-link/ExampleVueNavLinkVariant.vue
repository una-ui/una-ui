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
  <div class="dark flex flex-col gap-2">
    <div class="flex flex-wrap gap-4 rounded bg-muted p-3">
      <NNavLink
        v-for="(link, i) in links"
        :key="i" v-bind="link"
        nav-link="text-gray"
        nav-link-active="text-gray"
        nav-link-inactive="text-gray"
      />
    </div>

    <hr class="border-base">

    <div class="flex flex-wrap gap-4 rounded bg-primary p-3">
      <NNavLink
        v-for="(link, i) in links"
        :key="i" v-bind="link"
        nav-link="solid"
        nav-link-active="solid"
        nav-link-inactive="solid"
      />
    </div>
  </div>
</template>
