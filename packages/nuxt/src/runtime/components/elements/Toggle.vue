<script setup lang="ts">
import type { ToggleEmits } from 'reka-ui'
import type { NToggleProps } from '../../types'
import { Toggle, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import Button from './Button.vue'

const props = withDefaults(defineProps<NToggleProps>(), {
  icon: true,
  square: true,
  toggleOff: '~',
  toggleOn: '~',
})

const emits = defineEmits<ToggleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

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
    <slot v-for="(slotContent, slotName) in $slots" :name="slotName" v-bind="slotContent" />
  </Toggle>
</template>
