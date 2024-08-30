<script setup lang="ts">
import { computed } from 'vue'
import { PaginationNext, useForwardProps } from 'radix-vue'
import type { NPaginationNextProps } from '../../../types'
import Button from '../../elements/Button.vue'
import { cn } from '../../../utils'
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
    <Button :class="cn('pagination-next-button', props.class)">
      <slot>
        <Icon
          :name="forwardedProps?.una?.paginationNext || 'pagination-next-button-icon'"
        />
      </slot>
    </Button>
  </PaginationNext>
</template>
