<script setup lang="ts">
import type { NComboboxGroupProps } from '../../types'
import { ComboboxGroup, ComboboxLabel } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxGroupProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    v-bind="delegatedProps"
    :class="cn('overflow-hidden p-1 text-foreground', props.class)"
  >
    <ComboboxLabel v-if="heading" class="px-2 py-1.5 text-xs text-muted font-medium">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
