<script setup lang="ts">
import type { NTableSelectionHeaderProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Checkbox from '../../forms/Checkbox.vue'

const props = defineProps<NTableSelectionHeaderProps>()

const emit = defineEmits<{
  change: [rows: any[]]
}>()

const delegatedProps = reactiveOmit(props, ['class', 'table', 'una'])

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
    v-bind="delegatedProps"
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
