<script setup lang="ts">
import type { NPaginationEllipsisProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationEllipsis, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationEllipsisProps>(), {
  paginationEllipsis: '~',
})
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationEllipsis
    v-bind="forwardedProps"
    :pagination-ellipsis
    :class="cn(
      'pagination-ellipsis-base',
      props.una?.pagination,
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
