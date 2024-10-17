<script setup lang="ts">
import type { NToastRootProps } from '../../../types'
import { ToastRoot, type ToastRootEmits, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<NToastRootProps>()
const emits = defineEmits<ToastRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
  >
    <slot />
  </ToastRoot>
</template>
