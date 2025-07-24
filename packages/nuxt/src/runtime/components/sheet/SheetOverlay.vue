<script setup lang="ts">
import type { NSheetOverlayProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NSheetOverlayProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DialogOverlay
    data-slot="sheet-overlay"
    :class="cn(
      'data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
      'sheet-overlay',
      props.una?.sheetOverlay,
      props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogOverlay>
</template>
