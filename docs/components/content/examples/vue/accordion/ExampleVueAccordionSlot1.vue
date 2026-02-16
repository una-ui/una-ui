<script setup lang="ts">
import type { NAccordionItemProps } from '#una/types'

const items = [
  {
    value: 'get-started',
    label: 'How do I get started?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'return-policy',
    label: 'What is your return policy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
  {
    value: 'exchange-item',
    label: 'Can I exchange an item?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vitae lectus aliquet mollis et eget risus.',
  },
] satisfies NAccordionItemProps[]

const openItems = ref<string>()
</script>

<template>
  <NAccordion
    v-model="openItems"
    :items="items"
    accordion="~"
    class="space-y-3"
    :una="{
      accordionContent: 'data-[state=open]:(border border-t-0 border-primary)',
    }"
  >
    <template #trigger="{ item, index, open }">
      <NButton
        btn="solid-gray block"
        :class="[
          open ? 'ring-0 rounded-b-none border border-primary border-b-0' : '',
        ]"
        class="justify-between gap-x-3 py-3"
        :label="`${item.label}`"
      >
        <template #leading>
          <div class="h-6 w-6 flex items-center justify-center rounded-full bg-inverted">
            <span text="inverted sm">{{ index + 1 }}</span>
          </div>
        </template>

        <template #trailing>
          <NIcon
            name="i-heroicons-chevron-left-20-solid"
            class="ms-auto h-5 w-5 transform transition-transform duration-200"
            :class="[open && '-rotate-90']"
          />
        </template>
      </NButton>
    </template>
    <template #content="{ item }">
      <div class="flex flex-col px-4 py-6">
        <p>
          {{ item.content }}
        </p>
        <div class="mt-5 text-right">
          <NButton
            btn="solid-gray"
            class="mt-3"
            label="Close"
            @click="openItems = undefined"
          />
        </div>
      </div>
    </template>
  </NAccordion>
</template>
