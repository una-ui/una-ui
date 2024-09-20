<script setup lang="ts">
import type { NToastProviderProps } from '../../../types'
import { ToastProvider } from 'radix-vue'

const props = defineProps<NToastProviderProps>()
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>
