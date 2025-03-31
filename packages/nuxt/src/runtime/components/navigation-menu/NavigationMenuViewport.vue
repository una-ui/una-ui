<script setup lang="ts">
import type { NNavigationMenuViewportProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuViewport,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NNavigationMenuViewportProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div
    :class="cn(
      'navigation-menu-viewport-wrapper',
      props.una?.navigationMenuViewportWrapper,
      props.class,
    )"
  >
    <NavigationMenuViewport
      v-bind="{ ...forwardedProps, ...$attrs }"
      :class="
        cn(
          'navigation-menu-viewport',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
          props.una?.navigationMenuViewport,
        )
      "
    />
  </div>
</template>
