<script setup lang="ts">
import type { NComboboxEmptyProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxEmpty } from 'reka-ui'

import { cn } from '../../utils'

const props = withDefaults(defineProps<NComboboxEmptyProps>(), {
  size: 'sm',
})
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ComboboxEmpty
    data-slot="combobox-empty"
    v-bind="delegatedProps"
    :class="cn(
      'combobox-empty',
      props.una?.comboboxEmpty,
      props.class,
    )"
  >
    <slot />
  </ComboboxEmpty>
</template>
