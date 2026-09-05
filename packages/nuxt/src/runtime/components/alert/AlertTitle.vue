<script setup lang="ts">
import type { NAlertTitleProps } from '../../types'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NAlertTitleProps>(), {
  size: 'sm',
})
</script>

<template>
  <div
    data-slot="alert-title"
    :size
    :class="cn(
      'alert-title',
      props.una?.alertTitle,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
