<script setup lang="ts">
import type { NComboboxItemIndicatorProps } from '../../types'
import { ComboboxItemIndicator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NComboboxItemIndicatorProps>(), {
  icon: 'combobox-item-indicator-icon-name',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxItemIndicator
    data-slot="combobox-item-indicator"
    v-bind="forwarded"
    :class="cn(
      'combobox-item-indicator',
      props.una?.comboboxItemIndicator,
      props.class,
    )"
  >
    <slot>
      <NIcon
        :name="props.icon"
        :class="cn(
          'combobox-item-indicator-icon',
          props.una?.comboboxItemIndicatorIcon,
        )"
      />
    </slot>
  </ComboboxItemIndicator>
</template>
