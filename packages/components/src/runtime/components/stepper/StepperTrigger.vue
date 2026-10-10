<script lang="ts" setup>
import type { NStepperTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperTrigger, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NStepperTriggerProps>(), {
  stepper: 'solid-primary',
})

const delegatedProps = reactiveOmit(props, 'class', 'una')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="cn(
      'stepper-trigger',
      props.class,
      props.una?.stepperTrigger,
    )"
    :stepper
  >
    <slot />
  </StepperTrigger>
</template>
