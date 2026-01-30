<script setup lang="ts">
import type { NAlertDescriptionProps } from '../../types'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NAlertDescriptionProps>(), {
  size: 'sm',
})
</script>

<template>
  <div
    data-slot="alert-description"
    :size
    :class="cn(
      'alert-description',
      props.una?.alertDescription,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
