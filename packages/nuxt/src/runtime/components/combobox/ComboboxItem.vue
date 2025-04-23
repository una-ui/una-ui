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
    :class="cn(`data-[highlighted]:bg-accent data-[highlighted]:text-accent [&_svg:not([class*='text-'])]:text-muted relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='square-'])]:square-4`, props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
