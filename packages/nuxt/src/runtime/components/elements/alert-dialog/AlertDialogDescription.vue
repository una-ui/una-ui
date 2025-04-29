<script setup lang="ts">
import type { NAlertDialogDescriptionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AlertDialogDescription
    v-bind="forwardedProps"
    :class="cn(
      'alert-dialog-description',
      props.una?.alertDialogDescription,
      props.class,
    )"
  >
    <slot />
  </AlertDialogDescription>
</template>
