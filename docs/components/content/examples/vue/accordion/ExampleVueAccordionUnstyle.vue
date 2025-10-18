<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: 'why-una',
    label: 'Why Una',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-book-open',
    },
  },
  {
    value: 'getting-started',
    label: 'Getting Started',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-information-circle',
    },
  },
  {
    value: 'installation',
    label: 'Installation',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-arrow-down-tray',
    },
  },
  {
    value: 'themes-and-colors',
    label: 'Themes and Colors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-beaker',
    },
    disabled: true,
  },
  {
    value: 'components',
    label: 'Components',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-square-3-stack-3d',
      loading: true,
    },
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <div class="flex flex-col gap-4">
    <NAccordion
      accordion="~"
      class="space-y-3"
      :items="items"
    />

    <NSeparator />

    <NAccordion
      accordion="~"
      class="space-y-3"
      :items="items"
      :_accordion-trigger="{
        btn: 'ghost-lime',
      }"
    />

    <NSeparator />

    <NAccordion
      accordion="~"
      class="space-y-3"
      :items="items"
      :_accordion-trigger="{
        btn: 'solid-orange',
        rounded: 'none',
      }"
      :una="{
        accordionPanel: 'px-0',
      }"
    />
  </div>
</template>
