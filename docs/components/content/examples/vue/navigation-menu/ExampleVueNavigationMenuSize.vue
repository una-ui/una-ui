<script setup lang="ts">
const itemsMd = [
  {
    label: 'Guide (Md)',
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
      {
        label: 'Themes',
        description: 'Customize the theme of your application.',
        to: '/api/themes',
      },
      {
        label: 'Composables',
        description: 'Composable functions that can be used in your application.',
        to: '/api/composables',
      },
    ],
  },
  {
    label: 'Components (Md)',
    children: [
      {
        label: 'Dropdown Menu',
        description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        to: '/components/dropdown-menu',
      },
      {
        label: 'Sidebar',
        description: 'A composable, themeable and customizable sidebar component.',
        to: '/components/sidebar',
      },
      {
        label: 'Table',
        description: 'A powerful, responsive table and datagrids built using Tanstack',
        to: '/components/table',
      },
      {
        label: 'Tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        to: '/components/tooltip',
      },
    ],
  },
]

const itemsLg = [
  {
    label: 'Guide (Lg)',
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
      {
        label: 'Themes',
        description: 'Customize the theme of your application.',
        to: '/api/themes',
      },
      {
        label: 'Composables',
        description: 'Composable functions that can be used in your application.',
        to: '/api/composables',
      },
    ],
  },
  {
    label: 'Components (Lg)',
    children: [
      {
        label: 'Dropdown Menu',
        description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        to: '/components/dropdown-menu',
      },
      {
        label: 'Sidebar',
        description: 'A composable, themeable and customizable sidebar component.',
        to: '/components/sidebar',
      },
      {
        label: 'Table',
        description: 'A powerful, responsive table and datagrids built using Tanstack',
        to: '/components/table',
      },
      {
        label: 'Tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        to: '/components/tooltip',
      },
    ],
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NNavigationMenu :items="itemsMd" size="md" />
    <NNavigationMenu :items="itemsLg" size="lg" />
  </div>
</template>
