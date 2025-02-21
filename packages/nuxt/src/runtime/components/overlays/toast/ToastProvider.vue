<script setup lang="ts">
import type { NToastProviderProps } from '../../../types'
import { ToastProvider } from 'reka-ui'

const props = withDefaults(defineProps<NToastProviderProps>(), {
  duration: 5000,
})
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>
