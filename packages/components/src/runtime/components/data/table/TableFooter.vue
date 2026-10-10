<script setup lang="ts">
import type { NTableFooterProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableFooterProps>(), {
  as: 'tfoot',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="cn(
      'table-footer',
      props.una?.tableFooter,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>
