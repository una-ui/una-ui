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
    unstyle
    btn="~"
    trailing-close="i-heroicons-plus"
    trailing-open="i-heroicons-minus"
    :una="{
      accordionButton: 'px-0',
      accordionTrailing: 'text-md',
    }"
  />
</template>
