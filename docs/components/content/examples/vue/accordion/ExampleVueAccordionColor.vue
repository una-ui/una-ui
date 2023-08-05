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
  <div flex="~ col" space-y-4>
    <NAccordion
      :items="items"
      accordion="gray"
    />

    <hr border="base">

    <NAccordion
      :items="items"
      accordion="blue"
    />

    <hr border="base">

    <NAccordion
      :items="items"
      accordion="orange"
    />
  </div>
</template>
