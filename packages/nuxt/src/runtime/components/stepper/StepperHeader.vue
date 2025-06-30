<script setup lang="ts">
import type { NStepperHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NStepperHeaderProps>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <div
    :class="cn(
      'stepper-header',
      orientation === 'horizontal' && 'stepper-header-horizontal',
      props.class,
      props.una?.stepperHeader,
    )"
  >
    <slot />
  </div>
</template>
