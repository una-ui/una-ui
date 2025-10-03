<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: '0',
    label: 'This is index 0',
  },
  {
    value: '1',
    label: 'This is index 1',
  },
  {
    value: '2',
    label: 'This is index 2',
  },
  {
    value: '3',
    label: 'This will render default content slot',
    content: 'Star us on Github!',
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <NAccordion
    :items="items"
  >
    <template #0-content>
      <div class="grid place-items-center px-2 pb-8">
        <NIcon name="i-logos-vue" class="text-8xl" />
      </div>
    </template>

    <template #1-content>
      <div class="grid place-items-center px-2 pb-8">
        <NIcon name="i-logos-react" class="text-8xl" />
      </div>
    </template>

    <template #2-content>
      <div class="grid place-items-center px-2 pb-8">
        <NIcon name="i-logos-svelte-icon" class="text-8xl" />
      </div>
    </template>
  </NAccordion>
</template>
