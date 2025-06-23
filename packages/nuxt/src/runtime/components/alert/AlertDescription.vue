<script setup lang="ts">
import type { NAlertDescriptionProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NAlertDescriptionProps>()
</script>

<template>
  <div
    data-slot="alert-description"
    :class="cn(
      'alert-description',
      props.una?.alertDescription,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
