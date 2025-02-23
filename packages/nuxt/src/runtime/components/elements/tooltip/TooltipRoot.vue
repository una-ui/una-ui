<script setup lang="ts">
import type { TooltipRootEmits } from 'reka-ui'
import type { NTooltipRootProps } from '../../../types'
import { TooltipRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NTooltipRootProps>()
const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot v-bind="forwarded">
    <slot />
  </TooltipRoot>
</template>
