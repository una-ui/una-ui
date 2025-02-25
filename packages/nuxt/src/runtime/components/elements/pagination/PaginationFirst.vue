<script setup lang="ts">
import type { NPaginationFirstProps } from '../../../types'
import { PaginationFirst, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationFirstProps>(), {
  square: true,
  paginationUnselected: '~',
  icon: true,
  label: 'pagination-first-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

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
          props.class,
        )"
      />
    </slot>
  </PaginationFirst>
</template>
