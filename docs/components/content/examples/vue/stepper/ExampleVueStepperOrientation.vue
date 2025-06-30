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
    icon: 'i-lucide-check',
  },
]

const options = [
  { label: 'Horizontal', value: 'horizontal' },
  { label: 'Vertical', value: 'vertical' },
]

const radioValue = ref<'horizontal' | 'vertical'>('horizontal')
</script>

<template>
  <div class="flex flex-col flex-wrap gap-4">
    <NRadioGroup
      v-model="radioValue"
      radio-group="yellow"
      orientation="horizontal"
      :items="options"
    />
    <NStepper
      :items
      :orientation="radioValue"
    />
  </div>
</template>
