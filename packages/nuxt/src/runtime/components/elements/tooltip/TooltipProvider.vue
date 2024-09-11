<script setup lang="ts">
import { TooltipProvider } from 'radix-vue'
import type { NTooltipProviderProps } from '../../../types'

const props = withDefaults(defineProps<NTooltipProviderProps>(), {
  delayDuration: 600,
})
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
