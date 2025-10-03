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
  <NAccordion
    :items="items"
    default-value="getting-started"
    class="rounded-none bg-muted"
    reverse
    :_accordion-trigger="{
      trailing: 'i-heroicons-chevron-right',
    }"
    :una="{
      accordionPanel: 'bg-base',
      accordionTrailing: 'transition-rotate duration-300',
      accordionTrailingClose: 'rotate-90',
      accordionTrailingOpen: 'rotate-0',
    }"
  />
</template>
