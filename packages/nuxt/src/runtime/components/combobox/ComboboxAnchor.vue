<script setup lang="ts">
import type { NComboboxAnchorProps } from '../../types'
import { ComboboxAnchor, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxAnchorProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxAnchor
    data-slot="combobox-anchor"
    v-bind="forwarded"
    :class="cn('combobox-anchor', props.class)"
  >
    <slot />
  </ComboboxAnchor>
</template>
