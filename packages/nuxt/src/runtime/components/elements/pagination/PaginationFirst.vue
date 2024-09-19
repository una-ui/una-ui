<script setup lang="ts">
import type { NPaginationFirstProps } from '../../../types'
import { PaginationFirst, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationFirstProps>(), {
  btn: 'solid-white',
  icon: true,
  label: 'pagination-first-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationFirst as-child>
    <Button
      v-bind="forwardedProps"
      :class="cn('pagination-first', props.class)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </PaginationFirst>
</template>
