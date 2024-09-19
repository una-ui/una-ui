<script setup lang="ts">
import type { NPaginationNextProps } from '../../../types'
import { PaginationNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationNextProps>(), {
  btn: 'solid-white',
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
    <Button
      v-bind="forwardedProps"
      :class="cn('pagination-next', props.class)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </PaginationNext>
</template>
