<script setup lang="ts">
import type { NAspectRatioProps } from '../../types/aspect-ratio'
import { reactiveOmit } from '@vueuse/core'
import { AspectRatio } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NAspectRatioProps>(), {
  aspectRatio: 'soft',
})

const rootProps = reactiveOmit(props, 'class')
</script>

<template>
  <AspectRatio
    v-slot="{ aspect }"
    v-bind="rootProps"
    :aspect-ratio
    :class="cn(
      'aspect-ratio',
      props.una?.aspectRatio,
      props.class,
    )"
  >
    <slot :aspect />
  </AspectRatio>
</template>
