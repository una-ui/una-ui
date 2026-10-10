<script setup lang="ts" generic="T">
import type { ComboboxItemEmits } from 'reka-ui'
import type { NComboboxItemProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

import { cn } from '../../utils'

const props = withDefaults(defineProps<NComboboxItemProps<T>>(), {
  size: 'sm',
})
const emits = defineEmits<ComboboxItemEmits>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    data-slot="combobox-item"
    v-bind="forwarded"
    :class="cn(
      `combobox-item`,
      props.una?.comboboxItem,
      props.class,
    )"
  >
    <slot />
  </ComboboxItem>
</template>
