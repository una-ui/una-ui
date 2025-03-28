<script setup lang="ts">
const itemsDefault = ref([
  {
    label: 'Guide',
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
    label: 'Components',
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
  {
    label: 'Help',
    leading: 'i-lucide-circle-help',
    disabled: true,
  },
  {
    label: 'Utilities',
    to: '/accordion',
  },
])

const itemsCustom = ref([
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
  {
    label: 'Help',
    leading: 'i-lucide-circle-help',
    disabled: true,
  },
])

const options = ref([
  { label: 'Default', value: 'default' },
  { label: 'Slots (custom)', value: 'slots' },
  { label: 'Vertical', value: 'vertical' },
  { label: 'Item custom by array', value: 'item' },
  { label: 'Indicator', value: 'indicator' },
  { label: 'Custom root props', value: 'root' },
])
const value = ref('default')
</script>

<template>
  <div class="mt--20 flex flex-col items-center gap-10">
    <div class="flex flex-wrap gap-4">
      <NRadioGroup
        v-model="value"
        radio-group="yellow"
        orientation="horizontal"
        :items="options"
      />
    </div>
    <NNavigationMenu
      v-if="value !== 'slots' && value !== 'root' && value !== 'vertical'"
      :items="value === 'item' ? itemsCustom : itemsDefault"
      :indicator="value === 'indicator'"
    />
    <NNavigationMenu
      v-if="value === 'vertical'"
      :items="itemsDefault"
      orientation="vertical"
      class="self-start"
    />
    <NNavigationMenu
      v-if="value === 'root'"
      :items="itemsDefault"
      size="md"
      :disable-click-trigger="true"
      :delay-duration="0"
      navigation-menu="ghost-primary"
      navigation-menu-link="ghost-red"
    />
    <NNavigationMenu
      v-if="value === 'slots'"
      :items="itemsCustom"
      :_navigation-menu-viewport="{
        class: 'left-1/2 translate-x--1/2',
      }"
    >
      <template #trigger="{ item, index }">
        <div class="flex items-center gap-2">
          <span>{{ index + 1 }}</span>
          <span class="text-primary fw800">{{ item.label }}</span>
        </div>
      </template>
      <template #guide-content>
        <div class="grid grid-cols-2 w-600px gap-5 p-4">
          <img
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?semt=ais_hybrid"
            alt="Beach"
            class="h-full w-full rounded-md object-cover"
          >
          <ul class="flex flex-col gap-2">
            <NNavigationMenuContentItem
              v-for="item in itemsCustom[0].children"
              :key="item.label"
              v-bind="{ ...item }"
            />
          </ul>
        </div>
      </template>
    </NNavigationMenu>
  </div>
</template>
