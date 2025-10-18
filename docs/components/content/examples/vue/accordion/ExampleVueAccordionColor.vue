<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
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
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NAccordion
      :items="items"
      :_accordion-trigger="{
        btn: 'text-gray',
      }"
    />

    <NSeparator />

    <NAccordion
      :items="items"
      :_accordion-trigger="{
        btn: 'text-orange',
      }"
    />

    <NSeparator />

    <NAccordion
      :items="items"
      :_accordion-trigger="{
        btn: 'text-indigo',
      }"
    />
  </div>
</template>
