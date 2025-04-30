<script lang="ts" setup>
import type { NAlertDialogOverlayProps } from '../../../types'
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogOverlayProps>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      'data-[state=open]:animate-overlayShow dark:bg-black/50 fixed inset-0 z-30 bg-white/90',
      props.una?.alertDialogOverlay,
      props.class,
    )"
  >
    <slot />
  </DialogOverlay>
</template>
