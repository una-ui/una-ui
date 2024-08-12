<script setup lang="ts">
import type { NCardContentProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardContentProps>()
</script>

<template>
  <div
    :class="cn(
      props.class,
      props.una?.cardContent,
    )"
    :size="size"
  >
    <slot />
  </div>
</template>
