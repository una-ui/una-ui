<script setup lang="ts">
import type { NToastProviderProps } from '../../../types'
import { ToastProvider } from 'radix-vue'

const props = withDefaults(defineProps<NToastProviderProps>(), {
  duration: 4000,
})
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>
