<script setup lang="ts">
import type { NPaginationPrevProps } from '../../../types'
import { PaginationPrev, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationPrevProps>(), {
  btn: 'solid-white',
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
    <Button
      v-bind="forwardedProps"
      :class="cn('pagination-prev', props.class)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </PaginationPrev>
</template>
