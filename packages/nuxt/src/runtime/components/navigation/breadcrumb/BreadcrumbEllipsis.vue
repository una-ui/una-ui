<script lang="ts" setup>
import { cn } from '../../../utils'
import type { NBreadcrumbEllipsisProps } from '../../../types'

const props = withDefaults(defineProps<NBreadcrumbEllipsisProps>(), {
  icon: 'breadcrumb-ellipsis-icon',
  size: 'sm',
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
