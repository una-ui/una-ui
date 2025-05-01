<script setup lang="ts">
import type { NComboboxLabelProps } from '../../types'
import { ComboboxLabel } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NComboboxLabelProps>()
</script>

<template>
  <ComboboxLabel
    :class="cn(
      'combobox-label',
      props.una?.comboboxLabel,
      props.class,
    )"
  >
    <slot>
      {{ props.label }}
    </slot>
  </ComboboxLabel>
</template>
