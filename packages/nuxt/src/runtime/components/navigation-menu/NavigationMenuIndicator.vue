<script setup lang="ts">
import type { NNavigationMenuIndicatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuIndicator, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NNavigationMenuIndicatorProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="cn(
      'navigation-menu-indicator',
      props.una?.navigationMenuIndicator,
      props.class,
    )"
  >
    <slot />
    <div
      class="navigation-menu-indicator-arrow"
      :class="props.una?.navigationMenuIndicatorArrow"
    />
  </NavigationMenuIndicator>
</template>
