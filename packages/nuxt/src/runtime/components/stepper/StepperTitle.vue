<script lang="ts" setup>
import type { NStepperTitleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperTitle, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NStepperTitleProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTitle
    v-bind="forwarded"
    :class="cn(
      'stepper-title',
      props.class,
      props.una?.stepperTitle,
    )"
  >
    <slot />
  </StepperTitle>
</template>
