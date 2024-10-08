<script setup lang="ts">
const items = [
  {
    label: 'Release Notes',
    href: 'https://github.com/una-ui/una-ui/releases',
    trailing: 'i-heroicons-arrow-up-right text-10px',
  },
  {
    label: 'Contributing',
    href: 'https://github.com/una-ui/una-ui/blob/main/CONTRIBUTING.md',
    trailing: 'i-heroicons-arrow-up-right text-10px',
  },
]
const { version } = useRuntimeConfig().public
</script>

<template>
  <NDropdownMenu
    :items
    :label="`v${version}`"
    dropdown-menu="text-gray"
    :_dropdown-menu-content="{
      class: 'bg-muted-foreground',
    }"
    trailing="i-radix-icons-caret-down"
  />
</template>
