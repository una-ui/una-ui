<script setup lang="ts">
import type { NavigationMenuLinkEmits } from 'reka-ui'
import type { NNavigationMenuLinkProps } from '../../types'
import { NavigationMenuLink, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NNavigationMenuLinkProps>(), {
  navigationMenuLink: 'ghost-white',
})
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forwarded"
    :class="cn(
      'navigation-menu-link',
      props.una?.navigationMenuLink,
      props.class,
    )"
    :navigation-menu-link
    :una="{
      ...props.una,
    }"
    :as="Button"
  >
    <slot />
  </NavigationMenuLink>
</template>
