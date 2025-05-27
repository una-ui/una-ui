<script setup lang="ts">
import type { NPaginationPrevProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationPrev, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationPrevProps>(), {
  paginationUnselected: '~',
  square: true,
  icon: true,
  label: 'pagination-prev-icon',
})
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationPrev as-child>
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn(
          'pagination-prev',
          props.una?.pagination,
          props.una?.paginationPrev,
          props.class,
        )"
      />
    </slot>
  </PaginationPrev>
</template>
