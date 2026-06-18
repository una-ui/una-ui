<script setup lang="ts">
import type { NCardContentProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardContentProps>()
</script>

<template>
  <div
    data-slot="card-content"
    :class="cn(
      'card-content',
      props.una?.cardContent,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
