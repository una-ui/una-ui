<script setup lang="ts">
import type { NPaginationLastProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationLast, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationLastProps>(), {
  paginationUnselected: '~',
  icon: true,
  square: true,
  label: 'pagination-last-icon',
})
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationLast as-child>
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn(
          'pagination-last',
          props.una?.pagination,
          props.una?.paginationLast,
          props.class,
        )"
      />
    </slot>
  </paginationlast>
</template>
