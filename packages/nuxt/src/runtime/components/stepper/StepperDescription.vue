<script lang="ts" setup>
import type { NStepperDescriptionProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperDescription, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NStepperDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'una')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperDescription
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(
      'stepper-description',
      props.class,
      props.una?.stepperDescription,
    )"
  >
    <slot v-bind="slotProps" />
  </StepperDescription>
</template>
