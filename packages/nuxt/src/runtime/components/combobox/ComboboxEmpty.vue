<script setup lang="ts">
import type { NComboboxEmptyProps } from '../../types'
import { ComboboxEmpty } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxEmptyProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxEmpty
    data-slot="combobox-empty"
    v-bind="delegatedProps"
    :class="cn('combobox-empty', props.class)"
  >
    <slot />
  </ComboboxEmpty>
</template>
