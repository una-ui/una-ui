<script setup lang="ts">
import type { NCardHeaderProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardHeaderProps>()
</script>

<template>
  <div
    data-slot="card-header"
    :class="cn(
      'card-header',
      props.una?.cardHeader,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
