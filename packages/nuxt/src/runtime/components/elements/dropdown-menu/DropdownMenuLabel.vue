<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuLabel, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'
import type { NDropdownMenuLabelProps } from '../../../types'

const props = defineProps<NDropdownMenuLabelProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn('px-2 py-1.5 text-sm font-semibold', forwardedProps.inset && 'pl-8', props.class)"
  >
    <slot />
  </DropdownMenuLabel>
</template>
