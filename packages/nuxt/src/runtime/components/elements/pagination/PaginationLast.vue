<script setup lang="ts">
import type { NPaginationLastProps } from '../../../types'
import { PaginationLast, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NPaginationLastProps>(), {
  btn: 'solid-white',
  icon: true,
  label: 'pagination-last-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationLast as-child>
    <Button
      v-bind="forwardedProps"
      :class="cn('pagination-last', props.class)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </paginationlast>
</template>
