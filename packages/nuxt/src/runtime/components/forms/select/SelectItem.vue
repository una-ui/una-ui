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

const props = defineProps<NSelectItemProps>()

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
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none dark:focus:bg-accent focus:text-accent data-[disabled]:pointer-events-none data-[disabled]:n-disabled',
        props.class,
      )
    "
  >
    <span class="absolute left-2 h-3.5 w-3.5 flex items-center justify-center">
      <SelectItemIndicator>
        <Icon name="i-check" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
