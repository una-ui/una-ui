<script lang="ts" setup>
import type { NBreadcrumbItemProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NBreadcrumbItemProps>()
</script>

<template>
  <li
    :class="cn(
      'breadcrumb-item',
      props.class,
      props.una?.breadcrumbItem,
    )"
  >
    <slot />
  </li>
</template>
