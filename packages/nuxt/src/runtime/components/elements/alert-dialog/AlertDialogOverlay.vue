<script lang="ts" setup>
import type { NAlertDialogOverlayProps } from '../../../types'
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogOverlayProps>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      'data-[state=open]:animate-overlayShow',
      'alert-dialog-overlay',
      props.una?.alertDialogOverlay,
      props.class,
    )"
  >
    <slot />
  </DialogOverlay>
</template>
