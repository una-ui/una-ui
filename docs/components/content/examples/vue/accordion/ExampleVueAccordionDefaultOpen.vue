<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: 'open-1',
    label: 'This is open by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'open-2',
    label: 'This is open by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'close-1',
    label: 'This is close by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <NAccordion
    :items="items"
    type="multiple"
    :default-value="['open-1', 'open-2']"
  />
</template>
