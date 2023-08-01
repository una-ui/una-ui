<script setup lang="ts">
const items = [
  {
    label: 'This is index 0',
  },
  {
    label: 'This is index 1',
  },
  {
    label: 'This is index 2',
  },
  {
    label: 'This will render default content slot',
    content: 'Star us on Github!',
  },
]
</script>

<template>
  <NAccordion
    :items="items"
  >
    <template #0>
      <div grid place-items-center px-2 pb-8>
        <NIcon name="i-logos-vue" text-8xl />
      </div>
    </template>

    <template #1>
      <div grid place-items-center px-2 pb-8>
        <NIcon name="i-logos-react" text-8xl />
      </div>
    </template>

    <template #2>
      <div grid place-items-center px-2 pb-8>
        <NIcon name="i-logos-svelte-icon" text-8xl />
      </div>
    </template>
  </NAccordion>
</template>
