<script setup lang="ts">
import { DropdownMenuTrigger, useForwardProps } from 'radix-vue'
import Button from '../Button.vue'
import { cn } from '../../../utils'
import type { NDropdownMenuTriggerProps } from '../../../types'

const props = withDefaults(defineProps<NDropdownMenuTriggerProps>(), {
})

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    v-bind="forwardedProps"
    :class="cn(
      'justify-start font-normal',
      props.class,
    )"
    :una="{
      btnDefaultVariant: 'dropdown-menu-default-variant',
      btnTrailing: cn('ml-auto', forwardedProps.una?.btnTrailing),
      ...forwardedProps.una,
    }"
    :as="Button"
  />
</template>
