<script setup lang="ts">
import type { NTableSortButtonProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NTableSortButtonProps>(), {
  btn: 'ghost-gray',
  size: 'sm',
})

const delegatedProps = reactiveOmit(props, ['class', 'column', 'una', 'trailing'])

const sorted = computed(() => props.column.getIsSorted())

const sortIcon = computed(() => {
  if (sorted.value === 'asc')
    return props.una?.tableSortAscIcon ?? 'table-sort-asc-icon'
  if (sorted.value === 'desc')
    return props.una?.tableSortDescIcon ?? 'table-sort-desc-icon'

  return props.una?.tableSortNoneIcon ?? 'table-sort-none-icon'
})
</script>

<template>
  <Button
    v-bind="delegatedProps"
    :trailing="props.trailing ?? sortIcon"
    :class="cn(
      'table-sort-button',
      props.una?.tableSortButton,
      props.class,
    )"
    :una="{
      ...props.una,
      btnTrailing: cn(
        'table-sort-icon-base',
        props.una?.tableSortIconBase,
        props.una?.btnTrailing,
      ),
    }"
    @click="props.column.getToggleSortingHandler()?.($event)"
  >
    <slot />
  </Button>
</template>
