<script setup lang="ts">
import { computed, inject } from 'vue'
import {
  SelectItem,
  useForwardProps,
} from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectItemProps, NSelectProps } from '../../../types'
import SelectItemText from './SelectItemText.vue'
import SelectItemIndicator from './SelectItemIndicator.vue'

const props = withDefaults(defineProps<NSelectItemProps>(), {})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
const modelValue = inject<NSelectProps>('selectModelValue')

const isSelected = computed(() => {
  return props.isSelected || modelValue === props.value
})
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'select-item',
        props.class,
        props.una?.selectItem,
      )
    "
    :select-item
    :aria-selected="isSelected"
    :aria-checked="isSelected"
    :is-selected="isSelected"
    :data-state="true ? 'checked' : 'unchecked'"
  >
    <SelectItemIndicator
      v-if="isSelected"
      v-bind="forwardedProps._selectItemIndicator"
    >
      <slot name="item-indicator" />
    </SelectItemIndicator>

    <SelectItemText
      v-bind="forwardedProps._selectItemText"
    >
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
