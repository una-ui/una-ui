<script setup lang="ts">
import { DropdownMenuTrigger, useForwardProps } from 'radix-vue'
import Button from '../Button.vue'
import { cn } from '../../../utils'
import type { NButtonProps, NDropdownMenuTriggerProps } from '../../../types'

const props = defineProps<NDropdownMenuTriggerProps & {
  class?: string
} & NButtonProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    v-bind="forwardedProps"
    :class="cn(
      'justify-between font-normal',
      props.class,
    )"
    :una="{
      btnDefaultVariant: 'btn-solid-white',
    }"
    :as="Button"
  />
</template>
