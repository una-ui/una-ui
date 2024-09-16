<script setup lang="ts">
import type { NPaginationNextProps } from '../../../types'
import { PaginationNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationNextProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext v-bind="forwardedProps" as-child>
    <Button :class="cn('pagination-next', props.class)" btn="solid-white">
      <slot>
        <Icon
          :name="forwardedProps?.una?.paginationNextIcon || 'pagination-next-icon'"
        />
      </slot>
    </Button>
  </PaginationNext>
</template>
