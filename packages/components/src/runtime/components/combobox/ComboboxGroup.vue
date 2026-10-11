<script lang="ts">
import type { AcceptableValue } from 'reka-ui'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import type { NComboboxGroupProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxGroup } from 'reka-ui'
import { cn } from '../../utils'

import ComboboxLabel from './ComboboxLabel.vue'

const props = defineProps<NComboboxGroupProps<T>>()
const delegatedProps = reactiveOmit(props, ['class'])
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
