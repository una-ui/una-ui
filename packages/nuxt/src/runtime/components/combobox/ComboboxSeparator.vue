<script setup lang="ts">
import type { NComboboxSeparatorProps } from '../../types'
import { ComboboxSeparator } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxSeparatorProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxSeparator
    data-slot="combobox-separator"
    v-bind="delegatedProps"
    :class="cn(
      'combobox-separator',
      props.una?.comboboxSeparator,
      props.class,
    )"
  >
    <slot />
  </ComboboxSeparator>
</template>
