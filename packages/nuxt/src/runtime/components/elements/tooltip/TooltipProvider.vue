<script setup lang="ts">
import { TooltipProvider } from 'radix-vue'
import type { NTooltipProviderProps } from '../../../types'

const props = defineProps<NTooltipProviderProps>()
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
