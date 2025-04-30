<script setup lang="ts">
import type { NAlertDialogTitleProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAlertDialogTitleProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <AlertDialogTitle
    data-slot="alert-dialog-title"
    v-bind="delegatedProps"
    :class="cn(
      'alert-dialog-title',
      props.una?.alertDialogTitle,
      props.class,
    )"
  >
    <slot />
  </AlertDialogTitle>
</template>
