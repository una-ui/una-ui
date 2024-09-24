<script lang="ts" setup>
import type { NBreadcrumbEllipsisProps } from '../../../types'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NBreadcrumbEllipsisProps>(), {
  icon: 'breadcrumb-ellipsis-icon',
  size: 'sm',
  square: 9,
})
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn(
      'breadcrumb-ellipsis',
      props.class,
      props.una?.breadcrumbEllipsis,
    )"
    :size
  >
    <slot>
      <NIcon
        :name="icon"
        :class="props.una?.breadcrumbEllipsisIcon"
        aria-hidden="true"
      />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
