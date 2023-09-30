<script setup lang="ts">
const list = [
  {
    label: 'Getting Started',
    href: '/getting-started',
    btn: 'solid-pink',
    class: 'rounded-full px-5.5 py-3 font-bold',
  },
  {
    label: 'View Components',
    href: '/elements',
    btn: 'solid-gray',
    class: 'rounded-full px-5.5 py-3 font-bold',
  },
  {
    label: 'npm i @una-ui/nuxt',
    btn: 'solid-red',
    class: 'rounded-full px-5.5 py-3 font-bold',
    trailing: 'i-heroicons-clipboard-document',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <NButton
      v-for="link in list"
      :key="link.label"
      v-bind="link"
    />
  </div>
</template>
