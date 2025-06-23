<script setup lang="ts">
import type { NAlertTitleProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NAlertTitleProps>()
</script>

<template>
  <div
    data-slot="alert-title"
    :class="cn(
      'alert-title',
      props.una?.alertTitle,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
