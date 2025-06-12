<script setup lang="ts">
const items = [
  {
    label: 'This is open by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    label: 'This is open by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    label: 'This is close by default',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    defaultOpen: false, // priority over defaultOpen prop
  },
]
</script>

<template>
  <NAccordion
    :items="items"

    default-open multiple
  />
</template>
