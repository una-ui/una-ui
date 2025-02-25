<script lang="ts" setup>
import type { NDialogOverlayProps } from '../../../types'
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NDialogOverlayProps>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      !props.scrollable ? 'dialog-overlay' : 'dialog-scroll-overlay',
      props.una?.dialogOverlay,
      props.class,
    )"
  >
    <slot />
  </DialogOverlay>
</template>
