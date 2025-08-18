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
  { label: 'Horizontal', value: 'horizontal' as const },
  { label: 'Vertical', value: 'vertical' as const },
]

const radioValue = ref<'horizontal' | 'vertical'>('vertical')
</script>

<template>
  <div class="flex flex-col flex-wrap gap-8">
    <NRadioGroup
      v-model="radioValue"
      :items="options"
    />
    <NStepper
      :items="items"
      :orientation="radioValue"
    />
  </div>
</template>
