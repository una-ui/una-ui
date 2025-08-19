<script setup lang="ts">
const items = [
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <div class="w-3xl">
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
  </div>
</template>
