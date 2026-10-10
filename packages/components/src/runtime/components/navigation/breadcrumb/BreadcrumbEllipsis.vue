<script lang="ts" setup>
import type { NBreadcrumbEllipsisProps } from '../../../types'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NBreadcrumbEllipsisProps>(), {
  icon: 'breadcrumb-ellipsis-icon',
  size: 'sm',
  square: 9,
})
</script>

<template>
  <div
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
      <Icon
        :name="icon"
        :class="props.una?.breadcrumbEllipsisIcon"
        aria-hidden="true"
      />
    </slot>
    <span class="sr-only">More</span>
  </div>
</template>
