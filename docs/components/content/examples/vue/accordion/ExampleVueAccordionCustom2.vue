<script setup lang="ts">
const items = [
  {
    label: '1. How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    defaultOpen: true,
  },
  {
    label: '2. What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    label: '3. Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
]
</script>

<template>
  <NAccordion
    :items="items"
    variant-mode
    class="bg-base divide-y divide-base"
    trailing-open="i-heroicons-plus"
    :nv="{
      accordionButton: 'px-0',
      accordionPanel: 'bg-muted rounded-lg',
      accordionTrailingClose: '-rotate-45',
      accordionTrailing: 'text-md',
    }"
  />
</template>
