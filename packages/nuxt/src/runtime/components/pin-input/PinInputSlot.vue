<script setup lang="ts">
import type { NPinInputSlotProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NPinInputSlotProps>(), {
  pinInput: 'outline-primary',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const statusClassVariants = computed(() => {
  const input = {
    info: 'input-status-info pin-input-solid-info input-status-ring',
    success: 'input-status-success pin-input-solid-success input-status-ring',
    warning: 'input-status-warning pin-input-solid-warning input-status-ring',
    error: 'input-status-error pin-input-solid-error input-status-ring',
    default: undefined,
  }

  return {
    input: input[props.status ?? 'default'],
  }
})
</script>

<template>
  <PinInputInput
    data-slot="pin-input-slot"
    v-bind="forwardedProps"
    :class="cn(
      'pin-input-slot',
      props.una?.pinInputSlot,
      props.class,
      statusClassVariants.input,
    )"
    :pin-input="statusClassVariants.input === undefined && props.pinInput"
  />
</template>
