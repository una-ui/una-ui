<script setup lang="ts">
import { TooltipTrigger } from 'radix-vue'
import type { NTooltipTriggerProps } from '../../../types'

const props = defineProps<NTooltipTriggerProps>()
</script>

<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
