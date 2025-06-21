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
    :class="cn('dialog-overlay', props.una?.sheetOverlay, props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogOverlay>
</template>
