<script setup lang="ts">
import { TooltipRoot, useForwardPropsEmits } from 'radix-vue'
import type { TooltipRootEmits } from 'radix-vue'
import type { NTooltipRootProps } from '../../../types'

const props = defineProps<NTooltipRootProps>()
const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot v-bind="forwarded">
    <slot />
  </TooltipRoot>
</template>
