<script setup lang="ts">
const itemsDefault = ref([
  {
    label: 'Composables',
    children: [
      {
        label: 'Test',
        description:
      'Alert that interrupts the user with important content and expects a response.',
      },
      {
        label: 'Hover Card',
        description:
      'For sighted users to preview content available behind a link.',
      },
      {
        label: 'Progress',
        description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        label: 'Scroll-area',
        to: '/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
  },
  {
    label: 'Components',
    children: [
      {
        label: 'Progress',
        description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        label: 'Scroll-area',
        to: '/scroll-area',
        description: 'Visually or semantically separates content.',
      },
      {
        label: 'Tabs',
        to: '/tabs',
        description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        label: 'Tooltip',
        to: '/tooltip',
        description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
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
    slot: 'composables',
    label: 'Composables',
    leading: 'i-lucide:square-function',
    children: [
      {
        leading: 'i-lucide-circle-check',
        label: 'Test',
        description:
      'Alert that interrupts the user with important content and expects a response.',
      },
      {
        leading: 'i-lucide-circle-check',
        label: 'Hover Card',
        description:
      'For sighted users to preview content available behind a link.',
      },
      {
        leading: 'i-lucide-book-open',
        label: 'Progress',
        description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        leading: 'i-lucide-book-open',
        label: 'Scroll-area',
        to: '/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
  },
  {
    label: 'Components',
    trailing: 'i-lucide-arrow-big-down',
    children: [
      {
        leading: 'i-lucide-crown',
        label: 'Progress',
        description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        una: {
          btnLeading: 'text-red',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Scroll-area',
        to: '/scroll-area',
        description: 'Visually or semantically separates content.',
        una: {
          btnLeading: 'text-yellow',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Navigation menu',
        to: '/navigation-menu',
        description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        una: {
          btnLeading: 'text-green',
        },
      },
      {
        leading: 'i-lucide-crown',
        label: 'Tooltip',
        to: '/tooltip',
        description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
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

const beachAmenities = [
  {
    label: 'Test',
    description:
      'Alert that interrupts the user with important content and expects a response.',
  },
  {
    label: 'Hover Card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    label: 'Scroll-area',
    to: '/scroll-area',
    description: 'Visually or semantically separates content.',
  },
]
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
      <template #composables-content>
        <div class="grid grid-cols-2 w-[600px] gap-5 p-4">
          <img
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?semt=ais_hybrid"
            alt="Beach"
            class="h-full w-full rounded-md object-cover"
          >
          <ul class="flex flex-col gap-2">
            <NNavigationMenuContentItem
              v-for="beachAmenity in beachAmenities"
              :key="beachAmenity.label"
              v-bind="{ ...beachAmenity }"
            />
          </ul>
        </div>
      </template>
    </NNavigationMenu>
  </div>
</template>
