<script setup lang="ts">
import type { NAlertDialogDescriptionProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NAlertDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <AlertDialogDescription
    data-slot="alert-dialog-description"
    v-bind="delegatedProps"
    :class="cn(
      'alert-dialog-description',
      props.una?.alertDialogDescription,
      props.class,
    )"
  >
    <slot />
  </AlertDialogDescription>
</template>
