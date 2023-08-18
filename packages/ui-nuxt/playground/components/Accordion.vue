<script setup lang="ts">
const items = [
  {
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
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
  <div flex="~ col" w-90 space-y-4>
    <NAccordion
      :items="items"
      btn="soft rectangle"
      variant-mode
    />

    <hr border="base">

    <NAccordion
      :items="items"
    />

    <hr border="base">

    <NAccordion
      :items="items"
    />
  </div>
</template>
