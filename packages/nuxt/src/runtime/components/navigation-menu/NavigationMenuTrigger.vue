<script setup lang="ts">
import type { NNavigationMenuTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuTrigger,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

const props = defineProps<NNavigationMenuTriggerProps>()

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
    :as="Button"
    :trailing="trailing ?? 'navigation-menu-trigger-trailing-default'"
    :una="{
      btnTrailing: cn('navigation-menu-trigger-trailing', forwardedProps.una?.btnTrailing),
      btnDefaultVariant: cn('navigation-menu-default-variant', forwardedProps.una?.btnDefaultVariant),
      ...props.una,
    }"
  >
    <slot />
  </NavigationMenuTrigger>
</template>
