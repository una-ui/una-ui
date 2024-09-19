<script setup lang="ts">
import type { NPaginationListItemProps } from '../../../types'
import { PaginationListItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationListItemProps>(), {
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
  >
    <!-- btn="data-[selected]:solid-white data-[selected=true]:solid-primary" -->
    <Button
      v-bind="forwardedProps"
      :btn="`${value === page ? 'solid-primary' : 'solid-white'}`"
      :label="value.toString()"
      :class="cn('pagination-list-item', props.class)"
    />
  </PaginationListItem>
</template>
