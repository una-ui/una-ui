<script setup lang="ts">
import type { NSelectItemProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItem,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../../utils'
import SelectItemIndicator from './SelectItemIndicator.vue'

import SelectItemText from './SelectItemText.vue'

const props = withDefaults(defineProps<NSelectItemProps>(), {
  selectItem: 'gray',
})
const delegatedProps = reactiveOmit(props, ['class'])

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
      :una
      v-bind="props._selectItemIndicator"
    >
      <slot name="indicator" />
    </SelectItemIndicator>

    <SelectItemText
      v-bind="props._selectItemText"
    >
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
