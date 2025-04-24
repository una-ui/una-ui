<script setup lang="ts">
import type { NTableCellProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableCellProps>(), {
  as: 'td',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="
      cn(
        'table-cell',
        props?.una?.tableCell,
        props.class,
        { 'table-cell-pinned': dataPinned },
        dataPinned === 'left' ? 'table-cell-pinned-left' : 'table-cell-pinned-right',
      )
    "
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>
