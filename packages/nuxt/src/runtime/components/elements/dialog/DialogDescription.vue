<script setup lang="ts">
import type { NDialogDescriptionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48%',
      'dialog-description',
      props.una?.dialogDescription,
      props.class,
    )"
  >
    <slot />
  </DialogDescription>
</template>
