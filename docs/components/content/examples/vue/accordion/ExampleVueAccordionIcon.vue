<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items1 = [
  {
    value: 'getting-started',
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'return-policy',
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'exchange-item',
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
] satisfies NAccordionItemProps[]

const items2 = [
  {
    value: 'getting-started',
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-information-circle text-info',
    },
  },
  {
    value: 'return-policy',
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-shield-check text-green-600',
    },
  },
  {
    value: 'exchange-item',
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      leading: 'i-heroicons-shopping-cart text-amber',
    },
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">
      Custom Global leading icons
    </span>

    <NAccordion
      :items="items1"
      :_accordion-trigger="{
        leading: 'i-heroicons-question-mark-circle',
      }"
    />

    <NSeparator />

    <span class="text-sm font-medium">
      Custom per item leading icon
    </span>

    <NAccordion
      :items="items2"
    />

    <NSeparator />

    <span class="text-sm font-medium">
      Custom Trailing open icon
    </span>

    <NAccordion
      :items="items1"
      :_accordion-trigger="{
        trailing: 'i-heroicons-chevron-left',
      }"
      :una="{
        btnTrailing: 'group-data-[state=closed]/accordion-trigger:-rotate-90 group-data-[state=open]/accordion-trigger:rotate-0',
      }"
    />

    <NSeparator />

    <span class="text-sm font-medium">
      Custom Trailing open and close icons
    </span>

    <NAccordion
      :items="items1"
    >
      <template #header="{ open }">
        <NAccordionTrigger :trailing="open ? 'i-twemoji-smiling-face-with-sunglasses' : 'i-twemoji-loudly-crying-face'" />
      </template>
    </NAccordion>
  </div>
</template>
