<script setup lang="ts">
import type { NSkeletonProps } from '../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSkeletonProps>(), {
  as: 'div',
  asChild: false,
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'skeleton',
        props.class,
        props.una?.skeleton,
      )
    "
    :skeleton
    :size
    :rounded
  >
    <slot />
  </Primitive>
</template>
