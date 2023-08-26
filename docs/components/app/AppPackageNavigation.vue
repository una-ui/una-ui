<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { version } = useRuntimeConfig().public
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton as="template">
      <NButton btn="~" class="text-$c-gray-600 hover:text-$c-gray-900" trailing="i-heroicons-chevron-down-20-solid" text-nowrap>
        v{{ version }}
      </NButton>
    </MenuButton>

    <MenuItems class="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-muted shadow-lg ring-1 ring-base focus:outline-none">
      <div class="p-2">
        <MenuItem v-slot="{ active }">
          <NButton
            to="https://github.com/una-ui/una-ui/releases"
            target="_blank"
            class="w-full justify-start text-nowrap"
            :btn="active ? 'soft-gray' : 'ghost-gray'"
            trailing="i-heroicons-arrow-up-right text-10px"
            label="Release Notes"
          />
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <NButton
            to="https://github.com/una-ui/una-ui/blob/main/CONTRIBUTING.md"
            target="_blank"
            class="w-full justify-start text-nowrap"
            :btn="active ? 'soft-gray' : 'ghost-gray'"
            trailing="i-heroicons-arrow-up-right text-10px"
            label="Contributing"
          />
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
