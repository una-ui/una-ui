<script setup lang="ts">
import { computed } from 'vue'
import { PaginationPrev, useForwardProps } from 'radix-vue'
import type { NPaginationPrevProps } from '../../../types'
import Button from '../../elements/Button.vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationPrevProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationPrev v-bind="forwardedProps" as-child>
    <Button :class="cn('pagination-prev', props.class)" btn="solid-white">
      <slot>
        <Icon
          :name="forwardedProps?.una?.paginationPrevIcon || 'pagination-prev-icon'"
        />
      </slot>
    </Button>
  </PaginationPrev>
</template>
