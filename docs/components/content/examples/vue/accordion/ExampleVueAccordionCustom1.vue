<script setup lang="ts">
const items = [
  {
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    defaultOpen: true,
  },
  {
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
]
</script>

<template>
  <NAccordion
    :items="items"
    class="rounded-none bg-muted-foreground"
    reverse
    trailing-open="i-heroicons-chevron-right"
    :una="{
      accordionPanel: 'bg-background',
      accordionTrailingClose: 'rotate-90',
      accordionTrailingOpen: 'rotate-0',
    }"
  />
</template>
