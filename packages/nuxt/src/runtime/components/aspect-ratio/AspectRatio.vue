<script setup lang="ts">
import type { NAspectRatioProps } from '../../types/aspect-ratio'
import { reactiveOmit } from '@vueuse/core'
import { AspectRatio } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NAspectRatioProps>(), {
  aspectRatio: 'soft',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AspectRatio
    v-slot="{ aspect }"
    v-bind="delegatedProps"
    :class="cn(
      'aspect-ratio',
      props.class,
      props.una?.aspectRatio,
    )"
    :aspect-ratio
  >
    <slot :aspect />
  </AspectRatio>
</template>
