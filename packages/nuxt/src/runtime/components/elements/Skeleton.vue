<script setup lang="ts">
import type { NSkeletonProps } from '../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSkeletonProps>(), {
  skeleton: 'gray',
  as: 'div',
})
</script>

<template>
  <Primitive
    :as
    :as-child
    aria-busy="true"
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
