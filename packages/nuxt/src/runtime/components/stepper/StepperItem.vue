<script lang="ts" setup>
import type { NStepperItemProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperItem, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NStepperItemProps>(), {
  orientation: 'horizontal',
})

const delegatedProps = reactiveOmit(props, [
  'class',
  'una',
  'title',
  'description',
  'slot',
])
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(
      'group stepper-item',
      orientation === 'vertical' && 'stepper-item-vertical',
      props.class,
      props.una?.stepperItem,
    )"
  >
    <slot v-bind="slotProps" />
  </StepperItem>
</template>
