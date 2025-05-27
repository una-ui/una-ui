<script setup lang="ts">
import type { NPaginationFirstProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationFirst, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationFirstProps>(), {
  square: true,
  paginationUnselected: '~',
  icon: true,
  label: 'pagination-first-icon',
})
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationFirst
    as-child
  >
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn(
          'pagination-first',
          props.una?.pagination,
          props.una?.paginationFirst,
          props.class,
        )"
      />
    </slot>
  </PaginationFirst>
</template>
