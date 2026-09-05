<script setup lang="ts">
import type { NCardFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardFooterProps>()
</script>

<template>
  <div
    data-slot="card-footer"
    :class="cn(
      'card-footer',
      props.una?.cardFooter,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
