<script setup lang="ts">
import type { NNavigationMenuTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuTrigger,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NNavigationMenuTriggerProps>(), {
  btn: 'ghost-white',
  trailing: 'navigation-menu-trigger-trailing-icon',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(
      'navigation-menu-trigger group',
      props.una?.navigationMenuTrigger,
      props.class,
    )"
    btn="~"
    :as="Button"
    :una="{
      btnTrailing: cn('navigation-menu-trigger-trailing', forwardedProps.una?.btnTrailing),
      ...props.una,
    }"
  >
    <slot />
  </NavigationMenuTrigger>
</template>
