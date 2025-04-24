<script setup lang="ts">
import type { NTableRowProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableRowProps>(), {
  as: 'tr',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    role="row"
    :class="cn(
      'table-row',
      props.una?.tableRow,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>

<style>
/* the builtin unocss utility is overwritten, so it has to be defined here */
.table-row {
  display: table-row;
}
</style>
