<script setup lang="ts">
import type { NDropdownMenuLabelProps } from '../../../types'
import { DropdownMenuLabel, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NDropdownMenuLabelProps>(), {
  size: 'sm',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn(
      'dropdown-menu-label',
      forwardedProps.inset && 'pl-8',
      props.class,
      props.una?.dropdownMenuLabel,
    )"
  >
    <slot />
  </DropdownMenuLabel>
</template>
