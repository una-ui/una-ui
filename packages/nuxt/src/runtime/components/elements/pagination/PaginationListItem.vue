<script setup lang="ts">
import type { NPaginationListItemProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PaginationListItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationListItemProps>(), {
  paginationSelected: '~',
  paginationUnselected: '~',
  square: true,
})

const delegatedProps = reactiveOmit(props, ['value'])

const label = computed(() => {
  return props.label || props.value.toString()
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
      :label
      :class="cn(
        'pagination-list-item',
        props?.una?.pagination,
        props?.una?.paginationListItem,
        props.class,
      )"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </PaginationListItem>
</template>
