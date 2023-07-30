<script setup lang="ts">
const items = [
  {
    label: 'This will be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    defaultOpen: true,
  },
  {
    label: 'This will be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    label: 'This will not be reversed',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    reverse: false, // this is priority than global reverse
  },
]
</script>

<template>
  <NAccordion
    :items="items"
    leading="i-heroicons-question-mark-circle"
    reverse
  />
</template>
