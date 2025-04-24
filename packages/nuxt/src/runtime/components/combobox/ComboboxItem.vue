<script setup lang="ts">
import type { ComboboxItemEmits } from 'reka-ui'
import type { NComboboxItemProps } from '../../types'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    data-slot="combobox-item"
    v-bind="forwarded"
    :class="cn('combobox-item', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
