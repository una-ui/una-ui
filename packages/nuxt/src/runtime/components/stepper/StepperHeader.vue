<script setup lang="ts">
import type { NStepperHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NStepperHeaderProps>()
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
