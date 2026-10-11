<script lang="ts">
import type { ToggleEmits } from 'reka-ui'
import type { NToggleGroupItemProps } from '../../types'
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupItem, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import Toggle from '../elements/Toggle.vue'

const props = withDefaults(defineProps<NToggleGroupItemProps>(), {
  icon: true,
  square: true,
  as: Toggle,
})
const emits = defineEmits<ToggleEmits>()

const delegatedProps = reactiveOmit(props, [
  'class',
  'toggleOff',
  'toggleOn',
  'una',
])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps"
    v-bind="forwarded"
    data-slot="toggle-group-item"
    :toggle-on
    :toggle-off
    :as="props.as"
    :class="cn(
      'toggle-group-item',
      props.una?.toggleGroupItem,
      props.class,
    )"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
