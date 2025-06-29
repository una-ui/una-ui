<script lang="ts" setup>
import type { NStepperIndicatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperIndicator, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NStepperIndicatorProps>()

const delegatedProps = reactiveOmit(props, [
  'class',
  'una',
  'stepper',
])

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperIndicator
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(
      'stepper-indicator',
      props.class,
      props.una?.stepperIndicator,
    )"
    :stepper
  >
    <slot v-bind="slotProps" />
  </StepperIndicator>
</template>
