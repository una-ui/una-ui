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
</script>

<template>
  <div class="flex flex-col gap-6">
    <NStepper :items stepper="solid-gray" />

    <NStepper :items stepper="solid-indigo" />
  </div>
</template>
