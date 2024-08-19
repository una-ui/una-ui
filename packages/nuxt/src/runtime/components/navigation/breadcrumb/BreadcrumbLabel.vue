<script setup lang="ts">
import type { NBreadcrumbLabelProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NBreadcrumbLabelProps>()
</script>

<template>
  <div
    :class="
      cn(
        'breadcrumb-label',
        props.class,
        props.una?.breadcrumbLabel,
      )
    "
  >
    <slot />
  </div>
</template>
