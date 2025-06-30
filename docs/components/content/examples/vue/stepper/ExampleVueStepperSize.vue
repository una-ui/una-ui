<script setup lang="ts">
const items = [
  {
    title: 'Address',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
  },
]
</script>

<template>
  <NStepper :items size="xl" />
</template>
