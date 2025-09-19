<script setup lang="ts">
const items = [
  {
    value: 'reversed-1',
    label: 'This will be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    defaultOpen: true,
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
    reverse: false,
  },
]
</script>

<template>
  <NAccordion
    :items="items"
    :_accordion-trigger="{
      leading: 'i-heroicons-question-mark-circle',
      reverse: true,
    }"
  />
</template>
