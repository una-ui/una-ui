<script setup lang="ts">
import type { NTableColumnFilterProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Input from '../../forms/Input.vue'

const props = defineProps<NTableColumnFilterProps>()

const delegatedProps = reactiveOmit(props, ['class', 'column', 'una'])

// `columnDef.header` may be a render function, which is not a usable placeholder
const placeholder = computed(() => {
  const header = props.column.columnDef.header
  return typeof header === 'string' ? header : undefined
})
</script>

<template>
  <Input
    :placeholder
    v-bind="delegatedProps"
    :model-value="props.column.getFilterValue() as string"
    :class="cn(
      'table-column-filter',
      props.una?.tableColumnFilter,
      props.class,
    )"
    :una="props.una"
    @update:model-value="props.column.setFilterValue($event)"
  />
</template>
