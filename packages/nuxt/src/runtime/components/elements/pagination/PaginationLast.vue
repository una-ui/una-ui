<script setup lang="ts">
import type { NPaginationLastProps } from '../../../types'
import { PaginationLast, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPaginationLastProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationLast v-bind="forwardedProps" as-child>
    <Button :class="cn('pagination-last', props.class)" btn="solid-white">
      <slot>
        <Icon
          :name="forwardedProps?.una?.paginationLastIcon || 'pagination-last-icon'"
        />
      </slot>
    </Button>
  </PaginationLast>
</template>
