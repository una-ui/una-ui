<script setup lang="ts">
import type { NDialogDescriptionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn('dialog-description', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
