<script setup lang="ts">
const items = [
  {
    slot: 'guide',
    label: 'Guide',
    trailing: 'i-lucide-arrow-big-down',
    children: [
      {
        label: 'Introduction',
        description: 'Una UI is an atomic UI Framework powered by the UNOCSS engine. It provides components and presets for creating stunning user interfaces with ease.',
        to: '/getting-started/introduction',
      },
      {
        label: 'Installation',
        description: 'How to install dependencies and structure your application with Una UI.',
        to: '/getting-started/installation',
      },
    ],
  },
  {
    label: 'Components',
    trailing: 'i-lucide-arrow-big-down',
    children: [
      {
        leading: 'i-lucide-crown',
        label: 'Dropdown Menu',
        description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        to: '/components/dropdown-menu',
        una: {
          btnLeading: 'text-red',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Sidebar',
        description: 'A composable, themeable and customizable sidebar component.',
        to: '/components/sidebar',
        una: {
          btnLeading: 'text-yellow',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Table',
        description: 'A powerful, responsive table and datagrids built using Tanstack',
        to: '/components/table',
        una: {
          btnLeading: 'text-green',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        to: '/components/tooltip',
        una: {
          btnLeading: 'text-blue',
        },
      },
    ],
  },
]
</script>

<template>
  <div class="flex items-center justify-center p-2">
    <NNavigationMenu
      :items="items"
      indicator
      :_navigation-menu-viewport="{
        class: 'left-1/2 translate-x--1/2',
      }"
    >
      <template #trigger="{ item, index }">
        <div class="flex items-center gap-2">
          <NBadge class="px-2 py-px">
            {{ index + 1 }}
          </NBadge>
          {{ item.label }}
        </div>
      </template>
      <template #guide-content>
        <div class="grid grid-cols-2 w-600px gap-5 p-4">
          <img
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?semt=ais_hybrid"
            alt="gradient"
            class="h-full w-full rounded-md object-cover"
          >
          <ul class="flex flex-col gap-2">
            <NNavigationMenuContentItem
              v-for="item in items[0].children"
              :key="item.label"
              v-bind="{ ...item }"
            />
          </ul>
        </div>
      </template>
    </NNavigationMenu>
  </div>
</template>
