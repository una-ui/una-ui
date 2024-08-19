<script setup lang="ts">
import type { NBreadcrumbSeparatorProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NBreadcrumbSeparatorProps>()
</script>

<template>
  <div
    :class="
      cn(
        'breadcrumb-separator',
        props.class,
        props.una?.breadcrumbSeparator,
      )
    "
  >
    <slot />
  </div>
</template>
