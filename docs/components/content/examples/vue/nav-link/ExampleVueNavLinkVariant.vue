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
  <div class="flex flex-col gap-2">
    <!-- force dark mode always using `.dark` -->
    <div class="dark flex flex-wrap gap-4 rounded bg-muted-foreground p-3">
      <NNavLink
        v-for="(link, i) in links"
        :key="i" v-bind="link"
        nav-link="text-gray"
        nav-link-active="text-gray"
        nav-link-inactive="text-gray"
      />
    </div>

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
