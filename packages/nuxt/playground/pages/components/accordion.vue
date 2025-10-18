<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: 'item-1',
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'item-2',
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'item-3',
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
] satisfies NAccordionItemProps[]
</script>

<template>
  <!-- data based -->
  <NAccordion
    :items="items"
    default-value="item-1"
  />

  <!-- component based -->
  <NAccordion>
    <NAccordionItem value="item-1" label="Custom Item">
      <!-- rich component content -->
      <template #content>
        Content template can have rich tags and components. Like <strong>bold text</strong> and <NButton label="buttons" />
      </template>
    </NAccordionItem>

    <NAccordionItem label="Custom Icon 1" value="item-2" content="Hello, Sun!">
      <template #trigger="{ open }">
        <!-- support custom open/closed triggers -->
        <NButton :trailing="open ? 'i-radix-icons-sun' : 'i-radix-icons-moon'" />
      </template>
    </NAccordionItem>

    <NAccordionItem label="Custom Icon 2" value="item-3" content="Goodnight, Moon!">
      <template #trigger>
        <!-- Or use data attrs -->
        <NButton trailing="group-data-[state=open]/accordion-trigger:i-radix-icons-moon group-data-[state=closed]/accordion-trigger:i-radix-icons-sun" />
      </template>
    </NAccordionItem>
  </NAccordion>
</template>
