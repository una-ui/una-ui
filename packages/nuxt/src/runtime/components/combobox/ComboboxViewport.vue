<script setup lang="ts">
import type { NComboboxViewportProps } from '../../types'
import { ComboboxViewport, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxViewportProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxViewport
    data-slot="combobox-viewport"
    v-bind="forwarded"
    :class="cn('combobox-viewport', props.class)"
  >
    <slot />
  </ComboboxViewport>
</template>
