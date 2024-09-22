<script setup lang="ts">
import type { NPaginationListItemProps } from '../../../types'
import { PaginationListItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationListItemProps>(), {
  paginationSelected: '~',
  paginationUnselected: '~',
  square: true,
})

const delegatedProps = computed(() => {
  const { value: __, class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationListItem
    :value
    as-child
    :data-selected="value === page"
  >
    <Button
      v-bind="forwardedProps"
      :label="value.toString()"
      :class="cn(
        'pagination-list-item',
        props.class,
      )"
    />
  </PaginationListItem>
</template>
