<script setup lang="ts">
import type { NTableSelectionHeaderProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Checkbox from '../../forms/Checkbox.vue'

const props = defineProps<NTableSelectionHeaderProps>()

const emit = defineEmits<{
  change: [rows: any[]]
}>()

const delegatedProps = reactiveOmit(props, ['class', 'table', 'una'])

// forward only what was actually passed: props typed as booleans are cast
// to `false` when absent, and spreading those would override the wrapped
// component's own defaults
const forwardedProps = useForwardProps(delegatedProps)

const modelValue = computed(() =>
  props.table.getIsAllPageRowsSelected()
  || (props.table.getIsSomePageRowsSelected() && 'indeterminate'),
)

function onUpdate(value: boolean | 'indeterminate' | null) {
  props.table.toggleAllPageRowsSelected(!!value)
  emit('change', props.table.getRowModel().rows.map(row => row.original))
}
</script>

<template>
  <Checkbox
    aria-label="Select all rows"
    v-bind="forwardedProps"
    :model-value="modelValue"
    :class="cn(
      'table-selection',
      props.una?.tableSelection,
      'table-selection-header',
      props.una?.tableSelectionHeader,
      props.class,
    )"
    :una="props.una"
    @update:model-value="onUpdate"
    @click.stop
  />
</template>
