<script setup lang="ts">
import type { NComboboxSeparatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxSeparator } from 'reka-ui'

import { cn } from '../../utils'

const props = defineProps<NComboboxSeparatorProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ComboboxSeparator
    data-slot="combobox-separator"
    v-bind="delegatedProps"
    :class="cn(
      'combobox-separator',
      props.una?.comboboxSeparator,
      props.class,
    )"
  >
    <slot />
  </ComboboxSeparator>
</template>
