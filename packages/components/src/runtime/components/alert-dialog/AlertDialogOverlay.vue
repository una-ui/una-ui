<script lang="ts" setup>
import type { NAlertDialogOverlayProps } from '../../types'
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NAlertDialogOverlayProps>()
</script>

<template>
  <DialogOverlay
    data-slot="alert-dialog-overlay"
    :class="cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ',
      'alert-dialog-overlay',
      props.una?.alertDialogOverlay,
      props.class,
    )"
  >
    <slot />
  </DialogOverlay>
</template>
