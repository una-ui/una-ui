<script setup lang="ts">
import { computed } from 'vue'
import { SelectScrollDownButton, useForwardProps } from 'radix-vue'
import Icon from '../../elements/Icon.vue'
import { cn } from '../../../utils'
import type { NSelectScrollDownButtonProps } from '../../../types'

const props = defineProps<NSelectScrollDownButtonProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <Icon
        name="i-lucide-chevron-down"
      />
    </slot>
  </SelectScrollDownButton>
</template>
