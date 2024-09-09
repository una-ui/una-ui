<script setup lang="ts">
import { computed } from 'vue'
import { PaginationFirst, useForwardProps } from 'radix-vue'
import type { NPaginationFirstProps } from '../../../types'
import Button from '../../elements/Button.vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationFirstProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationFirst v-bind="forwardedProps" as-child>
    <Button :class="cn('pagination-first', props.class)" btn="solid-white">
      <slot>
        <Icon
          :name="forwardedProps?.una?.paginationFirstIcon || 'pagination-first-icon'"
        />
      </slot>
    </Button>
  </PaginationFirst>
</template>
