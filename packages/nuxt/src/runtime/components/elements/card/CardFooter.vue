<script setup lang="ts">
import type { NCardFooterProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardFooterProps>()
</script>

<template>
  <div
    :class="cn(
      props.class,
      props.una?.cardFooter,
    )"
    :size=" size"
  >
    <slot />
  </div>
</template>
