<script setup lang="ts">
import type { NPaginationEllipsisProps } from '../../../types'
import { PaginationEllipsis, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationEllipsisProps>(), {
  paginationEllipsis: '~',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationEllipsis
    v-bind="forwardedProps"
    :pagination-ellipsis
    :class="cn(
      'pagination-ellipsis-base',
      props.una?.paginationEllipsis,
      props.class,
    )"
  >
    <slot>
      <Icon
        :class="cn(
          'pagination-ellipsis-icon-base',
          props.una?.paginationEllipsisIconBase,
        )"
        :name="forwardedProps?.una?.paginationEllipsisIcon || 'pagination-ellipsis-icon'"
      />
    </slot>
  </PaginationEllipsis>
</template>
