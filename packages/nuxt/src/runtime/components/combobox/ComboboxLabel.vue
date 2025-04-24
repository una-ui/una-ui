<script setup lang="ts">
import type { NComboboxLabelProps } from '../../types'
import { ComboboxLabel } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NComboboxLabelProps>()
</script>

<template>
  <ComboboxLabel
    :class="cn(
      'px-2 py-1.5 text-xs text-muted font-medium',
      props.una?.comboboxLabel,
      props.class,
    )"
  >
    <slot>
      {{ props.label }}
    </slot>
  </ComboboxLabel>
</template>
