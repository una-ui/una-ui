<script setup lang="ts">
import type { NComboboxTriggerProps } from '../../types'
import { ComboboxTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxTriggerProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxTrigger
    data-slot="combobox-trigger"
    v-bind="forwarded"
    :class="cn('', props.class)"
    tabindex="0"
  >
    <slot />
  </ComboboxTrigger>
</template>
