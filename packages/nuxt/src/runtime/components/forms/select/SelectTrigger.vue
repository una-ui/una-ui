<script setup lang="ts">
import { computed } from 'vue'
import { SelectTrigger, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectTriggerProps } from '../../../types'
import Button from '../../elements/Button.vue'

const props = defineProps<NSelectTriggerProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :as="Button"
    btn="outline-white"
    :class="cn(
      'px-3 flex h-2.6em w-full font-normal justify-between [&>span]:line-clamp-1',
      props.class,
    )"
    trailing="i-lucide-chevrons-up-down"
    :una="{
      btnTrailing: 'text-xs text-muted',
    }"
  >
    <slot />
  </SelectTrigger>
</template>
