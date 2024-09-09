<script setup lang="ts">
import { computed } from 'vue'
import { PaginationListItem, useForwardProps } from 'radix-vue'
import type { NPaginationListItemProps } from '../../../types'
import Button from '../../elements/Button.vue'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NPaginationListItemProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationListItem v-bind="forwardedProps" as-child>
    <Button
      btn="solid-white data-[selected=true]:solid"
      :class="cn('pagination-item', props.class)"
    >
      {{ value }}
    </Button>
  </PaginationListItem>
</template>
