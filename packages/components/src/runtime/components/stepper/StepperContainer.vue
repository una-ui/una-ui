<script setup lang="ts">
import type { NStepperContainerProps } from '../../types'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NStepperContainerProps>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <div
    :class="cn(
      'stepper-container',
      orientation === 'horizontal' && 'stepper-container-horizontal',
      props.class,
      props.una?.stepperContainer,
    )"
  >
    <slot />
  </div>
</template>
