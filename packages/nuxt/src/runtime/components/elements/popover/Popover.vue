<script setup lang="ts">
import { PopoverRoot, useForwardPropsEmits } from 'radix-vue'
import type { PopoverRootEmits } from 'radix-vue'
import type { NPopoverProps } from '../../../types'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverRoot v-bind="forwarded">
    <slot />
  </PopoverRoot>
</template>
