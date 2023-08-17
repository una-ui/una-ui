<script setup lang="ts">
const items = [
  {
    label: 'Why NexveltUI',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-book-open',
  },
  {
    label: 'Getting Started',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-information-circle',
  },
  {
    label: 'Installation',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-arrow-down-tray',
  },
  {
    label: 'Themes and Colors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-beaker',
    disabled: true,
  },
  {
    label: 'Components',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
    leading: 'i-heroicons-square-3-stack-3d',
    loading: true,
  },
]
</script>

<template>
  <div flex="~ col" gap-4>
    <NAccordion
      variant-mode
      :items="items"
      btn="ghost-lime rectangle"
    />

    <hr border-base>

    <NAccordion
      variant-mode
      :items="items"
      btn="solid-orange rectangle"
      :nv="{
        accordionButton: 'rounded-none',
        accordionPanel: 'px-0',
      }"
    />
  </div>
</template>
