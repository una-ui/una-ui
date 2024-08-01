<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectItem,
  SelectItemIndicator,
  useForwardProps,
} from 'radix-vue'
import Icon from '../../elements/Icon.vue'
import { cn } from '../../../utils'
import type { NSelectItemProps } from '../../../types'
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
        props.class,
        props.una?.selectItem,
      )
    "
    :select-item="selectItem"
  >
    <span class="absolute left-2 h-3.5 w-3.5 flex items-center justify-center">
      <slot name="item-indicator">
        <SelectItemIndicator
          v-bind="forwardedProps._selectItemIndicator"
        >
          <Icon :name="forwardedProps?.una?.selectItemIndicatorIconName ?? 'select-item-indicator-icon'" :class="forwardedProps?.una?.selectItemIndicatorIcon" />
        </SelectItemIndicator>
      </slot>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
