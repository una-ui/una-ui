<script setup lang="ts">
import type { NTableBodyProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableBodyProps>(), {
  as: 'tbody',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="cn(
      'table-body',
      props?.una?.tableBody,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>
