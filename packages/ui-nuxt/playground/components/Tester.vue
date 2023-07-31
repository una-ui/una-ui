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
  <NAccordion
    :items="items"
    variant-mode
  >
    <template #label="{ item, index, open }">
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

    <template #content="{ item, open, close }">
      <div
        class="px-4 py-6"
        flex="~ col"
        :class="[
          open ? 'border border-primary border-t-0 transition delay-1000' : '',
        ]"
      >
        <p>
          {{ item.content }}
        </p>

        <div mt-5 text-right>
          <NButton
            btn="solid-gray"
            class="mt-3"
            label="Close"
            @click="close"
          />
        </div>
      </div>
    </template>
  </NAccordion>
</template>
