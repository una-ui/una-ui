<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: 'reversed-1',
    label: 'This will be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'reversed-2',
    label: 'This will be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'not-reversed-2',
    label: 'This will not be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    _accordionTrigger: {
      reverse: false,
    },
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <NAccordion
    :items="items"
    default-value="reversed-1"
    :_accordion-trigger="{
      leading: 'i-heroicons-question-mark-circle',
      reverse: true,
    }"
  />
</template>
