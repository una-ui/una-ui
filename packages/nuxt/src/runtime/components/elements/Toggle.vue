<script setup lang="ts">
import type { NToggleProps } from '../../types'
import { Toggle, type ToggleEmits, useForwardPropsEmits } from 'radix-vue'
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
  const { class: _, size, ...delegated } = props

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
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Toggle>
</template>
