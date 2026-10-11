<script setup lang="ts">
import type { ToggleEmits } from 'reka-ui'
import type { NToggleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Toggle, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

import Button from './Button.vue'

const props = withDefaults(defineProps<NToggleProps>(), {
  icon: true,
  square: true,
  toggleOff: '~',
  toggleOn: '~',
})

const emits = defineEmits<ToggleEmits>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    :class="cn(
      'toggle',
      props.class,
    )"
    v-bind="forwarded"
    :toggle-off
    :toggle-on
    :as="Button"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Toggle>
</template>
