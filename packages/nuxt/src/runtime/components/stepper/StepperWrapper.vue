<script setup lang="ts">
import type { NStepperWrapperProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NStepperWrapperProps>()
</script>

<template>
  <div
    :class="cn(
      'stepper-wrapper',
      orientation === 'vertical' && 'stepper-wrapper-vertical',
      props.class,
      props.una?.stepperWrapper,
    )"
  >
    <slot />
  </div>
</template>
