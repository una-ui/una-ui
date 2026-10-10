<script setup lang="ts">
import type { NAlertDialogHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NAlertDialogHeaderProps>()
</script>

<template>
  <div
    data-slot="alert-dialog-header"
    :class="cn(
      'alert-dialog-header',
      props.una?.alertDialogHeader,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
