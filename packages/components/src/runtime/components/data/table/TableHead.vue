<script setup lang="ts">
import type { NTableHeadProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableHeadProps>(), {
  as: 'th',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="cn(
      'table-head',
      props.una?.tableHead,
      props.class,
      { 'table-head-pinned': props.dataPinned },
      props.dataPinned === 'left' ? 'table-head-pinned-left' : 'table-head-pinned-right',
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>
