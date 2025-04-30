<script setup lang="ts">
import type { NAlertDialogFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogFooterProps>()
</script>

<template>
  <div
    data-slot="alert-dialog-footer"
    :class="
      cn(
        'alert-dialog-footer',
        props.una?.AlertDialogFooter,
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
