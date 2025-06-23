<script setup lang="ts">
import type { NPinInputSlotProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NPinInputSlotProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput
    data-slot="pin-input-slot"
    v-bind="forwardedProps"
    :class="cn('pin-input-slot', props.class)"
  />
</template>
