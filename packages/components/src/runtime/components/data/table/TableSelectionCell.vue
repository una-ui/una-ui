<script setup lang="ts">
import type { NTableSelectionCellProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'
import Checkbox from '../../forms/Checkbox.vue'

const props = defineProps<NTableSelectionCellProps>()

const emit = defineEmits<{
  change: [row: any]
}>()

const delegatedProps = reactiveOmit(props, ['class', 'row', 'una'])

// forward only what was actually passed: props typed as booleans are cast
// to `false` when absent, and spreading those would override the wrapped
// component's own defaults
const forwardedProps = useForwardProps(delegatedProps)

function onUpdate(value: boolean | 'indeterminate' | null) {
  props.row.toggleSelected(!!value)
  emit('change', props.row.original)
}
</script>

<template>
  <Checkbox
    aria-label="Select row"
    v-bind="forwardedProps"
    :model-value="props.row.getIsSelected() ?? false"
    :class="cn(
      'table-selection',
      props.una?.tableSelection,
      'table-selection-cell',
      props.una?.tableSelectionCell,
      props.class,
    )"
    :una="props.una"
    @update:model-value="onUpdate"
    @click.stop
  />
</template>
