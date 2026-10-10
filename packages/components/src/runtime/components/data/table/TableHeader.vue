<script setup lang="ts">
import type { NTableHeaderProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableHeaderProps>(), {
  as: 'thead',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="cn(
      'table-header',
      props?.una?.tableHeader,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </Primitive>
</template>
