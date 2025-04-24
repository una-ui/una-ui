<script setup lang="ts">
import type { NNavigationMenuTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuTrigger,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NNavigationMenuTriggerProps>(), {
  btn: '~',
  navigationMenu: 'ghost-white',
  trailing: 'navigation-menu-trigger-trailing-icon',
  as: Button,
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="!props.asChild ? {
      ...$attrs,
      ...forwardedProps,
      class: cn(
        'navigation-menu-trigger group',
        props.una?.navigationMenuTrigger,
        props.class,
      ),
      navigationMenu: btn === '~' ? navigationMenu : undefined,
      una: {
        btnTrailing: cn('navigation-menu-trigger-trailing', forwardedProps.una?.btnTrailing),
        ...props.una,
      },
    } : {}"
    :as-child="props.asChild"
    :as="props.as"
    :disabled
  >
    <slot />
  </NavigationMenuTrigger>
</template>
