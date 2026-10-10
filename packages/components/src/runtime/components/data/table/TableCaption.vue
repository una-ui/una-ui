<script setup lang="ts">
import type { NTableCaptionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTableCaptionProps>(), {
  as: 'caption',
})

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <Primitive
    :class="cn(
      'table-caption',
      props?.una?.tableCaption,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs } "
  >
    <slot />
  </Primitive>
</template>
