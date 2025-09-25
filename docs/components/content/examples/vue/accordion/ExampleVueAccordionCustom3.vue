<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: '1.getting-started',
    label: '1. How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: '2.return-policy',
    label: '2. What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: '3.exchange-item',
    label: '3. Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <NAccordion
    :items="items"
    default-value="1.getting-started"
    accordion="~"
    class="space-y-3"
    :_accordion-trigger="{
      btn: '~',
      trailing: 'group-data-[state=open]/accordion-trigger:i-heroicons-minus group-data-[state=closed]/accordion-trigger:i-heroicons-plus',
    }"
    :una="{
      accordionTrigger: 'px-0',
      accordionTrailing: 'text-md',
    }"
  />
</template>
