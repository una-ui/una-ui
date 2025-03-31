<script setup lang="ts">
import type { NNavigationMenuViewportProps } from '../../types'
import { createReusableTemplate, reactiveOmit } from '@vueuse/core'
import { NavigationMenuViewport, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NNavigationMenuViewportProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
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
  </DefineTemplate>

  <div v-if="props.orientation === 'vertical'" :class="props.orientation === 'vertical' && 'navigation-menu-viewport-vertical'">
    <ReuseTemplate />
  </div>

  <div v-else :class="props.orientation === 'horizontal' && 'navigation-menu-viewport-horizontal'">
    <ReuseTemplate />
  </div>
</template>
