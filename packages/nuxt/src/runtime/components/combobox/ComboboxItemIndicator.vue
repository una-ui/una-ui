<script setup lang="ts">
import type { NComboboxItemIndicatorProps } from '../../types'
import { ComboboxItemIndicator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxItemIndicatorProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxItemIndicator
    data-slot="combobox-item-indicator"
    v-bind="forwarded"
    :class="cn('ml-auto', props.class)"
  >
    <slot />
  </ComboboxItemIndicator>
</template>
