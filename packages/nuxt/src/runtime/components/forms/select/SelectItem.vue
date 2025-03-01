<script setup lang="ts">
import type { NSelectItemProps } from '../../../types'
import {
  SelectItem,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import SelectItemIndicator from './SelectItemIndicator.vue'
import SelectItemText from './SelectItemText.vue'

const props = withDefaults(defineProps<NSelectItemProps>(), {})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'select-item',
        props.una?.selectItem,
        props.class,
      )
    "
    :select-item
  >
    <SelectItemIndicator
      v-if="isSelected"
      :una
      v-bind="props._selectItemIndicator"
    >
      <slot name="item-indicator" />
    </SelectItemIndicator>

    <SelectItemText
      v-bind="props._selectItemText"
    >
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
