<script setup lang="ts">
import type { NTooltipTriggerProps } from '../../../types'
import { TooltipTrigger } from 'reka-ui'

const props = withDefaults(defineProps<NTooltipTriggerProps>(), {
  square: undefined,
})
</script>

<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
