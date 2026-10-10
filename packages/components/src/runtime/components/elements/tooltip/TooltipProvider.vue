<script setup lang="ts">
import type { NTooltipProviderProps } from '../../../types'
import { TooltipProvider } from 'reka-ui'

const props = withDefaults(defineProps<NTooltipProviderProps>(), {
  delayDuration: 600,
})
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
