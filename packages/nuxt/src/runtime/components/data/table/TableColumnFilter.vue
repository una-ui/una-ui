<script setup lang="ts">
import type { NTableColumnFilterProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Input from '../../forms/Input.vue'

const props = defineProps<NTableColumnFilterProps>()

const delegatedProps = reactiveOmit(props, ['class', 'column', 'una'])

// forward only what was actually passed: props typed as booleans are cast
// to `false` when absent, and spreading those would override the wrapped
// component's own defaults
const forwardedProps = useForwardProps(delegatedProps)

// `columnDef.header` may be a render function, which is not a usable placeholder
const placeholder = computed(() => {
  const header = props.column.columnDef.header
  return typeof header === 'string' ? header : undefined
})
</script>

<template>
  <Input
    :placeholder
    v-bind="forwardedProps"
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
