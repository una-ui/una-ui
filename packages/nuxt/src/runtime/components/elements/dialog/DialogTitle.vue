<script setup lang="ts">
import type { NDialogTitleProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogTitle, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NDialogTitleProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="cn(
      'dialog-title',
      props.una?.dialogTitle,
      props.class,
    )
    "
  >
    <slot />
  </DialogTitle>
</template>
