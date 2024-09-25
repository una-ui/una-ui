<script setup lang="ts">
import type { NToggleProps } from '../../types'
import { Toggle, type ToggleEmits, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NToggleProps>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
})

const emits = defineEmits<ToggleEmits>()

const delegatedProps = computed(() => {
  const { class: _, size, variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="cn('inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-base transition-colors hover:bg-muted hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent', 'h-10 px-3', 'border border-base bg-transparent shadow-sm hover:bg-accent hover:text-accent', props.class)"
  >
    <slot />
  </Toggle>
</template>
