<script lang="ts" setup>
import type { NDialogOverlayProps } from '../../../types'
import { DialogOverlay } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NDialogOverlayProps>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      !props.scrollable ? 'dialog-overlay' : 'dialog-scroll-overlay',
      props.una?.dialogOverlay,
      props.class,
    )"
  >
    <slot />
  </DialogOverlay>
</template>
