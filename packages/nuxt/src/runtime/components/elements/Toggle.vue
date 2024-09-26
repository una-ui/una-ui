<script setup lang="ts">
import type { NToggleProps } from '../../types'
import { Toggle, type ToggleEmits, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../utils'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<NToggleProps>(), {
  toggle: 'accent',
  size: 'toggle-size',
  rounded: 'toggle-corner',
  disabled: false,
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
    v-bind="forwarded"
    :class="cn('toggle', props.toggle, props.size, props.rounded, props.class)"
  >
    <slot>
      <span v-if="forwarded.label">{{ forwarded.label }}</span>

      <Icon v-else-if="forwarded.icon" :name="forwarded.icon" />
    </slot>
  </Toggle>
</template>
