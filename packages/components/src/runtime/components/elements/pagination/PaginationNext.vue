<script setup lang="ts">
import type { NPaginationNextProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationNext, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationNextProps>(), {
  paginationUnselected: '~',
  square: true,
  icon: true,
  label: 'pagination-next-icon',
})
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext as-child>
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn(
          'pagination-next',
          props.una?.pagination,
          props.una?.paginationNext,
          props.class,
        )"
      />
    </slot>
  </PaginationNext>
</template>
