<script setup lang="ts">
import type { NAlertDialogTitleProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogTitleProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AlertDialogTitle
    v-bind="forwardedProps"
    :class="cn(
      'alert-dialog-title',
      props.una?.alertDialogTitle,
      props.class,
    )
    "
  >
    <slot />
  </AlertDialogTitle>
</template>
