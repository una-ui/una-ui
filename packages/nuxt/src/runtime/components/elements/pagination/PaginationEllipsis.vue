<script setup lang="ts">
import { computed } from 'vue'
import { PaginationEllipsis, useForwardProps } from 'radix-vue'
import type { NPaginationEllipsisProps } from '../../../types'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationEllipsisProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationEllipsis v-bind="forwardedProps" :class="cn('pagination-ellipsis', props.class)">
    <slot>
      <Icon
        :name="forwardedProps?.una?.paginationEllipsisIcon || 'pagination-ellipsis-icon'"
      />
    </slot>
  </PaginationEllipsis>
</template>
