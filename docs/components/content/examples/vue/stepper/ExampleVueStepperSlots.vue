<script setup lang="ts">
const items = [
  {
    title: 'Your details',
    description: 'Provide your name and email',
  },
  {
    title: 'Company details',
    description: 'A few details about your company',
  },
  {
    title: 'Invite your team',
    description: 'Start collaborating with your team',
  },
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <NStepper ref="stepper" :items="items">
    <template #content="{ item }">
      <NAspectRatio
        :ratio="16 / 4"
        class="mx-auto max-w-2xl"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <p>{{ item.title }}</p>
        </div>
      </NAspectRatio>
    </template>
  </NStepper>
  <div class="mx-auto mt-4 max-w-2xl flex justify-between gap-2">
    <NButton label="prev" leading="i-lucide-arrow-left" @click="stepper?.prevStep()" />
    <NButton label="next" trailing="i-lucide-arrow-right" @click="stepper?.nextStep()" />
  </div>
</template>
