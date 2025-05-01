<script lang="ts">
import type { AcceptableValue } from 'reka-ui'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import type { NComboboxGroupProps } from '../../types'
import { ComboboxGroup } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import ComboboxLabel from './ComboboxLabel.vue'

const props = defineProps<NComboboxGroupProps<T>>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    v-bind="delegatedProps"
    :class="cn(
      'combobox-group',
      props.una?.comboboxGroup,
      props.class,
    )"
  >
    <ComboboxLabel
      v-if="props.label"
      :una
    >
      {{ props.label }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
