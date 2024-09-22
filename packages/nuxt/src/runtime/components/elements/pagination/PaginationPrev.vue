<script setup lang="ts">
import type { NPaginationPrevProps } from '../../../types'
import { PaginationPrev, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationPrevProps>(), {
  paginationUnselected: 'solid-white',
  square: true,
  icon: true,
  label: 'pagination-prev-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationPrev as-child>
    <slot>
      <Button
        :data-selected="false"
        v-bind="forwardedProps"
        :class="cn(
          'pagination-prev',
          props.class,
        )"
      />
    </slot>
  </PaginationPrev>
</template>
