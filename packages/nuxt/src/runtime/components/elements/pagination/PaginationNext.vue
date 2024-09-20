<script setup lang="ts">
import type { NPaginationNextProps } from '../../../types'
import { PaginationNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationNextProps>(), {
  paginationUnselected: 'solid-white',
  icon: true,
  label: 'pagination-next-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext as-child>
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn('pagination-next p-0', props.class)"
      />
    </slot>
  </PaginationNext>
</template>
