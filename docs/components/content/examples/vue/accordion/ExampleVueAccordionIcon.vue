<script setup lang="ts">
const items1 = [
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

const items2 = [
  {
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-information-circle',
  },
  {
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-shield-check',
  },
  {
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-shopping-cart',
  },
]
</script>

<template>
  <div flex="~ col" gap-4>
    <span class="text-sm font-medium">
      Custom Global leading icons
    </span>

    <NAccordion
      :items="items1"
      leading="i-heroicons-question-mark-circle"
    />

    <hr border-base>

    <span class="text-sm font-medium">
      Custom per item leading icon
    </span>

    <NAccordion
      :items="items2"
    />

    <hr border-base>

    <span class="text-sm font-medium">
      Custom Trailing open icon
    </span>

    <NAccordion
      :items="items2"
      trailing-open="i-heroicons-chevron-left"
      :nv="{
        accordionTrailingClose: '-rotate-90',
        accordionTrailingOpen: 'rotate-0',
      }"
    />

    <hr border-base>

    <span class="text-sm font-medium">
      Custom Trailing open and close icons
    </span>

    <NAccordion
      :items="items2"
      trailing-open="i-twemoji-smiling-face-with-sunglasses"
      trailing-close="i-twemoji-loudly-crying-face"
    />
  </div>
</template>
