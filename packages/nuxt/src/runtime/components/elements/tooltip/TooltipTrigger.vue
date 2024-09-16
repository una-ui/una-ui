<script setup lang="ts">
import type { NTooltipTriggerProps } from '../../../types'
import { TooltipTrigger } from 'radix-vue'

const props = defineProps<NTooltipTriggerProps>()
</script>

<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
