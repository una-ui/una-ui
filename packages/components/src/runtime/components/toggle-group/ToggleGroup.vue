<script lang="ts">
import type { ToggleGroupRootEmits } from 'reka-ui'
import type { NToggleGroupItemProps, NToggleGroupProps } from '../../types'
</script>

<script setup lang="ts" generic="T extends NToggleGroupItemProps, U extends Array<T>">
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import ToggleGroupItem from './ToggleGroupItem.vue'

const props = defineProps<NToggleGroupProps<U>>()
const emits = defineEmits<ToggleGroupRootEmits>()

const rootProps = reactiveOmit(props, [
  'class',
  'size',
  'toggleOff',
  'toggleOn',
  'una',
])

const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-slot="slotProps"
    v-bind="forwarded"
    data-slot="toggle-group"
    :class="cn(
      'toggle-group',
      props.orientation === 'vertical' ? 'toggle-group-vertical' : 'toggle-group-horizontal',
      props.class,
      props.una?.toggleGroup,
    )"
  >
    <slot v-bind="slotProps">
      <template v-if="items && items.length">
        <template v-for="item in items" :key="item.value">
          <slot :name="item.slot ?? 'item'" v-bind="{ item, value: item.value }">
            <ToggleGroupItem
              :una
              :size
              :toggle-on
              :toggle-off
              v-bind="{ ...(item as NToggleGroupItemProps), ..._toggleGroupItem }"
            />
          </slot>
        </template>
      </template>
    </slot>
  </ToggleGroupRoot>
</template>
