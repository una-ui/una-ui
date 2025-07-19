<script lang="ts" setup>
import type { NStepperSeparatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperSeparator, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NStepperSeparatorProps>(), {
  stepper: 'solid-primary',
  orientation: 'horizontal',
})

const delegatedProps = reactiveOmit(props, 'class', 'una')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="cn(
      'stepper-separator',
      orientation === 'vertical' ? 'stepper-separator-vertical' : 'stepper-separator-horizontal',
      props.class,
      props.una?.stepperSeparator,
    )"
    :stepper
  />
</template>
